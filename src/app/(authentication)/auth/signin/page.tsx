import { ProvidersList } from "@/components/signin"
import { Suspense } from "react"

const SignInPage = () => {
    return (
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-lg leading-tight tracking-tight text-gray-900 md:text-xl">
                Sign in to your account
            </h1>
            <Suspense>
                <ProvidersList />
            </Suspense>
        </div>
    )
}
export default SignInPage;