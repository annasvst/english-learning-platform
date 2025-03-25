"use client";

import Link from "next/link";
import { Button, ButtonColor } from "@components/Button";
import { TestResults } from "../_components/TestResults";
import { useEffect, useState } from "react";
import { ImageBroken } from "@phosphor-icons/react";

interface User {
  name: string;
  email: string;
}

export default function Result() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchUser() {
      const userResponse = await fetch("/api/user");
      if (userResponse.ok) {
        const userData = await userResponse.json();
        setUser(userData);
      } else {
        console.error("Error fetching user", userResponse);
      }
    }
    fetchUser();
  }, []);

  if (!user) {
    return (
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 text-gray-900 min-h-screen text-center py-20 px-8 md:px-20">
        <div className="flex justify-center items-center mb-8">
          <ImageBroken size={240} />
        </div>
        <p className="text-lg">
          Oh no, something went wrong when fetching results. Send us an email at{" "}
          <Link
            href="mailto:hello@code2career.eu"
            className="underline hover:text-teal-800 hover:cursor-pointer"
          >
            hello@code2career.eu
          </Link>{" "}
          and we&apos;ll try to help.
        </p>
        <div className="flex justify-center items-center my-8">
        <Button color={ButtonColor.Primary} ><Link href="/">To the home page</Link></Button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Congratulations {user.name}, you have completed the test!</h1>
        <h2>Your result</h2>
        <TestResults />
        <Button color={ButtonColor.Primary}>
          <Link href="/">Return to the main page</Link>
        </Button>
      </main>
    </div>
  );
}
