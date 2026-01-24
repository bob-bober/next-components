import TransitionLink from "@/components/page-transition/TransitionLink";
import Link from "next/link";

export default function Bsp1() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8 text-xl underline">
      <Link href="/">Zur Startseite</Link>
      <TransitionLink href="/page-transition/bsp-1">Link 1</TransitionLink>
      <TransitionLink href="/page-transition/bsp-2">Link 2</TransitionLink>
    </div>
  );
}
