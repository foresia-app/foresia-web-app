import Image from "next/image"
import Link from "next/link"

import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="bg-green-50 flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link href="/" className="flex items-center gap-2 self-center font-medium">
          <Image
            src="/logo.png"
            alt="Foresia Logo"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Foresia
          </span>
        </Link>
        <LoginForm />
      </div>
    </div>
  )
}
