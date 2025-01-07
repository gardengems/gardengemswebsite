import Image from "next/image";

export default function ProductsPage() {
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

  return (
    <div className="container py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Drop N Grow
          <span className="block text-2xl text-muted-foreground mt-2">
            AIO Container Solution
          </span>
        </h1>

        <div className="aspect-video relative rounded-lg overflow-hidden mb-12">
          <Image 
            src="https://picsum.photos/1200/675?random=15"
            alt="Drop N Grow System"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            priority
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-12">
            The Drop N Grow system offers a revolutionary all-in-one container solution designed to streamline your growing operations. Built with a streamlined, efficient setup into the cultivation industry, it offers a traditional grow medium. Every container provides the tools to maximize your growing potential.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature) => (
              <div 
                key={feature.title}
                className="bg-muted/5 border border-border/40 rounded-lg p-6 space-y-4"
              >
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-sm">
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

          <div className="bg-gradient-primary text-white rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Ready to Transform Your Growing Operation?</h2>
            <p className="mb-6 opacity-90">
              Contact us to learn more about the Drop N Grow system and how it can revolutionize your cultivation process.
            </p>
            <div className="flex gap-4">
              <a
                href="/products/drop-n-grow"
                className="inline-block bg-white text-primary hover:bg-white/90 px-6 py-2 rounded-md transition-colors"
              >
                Learn More
              </a>
              <a
                href="/contact"
                className="inline-block bg-primary/20 hover:bg-primary/30 text-white px-6 py-2 rounded-md transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 