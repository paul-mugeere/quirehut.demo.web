"use client"

import { providerMap } from "@/features/authentication/utils/authProviders"
import { useSearchParams } from "next/navigation";
import { signInUser } from "@/features/authentication/services/signInUser";
import { PrimaryButton } from "@/features/shared/components/buttons";

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