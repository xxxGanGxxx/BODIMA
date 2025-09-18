import NavbarWithSolidBackground from "./components/NavbarWithSolidBackground";

function App() {
  return (
    <>
      <NavbarWithSolidBackground />
      <main className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
        <section id="home" className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">Welcome to BODIMA</h1>
          <p className="text-lg text-slate-600">
            Build your property listings experience with a clean, responsive navigation bar and flexible layout.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">Listings</h2>
              <p className="mt-2 text-sm text-slate-600">
                Showcase rentals and roommates with quick filters and verified profiles.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">Messages</h2>
              <p className="mt-2 text-sm text-slate-600">
                Keep conversations organized so you never miss a prospect or inquiry.
              </p>
            </div>
          </div>
        </section>

        <section id="listings" className="mt-24 space-y-4">
          <h2 className="text-3xl font-semibold text-slate-900">Curated Listings</h2>
          <p className="text-slate-600">
            Highlight the most popular rooms and properties with tailored spotlight cards.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <article
                key={`listing-${index}`}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-xs uppercase tracking-wide text-slate-400">Featured</p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">City Center Apartment</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Modern studio close to public transit with flexible lease options.
                </p>
                <p className="mt-4 text-sm font-semibold text-slate-900">$750 / month</p>
              </article>
            ))}
          </div>
        </section>

        <section id="pricing" className="mt-24 space-y-4">
          <h2 className="text-3xl font-semibold text-slate-900">Simple Pricing</h2>
          <p className="text-slate-600">Choose the plan that fits your search or hosting needs.</p>
          <div className="grid gap-6 md:grid-cols-3">
            {["Starter", "Pro", "Teams"].map((tier, index) => (
              <article
                key={tier}
                className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
                  index === 1 ? "border-slate-900" : ""
                }`}
              >
                <h3 className="text-xl font-semibold text-slate-900">{tier}</h3>
                <p className="mt-2 text-sm text-slate-600">
                  {index === 0 && "Find your first place with essential search tools."}
                  {index === 1 && "Unlock advanced filters, saved searches, and priority support."}
                  {index === 2 && "Manage listings with teammates and shared workspaces."}
                </p>
                <p className="mt-6 text-2xl font-bold text-slate-900">
                  {index === 0 ? "Free" : index === 1 ? "$19/mo" : "$49/mo"}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-24 space-y-4">
          <h2 className="text-3xl font-semibold text-slate-900">Stay in Touch</h2>
          <p className="text-slate-600">
            Questions or collaborations? Drop us a line and we will get back within one business day.
          </p>
          <form className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Name"
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
            />
            <input
              type="email"
              placeholder="Email"
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
            />
            <textarea
              placeholder="How can we help?"
              className="md:col-span-2 min-h-[160px] rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
            />
            <button
              type="submit"
              className="md:col-span-2 inline-flex justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

export default App;