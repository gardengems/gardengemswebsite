import { getAssetPath } from '@/lib/utils';

export default function DropNGrowPage() {
  const features = [
    {
      title: "Advanced Irrigation",
      description: "Built-in irrigation system for optimal water distribution and nutrient delivery.",
      specs: ["Automated watering", "Precision drip system", "Water-efficient design"]
    },
    {
      title: "Smart Monitoring",
      description: "Integrated sensors and control system for complete environmental management.",
      specs: ["Real-time monitoring", "Mobile app control", "Data analytics"]
    },
    {
      title: "Professional Design",
      description: "Engineered for commercial growing operations with durability and efficiency in mind.",
      specs: ["UV resistant materials", "Stackable design", "Easy maintenance"]
    }
  ];

  const advantages = [
    {
      category: "Design Time",
      dropNGrow: "Minimal; pre-designed shipping container",
      traditional: "Extensive; requires architectural and engineering plans"
    },
    {
      category: "Cost",
      dropNGrow: "Set costs that are often cheaper than whole building facilities for similar amount of lights",
      traditional: "Hidden fees and dishonest middlemen overcharging"
    },
    {
      category: "Revenue per Labor Hour",
      dropNGrow: "Higher due to automation and reduced labor needs",
      traditional: "Lower; manual processes require more labor and management"
    },
    {
      category: "Setup Time",
      dropNGrow: "Rapid installation; simple hookups (water, electric, internet)",
      traditional: "Lengthy construction time; complex infrastructure needed"
    },
    {
      category: "Architectural Involvement",
      dropNGrow: "None required; pre-built solution",
      traditional: "Extensive architectural planning required"
    },
    {
      category: "Compliance",
      dropNGrow: "EUGACP compliant from the start with included SOPs",
      traditional: "Compliance requires custom solutions and documentation"
    },
    {
      category: "Modular Buildouts",
      dropNGrow: "Scalable from 1 to 40+ containers as your business expands",
      traditional: "Not modular; must plan for future expansion from the start"
    },
    {
      category: "Mobility",
      dropNGrow: "ISO compliant container for easy relocation",
      traditional: "Fixed location; difficult and costly to relocate"
    }
  ];

  const technicalSpecs = [
    {
      category: "Physical Specifications",
      items: [
        { label: "Height", value: "24 inches" },
        { label: "Width", value: "18 inches" },
        { label: "Depth", value: "18 inches" },
        { label: "Capacity", value: "5 gallons" }
      ]
    },
    {
      category: "System Requirements",
      items: [
        { label: "Power Supply", value: "110V/220V" },
        { label: "Water Connection", value: "Standard 3/4\"" },
        { label: "Network", value: "WiFi enabled" },
        { label: "Control Interface", value: "Touch screen" }
      ]
    }
  ];

  return (
    <div className="container py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">
            Drop N Grow
            <span className="block text-2xl text-muted-foreground mt-2">
              All-In-One Container Solution
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The Drop N Grow system offers a revolutionary all-in-one container solution designed to streamline your growing operations. Built with a streamlined, efficient setup into the cultivation industry, it offers a traditional grow medium. Every container provides the tools to maximize your growing potential.
          </p>
        </div>

        <div className="aspect-video relative rounded-lg overflow-hidden mb-12">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={getAssetPath('/videos/container-hero.mp4')} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold mb-8 text-center">Drop N Grow vs Traditional Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
            {advantages.map((advantage) => (
              <div 
                key={advantage.category}
                className="bg-muted/5 border border-border/40 rounded-lg p-6"
              >
                <h3 className="font-semibold mb-4">{advantage.category}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-medium text-sm text-primary mb-1">Drop N Grow</div>
                      <div className="text-muted-foreground leading-relaxed">{advantage.dropNGrow}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-destructive" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-medium text-sm text-destructive mb-1">Traditional Facility</div>
                      <div className="text-muted-foreground leading-relaxed">{advantage.traditional}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold mb-8 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {features.map((feature) => (
              <div 
                key={feature.title}
                className="bg-muted/5 border border-border/40 rounded-lg p-6 space-y-4"
              >
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-foreground/80 text-sm">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-sm text-foreground/80">
                      <svg
                        className="w-4 h-4 text-primary shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold mb-8 text-center">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {technicalSpecs.map((section) => (
              <div key={section.category}>
                <h3 className="text-xl font-semibold text-foreground mb-4">{section.category}</h3>
                <table className="w-full">
                  <tbody>
                    {section.items.map((item) => (
                      <tr key={item.label}>
                        <td className="py-2 text-foreground/80">{item.label}:</td>
                        <td className="py-2 text-foreground/80">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold mb-8 text-center">Control System - CRONOS</h2>
          <p className="text-muted-foreground mb-6">
            Our integrated control system provides seamless control over:
          </p>
          <ul className="list-disc list-inside text-muted-foreground mb-12">
            <li>Nutrient dosing and monitoring</li>
            <li>Environmental controls</li>
            <li>Lighting schedules</li>
            <li>Data logging and analytics</li>
          </ul>

          <div className="bg-gradient-primary text-white rounded-lg p-8 mt-12">
            <h2 className="text-2xl font-semibold mb-4">Ready to Transform Your Growing Operation?</h2>
            <p className="mb-6 opacity-90">
              Contact us to learn more about the Drop N Grow system and how it can revolutionize your cultivation process.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-md transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 