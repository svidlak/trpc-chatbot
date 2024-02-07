import { useUserStore } from "@/store/userStore";
import { GoogleLogin as GoogleLoginSource } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export function GoogleLogin() {
    const { setUserData, userData } = useUserStore(store => store)
    console.log({ userData })

    return (
        <div className="w-[250px] p-3">
            {
                !userData?.email ? (<GoogleLoginSource
                    theme="outline"
                    onSuccess={credentialResponse => {
                        const { credential } = credentialResponse
                        const userData = jwtDecode(credential as string)
                        setUserData(userData)
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                    type="icon"
                    shape="pill"
                    useOneTap
                />) : (
                    <Avatar>
                        <AvatarImage src={userData.picture} alt="@shadcn" />
                    </Avatar>
                )
            }
        </div>
    )
}