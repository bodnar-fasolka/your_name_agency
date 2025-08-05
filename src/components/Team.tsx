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
            <p className="text-muted-foreground leading-relaxed mb-6">
              Маркетологиня з досвідом запуску продуктів і розвитку брендів у B2B, B2C та IT-сферах.
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="https://www.linkedin.com/company/108591652/admin/dashboard/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors duration-300"
              >
                <img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/sol.fasolka/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors duration-300"
              >
                <img src="/instagram.svg" alt="Instagram" className="w-6 h-6" />
              </a>
            </div>
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
            <p className="text-muted-foreground leading-relaxed mb-6">
              Юристка, підприємиця, громадська активістка, науковиця, дослідниця жіночої історії, менторка громад, ґендерна експертка.
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="https://www.linkedin.com/in/iryna-periv-752b81329/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors duration-300"
              >
                <img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/irynaperiv/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors duration-300"
              >
                <img src="/instagram.svg" alt="Instagram" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
