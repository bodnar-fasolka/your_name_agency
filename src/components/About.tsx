const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-muted">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center slide-up">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-foreground">
            Менше — це більше
          </h2>
          
          <div className="prose prose-lg mx-auto text-center">
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Ми віримо, що найкращі рішення — найпростіші. 
              Замість складних схем і багатошарових стратегій, 
              ми знаходимо суть вашого бізнесу і говоримо про неї чесно.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Наш підхід базується на глибокому розумінні цілей клієнта 
              і створенні рішень, які працюють ефективно без зайвих ускладнень.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;