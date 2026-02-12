export default function Why() {
  const reasons = [
    {
      title: "Awarded Excellence",
      description: "Recognized by Forbes, Clutch, and industry leaders for outstanding digital marketing services.",
    },
    {
      title: "Proven Track Record",
      description: "Successfully ranked 5M+ keywords and generated 1M+ qualified leads for global clients.",
    },
    {
      title: "Expert Team",
      description:
        "400+ digital marketing specialists including doctorate-level experts and former Google professionals.",
    },
    {
      title: "Transparent Reporting",
      description: "Clear, detailed analytics and weekly reports so you always know how your investment is performing.",
    },
    {
      title: "Affordable Services",
      description: "Cost-effective digital marketing solutions designed for startups, SMBs, and enterprises.",
    },
    {
      title: "Dedicated Support",
      description: "24/7 support with a dedicated account manager responding within 30 minutes to queries.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">What Makes Us Different?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine expertise, transparency, and innovation to deliver results that matter for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
