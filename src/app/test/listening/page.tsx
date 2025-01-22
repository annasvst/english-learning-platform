import Link from "next/link";
import { Button } from "modules/app/components/Button";

export default function ListeningTest() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Welcome to the listening test</h1>
        <Button>
          <Link href="/test/grammar">Complete and go to the next section</Link>
        </Button>
      </main>
    </div>
  );
}
