import { getBasePath } from '@/lib/utils';
import { dropNGrowContent } from '@/content/pages/drop-n-grow';
import { Icon } from '@/components/icons';

export default function DropNGrowPage() {
  return (
    <div className="container py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">
            {dropNGrowContent.hero.title}
            <span className="block text-2xl text-muted-foreground mt-2">
              {dropNGrowContent.hero.subtitle}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {dropNGrowContent.hero.description}
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
            <source src={getBasePath(dropNGrowContent.hero.video.src)} type={dropNGrowContent.hero.video.type} />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold mb-8 text-center">{dropNGrowContent.comparison.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
            {dropNGrowContent.comparison.items.map((item) => (
              <div 
                key={item.category}
                className="bg-muted/5 border border-border/40 rounded-lg p-6"
              >
                <h3 className="font-semibold mb-4">{item.category}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon name="checkmark" className="w-3 h-3 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-medium text-sm text-primary mb-1">Drop N Grow</div>
                      <div className="text-muted-foreground leading-relaxed">{item.dropNGrow}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                      <Icon name="x" className="w-3 h-3 text-destructive" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-medium text-sm text-destructive mb-1">Traditional Facility</div>
                      <div className="text-muted-foreground leading-relaxed">{item.traditional}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold mb-8 text-center">{dropNGrowContent.features.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {dropNGrowContent.features.items.map((feature) => (
              <div 
                key={feature.title}
                className="bg-muted/5 border border-border/40 rounded-lg p-6 space-y-4"
              >
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-foreground/80 text-sm">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-sm text-foreground/80">
                      <Icon name="checkmark" className="w-4 h-4 text-primary shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold mb-8 text-center">{dropNGrowContent.specifications.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {dropNGrowContent.specifications.sections.map((section) => (
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

          <h2 className="text-2xl font-semibold mb-8 text-center">{dropNGrowContent.controlSystem.title}</h2>
          <p className="text-muted-foreground mb-6">
            {dropNGrowContent.controlSystem.description}
          </p>
          <ul className="list-disc list-inside text-muted-foreground mb-12">
            {dropNGrowContent.controlSystem.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <div className="bg-gradient-primary text-white rounded-lg p-8 mt-12">
            <h2 className="text-2xl font-semibold mb-4">{dropNGrowContent.callToAction.title}</h2>
            <p className="mb-6 opacity-90">
              {dropNGrowContent.callToAction.description}
            </p>
            <a
              href={getBasePath(dropNGrowContent.callToAction.button.href)}
              className="inline-block bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-md transition-colors"
            >
              {dropNGrowContent.callToAction.button.text}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 