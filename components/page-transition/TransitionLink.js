"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";

export default function TransitionLink({ href, children, className, ...rest }) {
  const router = useRouter();

  const handleTransition = (e) => {
    // Wenn Nutzer Strg/Cmd drückt = neuer Tab gewünscht, also nicht unsere Animation
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }

    // Verhindere den normalen Seitenwechsel
    e.preventDefault();

    const target = href.toString ? href.toString() : href;

    // Hole die beiden Vorhänge
    const first = document.querySelector(".page-transition");
    const second = document.querySelector(".page-transition-second");

    // Sicherheitscheck: Wenn keine Vorhänge da sind, normaler Seitenwechsel
    if (!first || !second) {
      router.push(target);
      return;
    }

    // GSAP TIMELINE für die Animation
    const tl = gsap.timeline({
      onComplete: () => {
        // Wenn Timeline fertig ist: Reset für nächste Transition
        gsap.set([first, second], { y: "-100%" });
      },
    });

    // Schritt 1: Erster Vorhang von oben nach unten
    tl.fromTo(
      first,
      { y: "-100%" }, // Start: oben versteckt
      { y: "100%", duration: 1.5, ease: "power4.inOut" }, // Ziel: unten durch
    )
      // Schritt 2: Zweiter Vorhang, startet 0.1s nach dem ersten
      .fromTo(
        second,
        { y: "-100%" },
        { y: "100%", duration: 1.5, ease: "power4.inOut" },
        "-=1.4", // Startet 1.4s VOR Ende der ersten Animation = 0.1s nach Start
      )
      // Schritt 3: Bei 50% der Animation (Bildschirm bedeckt) → Seite wechseln
      .call(() => router.push(target), null, 0.75); // Bei 0.75s der Timeline
  };

  return (
    <Link
      {...rest}
      href={href}
      className={className}
      onClick={handleTransition}
    >
      {children}
    </Link>
  );
}
