"use client"

import { useMutation, useQuery, Authenticated, Unauthenticated} from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import { SignInButton, UserButton } from "@clerk/nextjs";

export default function Page() {

  const users = useQuery(api.user.getMany);
  // console.log(users);

  const addUser = useMutation(api.user.add)

  return (

      <>
        <Authenticated>
            <div className="flex items-center justify-center min-h-svh">
              <div className="flex flex-col items-center justify-center gap-4">
                <h1>App / Hello </h1>

                <h2>You are logged in!</h2>
                <UserButton/>

                <Button onClick={() => addUser()}>Add User</Button>
                
                <div className="max-w-sm w-full mx-auto">
                  {JSON.stringify(users, null, 2)}
                </div>
              </div>
            </div>
        </Authenticated>

        <Unauthenticated>
           <h2>Must be loading!</h2>
           <SignInButton />
        </Unauthenticated>
      </>
      
  )
}
