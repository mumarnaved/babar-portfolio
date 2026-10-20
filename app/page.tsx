/* eslint-disable @next/next/no-img-element */
import { Faq, Nav, Reveal } from "@/components/ui";
import { about, brands, caseStudies, editedVideos, faqs, handles, process, services, site, stats, testimonials, ugcAds, type MediaItem } from "@/lib/content";

const mail = `mailto:${site.email}`;

function Eyebrow({ children, light = false }: { children: string; light?: boolean }) {
  return <p className={`mb-4 text-center text-base font-semibold uppercase tracking-[0.16em] sm:text-lg ${light ? "text-white/85" : "text-brand"}`}>{children}</p>;
}

function Heading({ children }: { children: React.ReactNode }) {
  return <h2 className="display mx-auto max-w-3xl text-center text-4xl font-semibold sm:text-5xl lg:text-6xl">{children}</h2>;
}

function Visual({ src, label, tone = 0 }: { src?: string; label: string; tone?: number }) {
  if (src) return <img src={src} alt={label} className="h-full w-full object-cover" loading="lazy" />;
  const tones = ["from-brand to-[#1f7a55]", "from-[#e6efe9] to-[#c9dfd2]", "from-[#111] to-[#2b2b2b]", "from-[#f1f3ef] to-[#dfe5dc]"];
  const dark = tone % 4 === 0 || tone % 4 === 2;
  return (
    <div className={`relative h-full w-full bg-gradient-to-br ${tones[tone % 4]}`}>
      <div className="absolute inset-6 rounded-xl bg-white/90 p-4 shadow-xl sm:inset-8">
        <div className="mb-3 flex items-center gap-2">
          <span className="h-5 w-5 rounded-full bg-brand" />
          <span className="h-2 w-20 rounded bg-black/15" />
        </div>
        <div className="mb-3 h-16 rounded-lg bg-brand-soft sm:h-24" />
        <div className="space-y-2">
          <span className="block h-2 w-full rounded bg-black/10" />
          <span className="block h-2 w-2/3 rounded bg-black/10" />
        </div>
      </div>
      <span className={`absolute bottom-2 right-3 text-[10px] uppercase tracking-widest ${dark ? "text-white/60" : "text-black/40"}`}>
        Add PNG: {label}
      </span>
    </div>
  );
}

function MediaCard({ item, aspect, tone, dark = false }: { item: MediaItem; aspect: string; tone: number; dark?: boolean }) {
  let body: React.ReactNode;
  if (item.embed) {
    body = <iframe src={item.embed} title={item.title} loading="lazy" allowFullScreen className="h-full w-full border-0" />;
  } else if (item.video) {
    body = <video src={item.video} poster={item.image} controls playsInline preload={item.image ? "none" : "metadata"} className="h-full w-full object-cover" />;
  } else if (item.image) {
    body = <img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-cover" />;
  } else {
    body = (
      <div className="relative h-full w-full">
        <Visual label={item.title} tone={tone} />
        <span className="absolute inset-0 grid place-items-center">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-white/90 text-brand shadow-lg">
            <svg viewBox="0 0 24 24" className="ml-0.5 h-6 w-6" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
          </span>
        </span>
      </div>
    );
  }
  return (
    <figure>
      <div className={`${aspect} overflow-hidden rounded-3xl bg-surface`}>{body}</div>
      <figcaption className="mt-3">
        <p className="text-sm font-semibold">{item.title}</p>
        {item.sub && <p className={`text-xs ${dark ? "text-white/60" : "text-muted"}`}>{item.sub}</p>}
      </figcaption>
    </figure>
  );
}

