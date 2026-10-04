import Link from "next/link";
import { MissingPath } from "@/components/MissingPath";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh items-center justify-center p-4">
      <div className="w-full max-w-xl rounded-lg border border-line bg-bg p-6">
        <p className="break-all text-red">
          bash: <MissingPath />: command not found
        </p>
        <p className="mt-4 text-muted">
          try:{" "}
          <Link href="/" className="text-cyan hover:underline">
            cd ~
          </Link>
        </p>
      </div>
    </main>
  );
}
