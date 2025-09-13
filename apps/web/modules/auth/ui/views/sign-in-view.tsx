import { SignIn } from "@clerk/nextjs";

export default function SignInView() {
    return (
        <SignIn path="/sign-in" />
    )
}