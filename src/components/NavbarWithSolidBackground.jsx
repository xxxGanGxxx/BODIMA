import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const links = [
  { label: "Home", href: "#home" },
  { label: "Listings", href: "#listings" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function NavbarWithSolidBackground() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") {
      return undefined;
    }

    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-20 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        <a href="/" className="text-xl font-semibold tracking-tight text-slate-900">
          BODIMA
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="transition-colors hover:text-slate-900">
              {link.label}
            </a>
          ))}
          <a
            href="#get-started"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700"
          >
            Get Started
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 transition hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-slate-400 lg:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-4 border-t border-slate-200 bg-white px-4 py-6 text-sm font-medium text-slate-700 md:px-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block rounded-md px-2 py-2 transition hover:bg-slate-100 hover:text-slate-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#get-started"
              className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
