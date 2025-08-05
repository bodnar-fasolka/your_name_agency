const Team = () => {
  return (
    <section id="team" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-foreground">
            Team
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Соломія Боднар */}
          <div className="text-center slide-up">
            <div className="mb-6">
              <img 
                src="/solomiya.jpg" 
                alt="Соломія Боднар" 
                className="w-64 h-64 mx-auto rounded-lg object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
            <h3 className="text-xl font-medium mb-4 text-foreground">
              Соломія Боднар
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Маркетологиня з досвідом запуску продуктів і розвитку брендів у B2B, B2C та IT-сферах.
            </p>
          </div>

          {/* Ірина Перів */}
          <div className="text-center slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="mb-6">
              <img 
                src="/iryna.jpg" 
                alt="Ірина Перів" 
                className="w-64 h-64 mx-auto rounded-lg object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
            <h3 className="text-xl font-medium mb-4 text-foreground">
              Ірина Перів
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Юристка, підприємиця, громадська активістка, науковиця, дослідниця жіночої історії, менторка громад, ґендерна експертка.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
