import Image from "next/image";

export default function DropNGrowPage() {
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
          <p className="text-xl text-muted-foreground">
            The Drop N Grow system offers a revolutionary all-in-one container solution designed to streamline your growing operations. Built with a streamlined, efficient setup into the cultivation industry, it offers a traditional grow medium. Every container provides the tools to maximize your growing potential.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6">Advanced Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Lighting System</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Advanced LED lighting technology</li>
                <li>Energy-efficient operation</li>
                <li>Optimized spectrum for plant growth</li>
                <li>Customizable light cycles</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Growing System</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Automated nutrient delivery</li>
                <li>Precision pH monitoring</li>
                <li>Temperature control</li>
                <li>Humidity management</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-12 mb-6">Control System - CRONOS</h2>
          <p className="text-muted-foreground mb-6">
            Our integrated control system provides seamless control over:
          </p>
          <ul className="list-disc list-inside text-muted-foreground mb-12">
            <li>Nutrient dosing and monitoring</li>
            <li>Environmental controls</li>
            <li>Lighting schedules</li>
            <li>Data logging and analytics</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-12 mb-6">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Dimensions</h3>
              <table className="w-full text-muted-foreground">
                <tbody>
                  <tr>
                    <td className="py-2">Height:</td>
                    <td className="py-2">24 inches</td>
                  </tr>
                  <tr>
                    <td className="py-2">Width:</td>
                    <td className="py-2">18 inches</td>
                  </tr>
                  <tr>
                    <td className="py-2">Depth:</td>
                    <td className="py-2">18 inches</td>
                  </tr>
                  <tr>
                    <td className="py-2">Capacity:</td>
                    <td className="py-2">5 gallons</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">System Requirements</h3>
              <table className="w-full text-muted-foreground">
                <tbody>
                  <tr>
                    <td className="py-2">Power Supply:</td>
                    <td className="py-2">110V/220V</td>
                  </tr>
                  <tr>
                    <td className="py-2">Water Connection:</td>
                    <td className="py-2">Standard 3/4&quot;</td>
                  </tr>
                  <tr>
                    <td className="py-2">Network:</td>
                    <td className="py-2">WiFi enabled</td>
                  </tr>
                  <tr>
                    <td className="py-2">Control Interface:</td>
                    <td className="py-2">Touch screen</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-muted/10 rounded-lg p-8 mt-12">
            <h2 className="text-2xl font-semibold mb-6">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-6">
              Contact our team to learn more about the Drop N Grow system and how it can revolutionize your growing operations.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 