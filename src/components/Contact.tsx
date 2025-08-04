import { Button } from "./ui/button";
const Contact = () => {
  return <section id="contact" className="py-20 px-4 bg-muted">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="slide-up">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-foreground">
            Готові почати?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Розкажіть нам про свій проект, і ми знайдемо найпростіше рішення
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button size="lg" className="px-8 py-3 text-base">
              solomijabodnar@gmail.com
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-base">
              +380964070330
            </Button>
          </div>
          
          
        </div>
      </div>
    </section>;
};
export default Contact;