import TransitionLink from "@/components/page-transition/TransitionLink";
import Link from "next/link";

export default function Bsp2() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-xl gap-8 underline">
      <Link href="/">Zur Startseite</Link>
      <TransitionLink href="/page-transition">
        Zurück zur Übersicht
      </TransitionLink>
    </div>
  );
}