function Icon({ name }: { name: string }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" } as const;
  const paths: Record<string, React.ReactNode> = {
    target: (<><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>),
    chat: <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.6A8 8 0 1 1 21 12Z" />,
    spark: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />,
    chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
    funnel: <path d="M3 4h18l-7 9v6l-4 2v-8L3 4Z" />,
    meta: <path d="M12 12c-1.8-2.6-3.4-4-5.2-4C4.7 8 3 9.8 3 12s1.7 4 3.8 4c1.8 0 3.4-1.4 5.2-4Zm0 0c1.8 2.6 3.4 4 5.2 4 2.1 0 3.8-1.8 3.8-4s-1.7-4-3.8-4c-1.8 0-3.4 1.4-5.2 4Z" />,
    messenger: (<><path d="M12 3a9 9 0 0 0-9 9c0 2.9 1.4 5.4 3.6 7v2.6l2.6-1.4c.9.3 1.8.4 2.8.4a9 9 0 0 0 0-18Z" /><path d="m7.5 13.5 3-3.2 2 2 3.5-3.3" /></>),
    bag: (<><path d="M5 8h14l-1 12H6L5 8Z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></>),
    video: (<><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m10.5 9.5 4 2.5-4 2.5v-5Z" /></>),
    instagram: (<><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17" cy="7" r=".6" /></>),
    doc: (<><path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8l-5-5Z" /><path d="M14 3v5h5M9 13h6M9 17h6" /></>),
  };
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" {...p}>
      {paths[name]}
    </svg>
  );
}

export default function Home() {
  const marquee = [...brands, ...brands, ...brands, ...brands, ...brands, ...brands, ...brands, ...brands];

  return (
    <>
      <Nav name={site.name} photo={site.photo} role={site.role} />
      <main id="top">
        {/* ABOUT */}
        <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-5 pb-6 pt-10">
          <Reveal>
            <div className="grid items-center gap-10 rounded-[2rem] bg-surface p-6 sm:p-10 md:grid-cols-[1.1fr_1fr]">
              <div>
                <p className="mb-3 text-base font-semibold uppercase tracking-[0.16em] text-brand sm:text-lg">About</p>
                <h2 className="display text-4xl font-semibold sm:text-5xl lg:text-6xl">{about.title}</h2>
                <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted">
                  {about.body.map((b) => (
                    <p key={b}>{b}</p>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {site.socials.map((s) => (
                    <a key={s.label} href={s.href} className="rounded-full border border-line bg-white px-4 py-1.5 text-xs font-medium transition-colors hover:border-brand hover:text-brand">
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
              <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-brand-soft">
                {site.photo ? (
                  <img src={site.photo} alt={site.name} className="h-full w-full object-cover object-top" />
                ) : (
                  <div className="grid h-full place-items-center bg-gradient-to-br from-brand to-brand-bright text-center text-sm text-white/70">
                    Add profile photo
                    <br />
                    /public/images/profile.png
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </section>

        {/* HERO */}
        <section className="relative overflow-hidden px-5 pb-16 pt-16 sm:pt-24">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-brand-soft/70 blur-3xl" />
          <div className="relative mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-medium">
              <span className="h-2 w-2 rounded-full bg-brand-bright" />
              {site.availability}
            </span>
            <h1 className="display mt-7 text-5xl font-semibold sm:text-7xl">{site.heroTitle}</h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{site.heroSub}</p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a href={site.bookingUrl} className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand">
                {site.ctaLabel}
              </a>
              <a href={mail} className="rounded-full border-2 border-foreground bg-white px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface">
                Email me
              </a>
            </div>
          </div>

          {/* brand marquee */}
          <div className="relative mx-auto mt-16 max-w-4xl overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
            <div className="marquee flex w-max" style={{ animationDuration: `${brands.length * 40}s` }}>
              {marquee.map((b, i) => (
                <span key={i} className="flex h-16 shrink-0 items-center pr-16" aria-hidden={i >= brands.length}>
                  {b.logo ? (
                    <img src={b.logo} alt={b.name} className="h-14 w-auto max-w-[170px] object-contain sm:h-16" />
                  ) : (
                    <span className="text-lg font-semibold text-black/30">{b.name}</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="px-5">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white px-6 py-8 text-center">
                <p className="display text-4xl font-semibold text-brand">{s.value}</p>
                <p className="mt-1 text-sm text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CASE STUDIES */}
        <section id="work" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
          <Eyebrow>Results & case studies</Eyebrow>
          <Heading>Campaigns built on strategy, proven by numbers.</Heading>
          <p className="mx-auto mt-5 max-w-xl text-center text-base text-muted">
            Real Meta Ads Manager results. Client and campaign names are blurred. Tap a screenshot to view it full size.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {caseStudies.map((c, i) => (
              <Reveal key={c.title} delay={(i % 2) * 120} className={c.featured ? "md:col-span-2" : ""}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border-2 border-[#bfdccb] bg-white transition-all hover:-translate-y-1 hover:border-brand-bright hover:shadow-lg">
                  <a href={c.image} target="_blank" rel="noopener noreferrer" className={`relative block overflow-hidden border-b-2 border-[#bfdccb] bg-white ${c.featured ? "aspect-[2/1] md:aspect-[5/2]" : "aspect-[2/1]"}`}>
                    <img src={c.image} alt={`${c.title} — Meta Ads Manager screenshot`} loading="lazy" className="h-full w-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]" />
                    <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-brand shadow">{c.result}</span>
                  </a>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg font-semibold">{c.title}</h3>
                      <span className="rounded-full bg-brand-soft px-3 py-1 text-xs text-brand">{c.tag}</span>
                    </div>
                    <p className="mt-2 text-sm text-muted">{c.detail}</p>
                    <p className="mb-5 mt-1 min-h-4 text-xs text-muted/80">{c.period}</p>
                    <dl className="mt-auto grid grid-cols-3 gap-3 border-t border-line pt-5">
                      {c.stats.map((st) => (
                        <div key={st.l}>
                          <dt className="text-xl font-semibold tracking-tight text-brand sm:text-2xl">{st.v}</dt>
                          <dd className="mt-0.5 text-xs leading-snug text-muted">{st.l}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="mx-auto max-w-6xl scroll-mt-20 px-5 pb-24">
          <Eyebrow>What I do</Eyebrow>
          <Heading>Everything your brand needs to grow on social.</Heading>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 100}>
                <div className="h-full rounded-3xl border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand">
                    {s.iconImage ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={s.iconImage} alt="" className="h-7 w-7 object-contain" />
                    ) : (
                      <Icon name={s.icon} />
                    )}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-brand px-5 py-24 text-white">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 text-center text-base font-semibold uppercase tracking-[0.16em] text-white/85 sm:text-lg">How it works</p>
            <h2 className="display mx-auto max-w-2xl text-center text-4xl font-semibold sm:text-5xl lg:text-6xl">Three steps to your next big campaign.</h2>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {process.map((p, i) => (
                <Reveal key={p.n} delay={i * 120}>
                  <div className="h-full rounded-3xl bg-white/8 p-7 ring-1 ring-white/15">
                    <span className="text-sm text-white/50">{p.n}</span>
                    <h3 className="mt-6 text-2xl font-semibold leading-snug">{p.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-white/70">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SOCIAL MEDIA HANDLES */}
        <section id="social" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
          <Eyebrow>Social media handles</Eyebrow>
          <Heading>Pages I manage and grow.</Heading>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {handles.map((h, i) => (
              <Reveal key={h.handle} delay={(i % 2) * 100}>
                <a href={h.url} target="_blank" rel="noopener noreferrer" className="group block h-full overflow-hidden rounded-3xl border-2 border-[#bfdccb] bg-white transition-all hover:-translate-y-1 hover:border-brand-bright hover:shadow-lg">
                  <div className="aspect-[16/9] overflow-hidden border-b-2 border-[#bfdccb] bg-surface">
                    {h.preview ? (
                      <img src={h.preview} alt={`${h.name} ${h.platform} feed`} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" />
                    ) : (
                      <Visual label={h.name} tone={i} />
                    )}
                  </div>
                  <div className="flex items-center gap-4 p-5 pb-3">
                    {h.image ? (
                      <img src={h.image} alt={h.name} className="h-14 w-14 shrink-0 rounded-full border border-line bg-white object-contain p-1" />
                    ) : (
                      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-brand-soft text-lg font-semibold text-brand">{h.name.charAt(0)}</span>
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-semibold">{h.name}</p>
                      <p className="truncate text-sm text-muted">
                        {h.handle} · {h.platform}
                      </p>
                      {h.stat && <p className="text-sm text-brand-bright">{h.stat}</p>}
                    </div>
                    <span className="hidden shrink-0 rounded-full bg-brand px-4 py-2 text-sm text-white transition-colors group-hover:bg-brand-bright sm:block">Visit →</span>
                  </div>
                  {h.desc && <p className="px-5 pb-6 text-[15px] leading-relaxed text-muted">{h.desc}</p>}
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        {/* UGC ADS */}
        <section id="ugc" className="scroll-mt-20 bg-brand px-5 py-24 text-white">
          <div className="mx-auto max-w-6xl">
            <Eyebrow light>UGC ads</Eyebrow>
            <Heading>Creator-style ads that stop the scroll.</Heading>
            <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {ugcAds.map((v, i) => (
                <Reveal key={v.title} delay={(i % 4) * 90}>
                  <MediaCard item={v} aspect="aspect-[9/16]" tone={i} dark />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* EDITED VIDEOS */}
        <section id="videos" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
          <Eyebrow>Edited videos</Eyebrow>
          <Heading>Reels, shorts and ad edits built to hold attention.</Heading>
          <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {editedVideos.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 90}>
                <MediaCard item={v} aspect="aspect-[9/16]" tone={i + 1} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="reviews" className="scroll-mt-20 bg-brand py-24 text-white">
          <div className="mx-auto max-w-6xl px-5">
          <Eyebrow light>Kind words</Eyebrow>
          <Heading>Words from people I&apos;ve worked with.</Heading>
          <a href={site.fiverr} className="mx-auto mt-5 flex w-fit items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm transition-colors hover:border-white">
            <span className="text-[#7fd1a6]">★★★★★</span> 5.0 on Fiverr · 11 reviews
          </a>
          </div>
          <div className="mt-12 space-y-5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            {[testimonials.slice(0, 3), testimonials.slice(3)].map((row, r) => {
              const group = Array.from({ length: 6 }, (_, k) => row[k % row.length]);
              return (
                <div key={r} className="flex w-max hover:[animation-play-state:paused]" style={{ animation: "marquee 60s linear infinite", animationDirection: r === 0 ? "normal" : "reverse" }}>
                  {[...group, ...group].map((t, i) => (
                    <figure key={i} className="mr-5 w-[320px] shrink-0 rounded-3xl bg-white p-6 text-foreground sm:w-[380px]">
                      <div className="mb-3 text-brand-bright" aria-label="5 stars">★★★★★</div>
                      <blockquote className="text-[15px] leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
                      <figcaption className="mt-5 flex items-center gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-sm font-semibold text-white">{t.name.charAt(0).toUpperCase()}</span>
                        <span className="leading-tight">
                          <span className="block text-sm font-semibold">{t.name}</span>
                          <span className="text-xs text-muted">{t.role}</span>
                        </span>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA + FAQ */}
        <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-medium">
                <span className="h-2 w-2 rounded-full bg-brand-bright" />
                {site.availability}
              </span>
              <h2 className="display mt-6 text-4xl font-semibold sm:text-6xl">Ready to grow? Let&apos;s make it happen.</h2>
              <p className="mt-5 max-w-md text-muted">
                I&apos;m taking on new clients. Whether you need a full Meta ads funnel or a social media manager, let&apos;s talk about your goals.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={site.bookingUrl} className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand">
                  {site.ctaLabel}
                </a>
                <a href={mail} className="rounded-full border-2 border-foreground bg-white px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface">
                  Email me
                </a>
                <a href={site.linkedin} target="_blank" rel="noreferrer" className="rounded-full border-2 border-foreground bg-white px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface">
                  LinkedIn
                </a>
              </div>
            </div>
            <Faq items={faqs} />
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-brand px-5 text-white">
        <div className="mx-auto max-w-6xl">
          {/* top CTA */}
          <div className="flex flex-col gap-8 border-b border-white/15 py-14 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="display max-w-xl text-3xl font-semibold sm:text-4xl">Let&apos;s turn your ad spend into real growth.</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/65">Tell me about your brand and goals. I&apos;ll reply with a clear plan and next steps.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={site.bookingUrl} target="_blank" rel="noreferrer" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand transition-colors hover:bg-brand-soft">
                {site.ctaLabel}
              </a>
              <a href={mail} className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                Email me
              </a>
            </div>
          </div>

          {/* columns */}
          <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.3fr]">
            <div>
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={site.photo} alt={site.name} className="h-12 w-12 rounded-full object-cover object-[center_28%] ring-2 ring-white/25" />
                <div className="leading-tight">
                  <p className="text-lg font-semibold">{site.name}</p>
                  <p className="text-sm text-white/65">{site.role.split("&")[0].trim()}</p>
                </div>
              </div>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
                Helping brands turn Facebook and Instagram into a steady source of leads, messages and sales.
              </p>
              <div className="mt-6 flex gap-3">
                {[
                  { label: "LinkedIn", short: "in", href: site.linkedin },
                  { label: "Fiverr", short: "Fi", href: site.fiverr },
                ].map((x) => (
                  <a key={x.label} href={x.href} target="_blank" rel="noreferrer" aria-label={x.label} className="grid h-10 w-10 place-items-center rounded-full border border-white/25 text-sm font-semibold transition-colors hover:bg-white hover:text-brand">
                    {x.short}
                  </a>
                ))}
              </div>
            </div>

            <div className="text-sm">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Pages</p>
              {[["About", "#about"], ["Services", "#services"], ["Projects", "#work"], ["Reviews", "#reviews"], ["Contact", "#contact"]].map(([l, h]) => (
                <a key={h} href={h} className="block py-1.5 text-white/85 transition-colors hover:text-white">
                  {l}
                </a>
              ))}
            </div>

            <div className="text-sm">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Services</p>
              {services.slice(0, 5).map((x) => (
                <a key={x.title} href="#services" className="block py-1.5 text-white/85 transition-colors hover:text-white">
                  {x.title}
                </a>
              ))}
            </div>

            <div className="text-sm">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Get in touch</p>
              <a href={mail} className="block py-1.5 text-white/85 transition-colors hover:text-white">{site.email}</a>
              <p className="py-1.5 text-white/85">{site.location}</p>
              <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 text-xs text-white/80">
                <span className="h-2 w-2 rounded-full bg-[#7fd1a6]" />
                Open to new clients
              </p>
            </div>
          </div>

          {/* bottom bar */}
          <div className="flex flex-col gap-2 border-t border-white/15 py-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 {site.name}. All rights reserved.</p>
            <p>Meta Ads · Social Media · UGC · Video Editing</p>
          </div>
        </div>
      </footer>

      {/* floating email */}
      <a
        href={mail}
        aria-label="Email me"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-brand text-white shadow-xl transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.6A8 8 0 1 1 21 12Z" />
        </svg>
      </a>
    </>
  );
}
