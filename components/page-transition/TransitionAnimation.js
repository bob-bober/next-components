"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export default function TransitionAnimation() {
  useEffect(() => {
    // Positioniere die Vorhänge oben (versteckt), sobald die Komponente geladen ist
    gsap.set([".page-transition", ".page-transition-second"], { y: "-100%" });
  }, []);

  return (
    <>
      {/* Erster Vorhang - volle orange Farbe */}
      <div
        className="page-transition fixed top-0 left-0 w-screen h-screen bg-orange/80 z-9999 pointer-events-none"
        aria-hidden="true"
      />

      {/* Zweiter Vorhang - etwas dunkler/transparenter für Tiefeneffekt */}
      <div
        className="page-transition-second fixed top-0 left-0 w-screen h-screen bg-orange z-9999 pointer-events-none"
        aria-hidden="true"
      />
    </>
  );
}
