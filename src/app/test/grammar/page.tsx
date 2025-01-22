import Link from "next/link";
import { Button } from "modules/app/components/Button";

export default function grammarTest() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Welcome to the grammar test</h1>
        <Button>
          <Link href="/test/result">Complete the test</Link>
        </Button>
      </main>
    </div>
  );
}
