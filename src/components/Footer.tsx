const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="font-bold text-xl text-foreground mb-4 md:mb-0">
            Your_Name_Agency
          </div>
          
          <div className="text-sm text-muted-foreground">
            © 2024 Your_Name_Agency
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;