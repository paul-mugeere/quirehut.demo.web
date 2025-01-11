import KeycloakProvider from "next-auth/providers/keycloak";
import type { Provider } from "next-auth/providers"

const keycloakProvider= KeycloakProvider({
    clientId: process.env.KEYCLOAK_ID as string,
    clientSecret: process.env.KEYCLOAK_SECRET as string,
    issuer: process.env.KEYCLOAK_ISSUER,
    authorization: {
        params: {
            scope: "openid email profile",
            response_type: "code",
            redirect_uri: process.env.KEYCLOAK_REDIRECT_URL as string,
        },
        // url : process.env.KEYCLOAK_AUTHORIZATION_URL as string 
    },
});

export const authProviders: Provider[]=[
    keycloakProvider
]

export const providerMap = authProviders.map((provider) => {
    if (typeof provider === "function") {
        const providerData = provider();
        return {id: providerData.id, name: providerData.name}
    }else{
        return {id: provider.id, name: provider.name}
    }
}).filter((provider)=> provider.id !=="credentials");
