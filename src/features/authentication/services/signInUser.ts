import { signIn } from "next-auth/react";
import { AuthError } from "next-auth"

export function signInUser(
    provider: string,
    callbackUrl: string = "/"
) {
    try {
        signIn(provider, { callbackUrl });
    } catch (error) {
        if (error instanceof AuthError) {
            return error.message;
        }
        throw error
    }
}