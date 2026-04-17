export default function Difference() {
  const features = [
    { title: "400+ Digital Experts", description: "World's largest in-house team of digital marketing specialists" },
    {
      title: "Dedicated Account Manager",
      description: "Personal support in your timezone with 30-minute response time",
    },
    { title: "No Lock-In Contracts", description: "Flexible, no-commitment agreements based on trust and results" },
    { title: "Total Transparency", description: "Clear reports and communication about all expenses and progress" },
    { title: "24/7 Support", description: "Round-the-clock availability in your preferred time zone" },
    { title: "Research-Driven", description: "Dedicated team staying updated with latest Google trends" },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/5 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">What Sets Us Apart</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine experience, expertise, and commitment to deliver superior results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl border border-border hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xl">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
