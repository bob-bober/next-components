"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  // State: Steuert ob Navbar sichtbar oder versteckt ist
  const [isHidden, setIsHidden] = useState(false);

  // State: Steuert ob Mobile-Menü offen oder geschlossen ist
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle-Funktion für Mobile-Menü (offen ↔ geschlossen)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    // lastScroll als lokale Variable (kein State, da kein Re-Render bei Änderung nötig)
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      // Scroll-Logik: Runterscrollen (>100px vom Top) → verstecken, Hochscrollen → zeigen
      if (currentScroll > lastScroll && currentScroll > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup: Listener entfernen beim Unmount (verhindert Memory Leaks)
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Dynamische className: isHidden steuert -translate-y-full (versteckt) oder translate-y-0 (sichtbar) */}
      <header
        className={`fixed top-0 left-0 w-full bg-black text-white py-8 px-10 z-50 transition-transform duration-800 ease-in-out ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">LOGO</div>

          {/* Navigation: Mobile = Slide-in Panel, Desktop = normale Nav */}
          <nav
            className={`
              lg:flex lg:flex-row lg:static lg:w-auto lg:h-auto lg:bg-transparent lg: gap-4
              fixed top-0 flex flex-col justify-center items-center h-screen w-72 bg-black
              transition-all duration-800 ease-in-out
              ${isMenuOpen ? "right-0" : "-right-full"}
            `}
          >
            <Link href="#home" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="#about" onClick={toggleMenu}>
              About
            </Link>
            <Link href="#services" onClick={toggleMenu}>
              Services
            </Link>
            <Link href="#expertise" onClick={toggleMenu}>
              Expertise
            </Link>
            <Link href="#contact" onClick={toggleMenu}>
              Contact
            </Link>
          </nav>

          {/* Burger mit onClick und Animation zum X */}
          <div
            onClick={toggleMenu}
            className="flex lg:hidden flex-col gap-1 cursor-pointer"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-transform duration-500 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-opacity duration-500 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-transform duration-500 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </div>
      </header>

      <div className="scroll-container">
        <section
          style={{
            height: "100vh",
            background: "#f0f0f0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link href="/" className="text-2xl underline">
            Home
          </Link>
        </section>

        <section
          style={{
            height: "100vh",
            background: "#e0e0e0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link href="/" className="text-2xl underline">
            Home
          </Link>
        </section>

        <section
          style={{
            height: "100vh",
            background: "#d0d0d0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link href="/" className="text-2xl underline">
            Home
          </Link>
        </section>
      </div>
    </>
  );
}
