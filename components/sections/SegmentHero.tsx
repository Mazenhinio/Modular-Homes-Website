interface SegmentHeroProps {
  title: string;
  description?: string;
  subtitle?: string;
  backgroundImage?: string;
  primaryCTA?: string;
  secondaryCTA?: string;
}

export function SegmentHero({ title, description, subtitle, backgroundImage, primaryCTA, secondaryCTA }: SegmentHeroProps) {
  return (
    <section className="relative w-full aspect-video bg-gradient-to-r from-[#2D2D2D] to-[#3A3A3A] text-white overflow-hidden">
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D2D2D]/80 to-[#3A3A3A]/80" />
        </div>
      )}
      
      <div className="relative z-10 container mx-auto px-4 max-w-6xl h-full flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            {description || subtitle}
          </p>
        </div>
      </div>
    </section>
  );
} 