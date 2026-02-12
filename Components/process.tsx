export default function Process() {
  const steps = [
    {
      number: "1",
      title: "Discovery & Analysis",
      description: "We analyze your business, competitors, and target audience to create a custom strategy.",
    },
    {
      number: "2",
      title: "Strategy Development",
      description: "Our experts develop a comprehensive plan aligned with your business goals and budget.",
    },
    {
      number: "3",
      title: "Implementation",
      description: "We execute the strategy with precision, using proven tools and best practices.",
    },
    {
      number: "4",
      title: "Monitoring & Optimization",
      description: "Regular tracking and continuous optimization to maximize results and ROI.",
    },
    {
      number: "5",
      title: "Reporting & Support",
      description: "Detailed analytics reports and 24/7 support from your dedicated account manager.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">How We Drive Results</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our proven process delivers consistent, measurable results for businesses of all sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <div className="bg-white p-6 rounded-xl border border-border h-full">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-border"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
