const Services = () => {
  const services = [
    {
      title: "AI-Powered SEO",
      description: "Optimize for ChatGPT, Perplexity, and AI search results with our advanced optimization strategies.",
    },
    {
      title: "Keyword Research",
      description: "Find high-impact keywords that drive targeted traffic and qualified leads to your website.",
    },
    {
      title: "On-Page Optimization",
      description: "Optimize titles, meta descriptions, and content for better rankings and user engagement.",
    },
    {
      title: "Technical SEO",
      description: "Improve site speed, mobile-friendliness, and indexability for better search performance.",
    },
    {
      title: "Link Building",
      description: "Build high-quality backlinks through guest posts and PR to boost domain authority.",
    },
    {
      title: "PPC Campaigns",
      description: "Targeted paid advertising that delivers immediate results and maximum ROI.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital marketing solutions to grow your online presence and revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl bg-gradient-to-br from-white to-secondary/20 border border-border hover:border-primary/50 transition"
            >
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 text-white font-bold">
                {idx + 1}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
