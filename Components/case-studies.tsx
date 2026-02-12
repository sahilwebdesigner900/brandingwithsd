import { Button } from "@/components/ui/button"

export default function CaseStudies() {
  const cases = [
    {
      title: "Insurance Company",
      challenge: "Low-quality backlinks and high competition",
      result: "390% increase in organic traffic",
      traffic: "6M organic visitors",
    },
    {
      title: "E-Commerce Brand",
      challenge: "Low visibility for main keywords",
      result: "Top 3 rankings for thousands of keywords",
      traffic: "490k monthly traffic",
    },
    {
      title: "Hospitality Business",
      challenge: "Need to rank for local keywords",
      result: "#1 GMB ranking for 400+ local keywords",
      traffic: "24.9k monthly visitors",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/5 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Outstanding Results</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how we've transformed businesses across multiple industries with proven strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((caseStudy, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-xl transition"
            >
              <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <span className="text-6xl font-bold text-primary/30">
                  +{idx === 0 ? "390" : idx === 1 ? "390" : "937"}%
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">{caseStudy.title}</h3>
                <div className="space-y-3 mb-6">
                  <div>
                    <p className="text-xs text-muted-foreground">Challenge</p>
                    <p className="text-sm text-foreground">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Result</p>
                    <p className="text-sm font-semibold text-primary">{caseStudy.result}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Traffic Growth</p>
                    <p className="text-sm text-foreground">{caseStudy.traffic}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  View Case Study
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
