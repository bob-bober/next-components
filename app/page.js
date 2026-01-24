import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  <div className="h-screen flex flex-col items-center justify-center gap-8 text-2xl underline">
    <Link href="/navbar">Navbar</Link>
    <Link href="/page-transition">Page Transition</Link>
  </div>
  
  )
}
