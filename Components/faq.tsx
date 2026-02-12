// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// export default function FAQ() {
//   const faqs = [
//     {
//       question: "What makes SEO Discovery the #1 digital marketing agency?",
//       answer:
//         "With 22+ years of experience, a team of 400+ experts, proven track record of 1M+ leads generated, and numerous industry awards, we consistently deliver exceptional results for our clients.",
//     },
//     {
//       question: "How soon can I expect to see results?",
//       answer:
//         "Within 3-6 months, you should see significant improvements in search rankings and organic traffic. Results vary based on competition level, industry, and current website state.",
//     },
//     {
//       question: "Do you offer transparent reporting?",
//       answer:
//         "Yes! We provide detailed weekly/monthly analytics reports showing campaign performance, metrics, and ROI. Your dedicated account manager explains everything clearly.",
//     },
//     {
//       question: "What industries do you serve?",
//       answer:
//         "We work with e-commerce, healthcare, technology, finance, real estate, hospitality, and many other industries. We customize strategies for your specific sector.",
//     },
//     {
//       question: "Can you help my small business?",
//       answer:
//         "We specialize in affordable services for startups and SMBs. We believe every business deserves quality marketing regardless of budget.",
//     },
//     {
//       question: "Do I need a long-term contract?",
//       answer:
//         "No! We don't lock clients into contracts. We keep clients because we consistently deliver results, not because of binding agreements.",
//     },
//   ]

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
//           <p className="text-lg text-muted-foreground">Have questions? We have answers.</p>
//         </div>

//         <Accordion type="single" collapsible className="w-full">
//           {faqs.map((faq, idx) => (
//             <AccordionItem key={idx} value={`faq-${idx}`}>
//               <AccordionTrigger className="hover:text-primary transition">{faq.question}</AccordionTrigger>
//               <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
//             </AccordionItem>
//           ))}
//         </Accordion>
//       </div>
//     </section>
//   )
// }
