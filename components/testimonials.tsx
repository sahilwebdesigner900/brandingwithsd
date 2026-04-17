export default function Testimonials() {
  const testimonials = [
    {
      name: "Thomas Matthys",
      role: "Managing Director",
      company: "Engineers Jobboard",
      text: "SEO Discovery truly believes in client success. Their responsive and dedicated team helped us achieve remarkable growth.",
    },
    {
      name: "Eno Enefiok",
      role: "Filmmaker & Producer",
      company: "",
      text: "Traffic and ranking on Google have increased significantly. SEO Discovery is full of pleasant and hardworking people.",
    },
    {
      name: "Beatriz Morales",
      role: "Marketing Coordinator",
      company: "FOMAT Medical",
      text: "Long-term collaboration has produced excellent results. The team takes feedback well and manages projects smoothly.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Client Testimonials</h2>
          <p className="text-lg text-muted-foreground">Real success stories from our satisfied clients worldwide</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-gradient-to-br from-white to-secondary/20 p-8 rounded-xl border border-border">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-foreground mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role} {testimonial.company && `• ${testimonial.company}`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
