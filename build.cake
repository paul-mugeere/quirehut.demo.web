#addin "nuget:?package=quirehut.demo.cake.docker&version=1.0.0&loaddependencies=true"
 
using quirehut.demo.cake.docker

var target = Argument("target", "Default");


Setup<BuildContext>(setupContext =>
{
    var context = new BuildContext("quirehut.demo.web");
    var registryUser = EnvironmentVariable("CI_REGISTRY_USER"); // Username for GitLab registry login in CI/CD
    var jobToken = EnvironmentVariable("CI_JOB_TOKEN"); // CI_JOB_TOKEN for authentication
    var dockerRegistry = EnvironmentVariable("CI_REGISTRY"); // GitLab Container Registry URL
    var dockerRegistryImage = EnvironmentVariable("CI_REGISTRY_IMAGE");
    var dockerImageTag = EnvironmentVariable("CI_COMMIT_REF_SLUG");
    return context with
    {
        DockerImageSettings = new DockerImageSettings(dockerRegistryImage, ".") with { Tag = dockerImageTag },
        DockerLoginSettings = new DockerLoginSettings(registryUser, jobToken, dockerRegistry)
    };
});

Task("Docker-Login")
    .WithCriteria(() => !BuildSystem.IsLocalBuild, "Skip on local build")
    .Does<BuildContext>((context) =>
    {
        DockerLogin(context.DockerLoginSettings);
    });

Task("Docker-Build")
    .WithCriteria(() => !BuildSystem.IsLocalBuild, "Skip on local build")
    .IsDependentOn("Docker-Login")
    .Does<BuildContext>(context =>
    {
        DockerBuild(context.DockerImageSettings);
    });

Task("Docker-Push")
    .WithCriteria(() => !BuildSystem.IsLocalBuild, "Skip on local build")
    .IsDependentOn("Docker-Build")
    .Does<BuildContext>(context =>
    {
        DockerPush(context.DockerImageSettings);
    });

Task("Default")
    .IsDependentOn("Docker-Push");

RunTarget(target);