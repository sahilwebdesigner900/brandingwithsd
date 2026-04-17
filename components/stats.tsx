export default function Stats() {
  const stats = [
    { title: "Years of Experience", value: "22+" },
    { title: "Case Studies", value: "1000+" },
    { title: "Keywords Ranked", value: "5M+" },
    { title: "Client Reviews", value: "6K+" },
    { title: "Leads Generated", value: "1M+" },
    { title: "Countries Served", value: "20+" },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-foreground mb-16">
          Why SEO Discovery is Best for Your Business?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl border border-border hover:border-primary/50 transition">
              <p className="text-muted-foreground text-sm mb-2">{stat.title}</p>
              <p className="text-4xl font-bold text-primary">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
