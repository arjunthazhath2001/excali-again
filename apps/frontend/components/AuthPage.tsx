import { Button } from "@repo/ui/button";
import { Input } from "@repo/ui/Input";


export function AuthPage({ isSignIn }: { isSignIn: boolean }) {
    return (
        <div className="w-full h-screen flex justify-center items-center">

            <div className="p-10 m-2 bg-purple-400 h-96 rounded-xl flex flex-col justify-center items-center gap-4">

                <Input type={"text"} placeholder={"abc@mail.com"} />
                <Input type={"password"} placeholder={"******"} />
                <Button className="px-6 py-2" variant="primary">{isSignIn?"SignIn":"SignUp"}</Button>
            </div>

        </div>
    )
}