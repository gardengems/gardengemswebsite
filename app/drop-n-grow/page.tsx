import { getBasePath } from '@/lib/utils';
import { dropNGrowContent } from '@/content/pages/drop-n-grow';
import { Icon } from '@/components/icons';
import Image from 'next/image';

export default function DropNGrowPage() {
  return (
    <>
      <section className="h-[calc(100vh-4rem)] flex items-center pt-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="h-1 w-full bg-gradient-to-r from-primary/40 via-primary to-primary/40 mb-8" />

              <h1 className="text-4xl font-bold mb-6">
                {dropNGrowContent.hero.title}
                <span className="block text-2xl text-muted-foreground mt-2">
                  {dropNGrowContent.hero.subtitle}
                </span>
              </h1>

              <div className="h-1 w-full bg-gradient-to-r from-primary/40 via-primary to-primary/40 mb-8" />

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {dropNGrowContent.hero.description}
              </p>
            </div>

            <div className="aspect-video relative rounded-lg overflow-hidden mb-8">
              {/* Video Placeholder */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={getBasePath(dropNGrowContent.hero.placeholder.src)}
                  alt="Drop N Grow System Video Preview"
                  fill
                  className="object-cover"
                  priority
                  quality={75}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVigAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVigAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy0vLi44QjhAOEA4Qi4tMkYyLlFUUVRAR0BXUFNMUE1HUVf/2wBDARUXFyAeIR4eIVFCLi4uUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVH/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover relative z-10"
              >
                <source src={getBasePath(dropNGrowContent.hero.video.src)} type={dropNGrowContent.hero.video.type} />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Background Logo */}
            <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none">
              <div className="w-full max-w-[600px] -mt-24 -ml-6">
                <div className="relative aspect-square">
                  <Image
                    src={getBasePath("/images/green-gem-logo.png")}
                    alt=""
                    fill
                    className="object-contain opacity-10"
                    quality={75}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVigAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVigAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy0vLi44QjhAOEA4Qi4tMkYyLlFUUVRAR0BXUFNMUE1HUVf/2wBDARUXFyAeIR4eIVFCLi4uUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVH/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="relative">
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
            </div>
          </div>

          <div className="flex flex-col items-center mb-8">
            <div className="h-1 w-96 bg-gradient-to-r from-primary/40 via-primary to-primary/40 mb-8" />
            <h2 className="text-2xl font-semibold text-center mb-8">{dropNGrowContent.features.title}</h2>
            <div className="h-1 w-96 bg-gradient-to-r from-primary/40 via-primary to-primary/40" />
          </div>
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

          <div className="flex flex-col items-center mb-8">
            <div className="h-1 w-96 bg-gradient-to-r from-primary/40 via-primary to-primary/40 mb-8" />
            <h2 className="text-2xl font-semibold text-center mb-8">{dropNGrowContent.specifications.title}</h2>
            <div className="h-1 w-96 bg-gradient-to-r from-primary/40 via-primary to-primary/40" />
          </div>
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

          <div className="flex flex-col items-center mb-8">
            <div className="h-1 w-96 bg-gradient-to-r from-primary/40 via-primary to-primary/40 mb-8" />
            <h2 className="text-2xl font-semibold text-center mb-8">{dropNGrowContent.controlSystem.title}</h2>
            <div className="h-1 w-96 bg-gradient-to-r from-primary/40 via-primary to-primary/40" />
          </div>
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
    </>
  );
} 