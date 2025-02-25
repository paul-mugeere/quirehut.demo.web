import { signOut } from "next-auth/react";
import { FC, useState } from "react";
import { PrimaryButton } from "@/features/shared/components/buttons";


interface SignoutButtonProps {
    callbackUrl: string | undefined;
}

const SignoutButton: FC<SignoutButtonProps> = ({ callbackUrl }) => {
    const [isLoading, setIsLoading] = useState(false);
    
    const handleSignout = async () => {
        setIsLoading(true);
        try {
            await signOut({ callbackUrl: callbackUrl || "/"});
            
        } catch (error) {
            console.error("Error signing out: ", error);
        } finally {
            setIsLoading(false);
        }
    }

    return <PrimaryButton handleOnClick={handleSignout} label="Sign out" state={isLoading}/>
}

export default SignoutButton;