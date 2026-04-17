export default function Awards() {
  const awards = [
    { name: "Forbes", label: "Best SEO Company" },
    { name: "Yahoo", label: "Top Digital Agency" },
    { name: "Semrush", label: "Certified Partner" },
    { name: "Clutch", label: "Top Rated" },
    { name: "GoodFirms", label: "Best Company" },
    { name: "G2", label: "Leader" },
  ]

  return (
    <section className="py-16 bg-white border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-sm font-semibold text-muted-foreground mb-12 uppercase tracking-wide">
          Recognized by Industry Leaders
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {awards.map((award, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <span className="text-xs font-bold text-primary">{award.name[0]}</span>
              </div>
              <p className="font-semibold text-sm text-foreground">{award.name}</p>
              <p className="text-xs text-muted-foreground">{award.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
