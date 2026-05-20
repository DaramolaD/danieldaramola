const clients = [
  "Meridian",
  "Northline",
  "Atlas Labs",
  "Harbor",
  "Vertex",
  "Clearpath",
];

export function LogoCloud() {
  return (
    <section aria-label="Trusted by" className="border-y border-border py-12">
      <div className="container-site">
        <p className="sr-only">Companies I have partnered with</p>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16">
          {clients.map((name) => (
            <li key={name}>
              <span
                className="font-serif text-lg tracking-wide text-ink/35 md:text-xl"
                aria-label={name}
              >
                {name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
