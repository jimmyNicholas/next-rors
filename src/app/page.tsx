import ImpactLogo from "./ui/impact-logo";
import { auth } from "@clerk/nextjs/server";
import { SignIn } from "@clerk/nextjs";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <div className="bg-slate-300 scale-500">
        {/* <ImpactLogo /> */}
      </div>
    </main>
  );
}
