import { auth } from "@/lib/auth/auth-config"

export default async function Profile(){
    const session = await auth();
  
    if(!session){
        return (<h1>Unauthorized</h1>);
    }
    return (<div><h1>My Profile</h1><p>Welcome, {session.user.name}!</p></div>);
}