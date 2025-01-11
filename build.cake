#addin "nuget:?package=quirehut.demo.cake.aliases&version=1.0.4&loaddependencies=true"
#addin nuget:?package=Newtonsoft.Json
#tool "dotnet:?package=GitVersion.Tool&version=5.12.0"

using quirehut.demo.cake.aliases;
using quirehut.demo.cake.aliases.Docker;
using quirehut.demo.cake.aliases.Aws;
using quirehut.demo.cake.aliases.Extensions;

var target = Argument("target", "Default");

Setup<BuildContext>(setupContext =>
{
    var buildContext = new BuildContext(setupContext);
    buildContext.Settings.Add(
        new DockerBuildSettings
        {
            DockerImageSettings = new DockerImageSettings("./src"),
        });
        buildContext.Settings.Add(new CloudFormationArgs("demo-web","./deploy/fargate-app-spec.yaml", new Dictionary<string,string>{
           { "ContainerImage", buildContext.GetDockerImageTag()}
        }));
    return buildContext;
});

Task("Aws-ValidateCfnTemplates")
    .WithCriteria(() => !BuildSystem.IsLocalBuild, "Skip on local build")
    .Does<BuildContext>(async (cakeContext, buildContext) =>
    {
        await AwsValidateCloudFormationTemplateAsync(buildContext);
    });
Task("Aws-AnalyzeCfnTemplates")
    .WithCriteria(() => !BuildSystem.IsLocalBuild, "Skip on local build")
    .IsDependentOn("Aws-ValidateCfnTemplates")
    .Does<BuildContext>(context =>
    {
        AnalyseCloudFormationTemplates("./deploy","--quiet");
    });

Task("Docker-Login")
    .WithCriteria(() => !BuildSystem.IsLocalBuild, "Skip on local build")
    .IsDependentOn("Aws-AnalyzeCfnTemplates")
    .Does<BuildContext>((context) =>
    {
        DockerLogin();
    });

Task("Docker-Build")
    .WithCriteria(() => !BuildSystem.IsLocalBuild, "Skip on local build")
    .IsDependentOn("Docker-Login")
    .Does<BuildContext>(context =>
    {
        DockerBuild(context);
    });

Task("Docker-Push")
    .WithCriteria(() => !BuildSystem.IsLocalBuild, "Skip on local build")
    .IsDependentOn("Docker-Build")
    .Does<BuildContext>(context =>
    {
        DockerPush(context);
    });

Task("Aws-CreateChangeSet")
    .WithCriteria(() => !BuildSystem.IsLocalBuild, "Skip on local build")
    .IsDependentOn("Docker-Push")
    .Does<BuildContext>(async context =>
    {
        // await AwsCreateChangeSetAsync(context);
    });


Task("Default")
    .IsDependentOn("Aws-CreateChangeSet");


RunTarget(target);