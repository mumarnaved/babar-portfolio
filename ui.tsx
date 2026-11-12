"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${shown ? "in" : ""} ${className}`}>
      {children}
    </div>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {items.map((f, i) => (
        <div key={f.q} className={`rounded-2xl border bg-white transition-colors duration-300 ${open === i ? "border-[#bfdccb]" : "border-line"}`}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-medium"
          >
            {f.q}
            <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-soft text-brand transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
          </button>
          <div className={`grid transition-all duration-500 ease-in-out ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
            <div className="overflow-hidden">
              <p className="px-5 pb-5 text-[15px] leading-relaxed text-muted">{f.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Nav({ name, photo, role }: { name: string; photo: string; role: string }) {
  const [open, setOpen] = useState(false);
  const links = [
    ["About", "#about"],
    ["Services", "#services"],
    ["Projects", "#work"],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-3">
          {photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={photo} alt={name} className="h-9 w-9 rounded-full object-cover object-[center_28%]" />
          ) : (
            <span className="grid h-9 w-9 place-items-center rounded-full bg-brand text-sm font-semibold text-white">{name.charAt(0)}</span>
          )}
          <span className="leading-tight">
            <span className="block text-sm font-semibold">{name}</span>
            <span className="hidden text-xs text-muted sm:block">{role.split("&")[0].trim()}</span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm md:flex">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="text-foreground/70 transition-colors hover:text-foreground">
              {l}
            </a>
          ))}
          <a href="#contact" className="rounded-full bg-brand px-4 py-2 text-white transition-colors hover:bg-brand-bright">
            Contact
          </a>
        </nav>
        <button className="relative h-10 w-10 md:hidden" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
          <span className={`absolute left-1/2 top-1/2 block h-0.5 w-6 -translate-x-1/2 rounded bg-foreground transition-all duration-300 ${open ? "translate-y-0 rotate-45" : "-translate-y-[4px]"}`} />
          <span className={`absolute left-1/2 top-1/2 block h-0.5 w-6 -translate-x-1/2 rounded bg-foreground transition-all duration-300 ${open ? "translate-y-0 -rotate-45" : "translate-y-[4px]"}`} />
        </button>
      </div>
      <div className={`grid transition-all duration-300 ease-in-out md:hidden ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <div className="border-t border-line bg-white px-5 pb-5 text-center">
            {links.map(([l, h], i) => (
              <a
                key={h}
                href={h}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${80 + i * 60}ms` : "0ms" }}
                className={`block py-3 text-sm transition-all duration-300 ${open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}`}
              >
                {l}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${80 + links.length * 60}ms` : "0ms" }}
              className={`mt-2 block rounded-full bg-brand px-4 py-3 text-center text-sm text-white transition-all duration-300 ${open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}`}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
