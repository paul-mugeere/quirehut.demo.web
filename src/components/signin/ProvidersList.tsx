"use client"

import { providerMap } from "@/lib/auth/authProviders"
import { useSearchParams } from "next/navigation";
import { signInUser } from "@/lib/signin-action";
import { PrimaryButton } from "@/components/buttons";

export default function ProvidersList() {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/";

    return (
        Object.values(providerMap).map((provider) =>
            <div id={provider.id} className="space-y-4 md:space-y-6" key={provider.id}>
                <PrimaryButton type="button" label={`Sign in with ${provider.name}`} handleOnClick={() => signInUser(provider.id, callbackUrl)} />
            </div>
        )
    )
}