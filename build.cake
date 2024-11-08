#addin "nuget:?package=quirehut.demo.cake.docker&version=1.0.10&loaddependencies=true"
#addin nuget:?package=Newtonsoft.Json
#tool "dotnet:?package=GitVersion.Tool&version=5.12.0"

using quirehut.demo.cake.docker

var target = Argument("target", "Default");

Setup<BuildContext>(setupContext =>
{
    var buildContext = new BuildContext(setupContext);
    buildContext.Settings.Add(
        new DockerBuildSettings
        {
            DockerImageSettings = new DockerImageSettings(EnvironmentVariable("CI_REGISTRY_IMAGE"), "."),
            DockerLoginSettings = new DockerLoginSettings(
                EnvironmentVariable("CI_REGISTRY_USER"), 
                EnvironmentVariable("CI_JOB_TOKEN"), 
                EnvironmentVariable("CI_REGISTRY"))
        });
    return buildContext;
});

Task("Docker-Login")
    .WithCriteria(() => !BuildSystem.IsLocalBuild, "Skip on local build")
    .Does<BuildContext>((context) =>
    {
        DockerLogin(context);
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


Task("Default")
    .IsDependentOn("Docker-Push");


RunTarget(target);