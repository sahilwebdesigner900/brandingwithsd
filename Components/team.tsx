export default function Team() {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/5 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Meet Our Expert Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Over 400+ digital marketing specialists dedicated to your success, including doctorate-level experts and
            former Google professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl border border-border text-center">
            <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
              400+
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Expert Team Members</h3>
            <p className="text-muted-foreground">Specialized in SEO, PPC, content, and social media</p>
          </div>
          <div className="bg-white p-8 rounded-xl border border-border text-center">
            <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
              22+
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Years of Experience</h3>
            <p className="text-muted-foreground">Proven expertise across all digital marketing channels</p>
          </div>
          <div className="bg-white p-8 rounded-xl border border-border text-center">
            <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
              5M+
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Keywords Ranked</h3>
            <p className="text-muted-foreground">Thousands of successful campaigns delivered</p>
          </div>
        </div>
      </div>
    </section>
  )
}
