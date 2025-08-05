const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="font-bold text-xl text-foreground mb-4 md:mb-0">
            Your_Name_Agency
          </div>
          
          {/* Social Media Links */}
          <div className="flex gap-4 mb-4 md:mb-0">
            <a 
              href="https://www.linkedin.com/company/108591652/admin/dashboard/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors duration-300"
            >
              <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/your_n_agency/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors duration-300"
            >
              <img src="/instagram.svg" alt="Instagram" className="w-5 h-5" />
            </a>
            <a 
              href="https://www.threads.com/@your_n_agency?igshid=NTc4MTIwNjQ2YQ==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors duration-300"
            >
              <img src="/threads.svg" alt="Threads" className="w-5 h-5" />
            </a>
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