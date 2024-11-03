#addin "nuget:?package=quirehut.demo.cake.docker&version=1.0.9&loaddependencies=true"
#addin nuget:?package=Newtonsoft.Json
#tool "dotnet:?package=GitVersion.Tool&version=5.12.0"

using quirehut.demo.cake.docker

var target = Argument("target", "Default");

var registryUser = EnvironmentVariable("CI_REGISTRY_USER"); // Username for GitLab registry login in CI/CD
var jobToken = EnvironmentVariable("CI_JOB_TOKEN"); // CI_JOB_TOKEN for authentication
var dockerRegistry = EnvironmentVariable("CI_REGISTRY"); // GitLab Container Registry URL
var dockerRegistryImage = EnvironmentVariable("CI_REGISTRY_IMAGE");
var dockerImageTag = EnvironmentVariable("CI_COMMIT_REF_SLUG");

Setup<BuildContext>(setupContext =>
{
    var buildContext = new BuildContext(setupContext);
    buildContext.Settings.Add(
        new DockerBuildSettings
        {
            DockerImageSettings = new DockerImageSettings(dockerRegistryImage, "."),
            DockerLoginSettings = new DockerLoginSettings(registryUser, jobToken, dockerRegistry)
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