import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg">HealthAI</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Advanced AI-powered health monitoring for a healthier tomorrow.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground hover:translate-x-1 transition-all duration-200 inline-block">Features</a></li>
              <li><a href="#" className="hover:text-foreground hover:translate-x-1 transition-all duration-200 inline-block">How It Works</a></li>
              <li><a href="#" className="hover:text-foreground hover:translate-x-1 transition-all duration-200 inline-block">Pricing</a></li>
              <li><a href="#" className="hover:text-foreground hover:translate-x-1 transition-all duration-200 inline-block">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground hover:translate-x-1 transition-all duration-200 inline-block">About Us</a></li>
              <li><a href="#" className="hover:text-foreground hover:translate-x-1 transition-all duration-200 inline-block">Careers</a></li>
              <li><a href="#" className="hover:text-foreground hover:translate-x-1 transition-all duration-200 inline-block">Blog</a></li>
              <li><a href="#" className="hover:text-foreground hover:translate-x-1 transition-all duration-200 inline-block">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground hover:translate-x-1 transition-all duration-200 inline-block">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground hover:translate-x-1 transition-all duration-200 inline-block">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground hover:translate-x-1 transition-all duration-200 inline-block">HIPAA Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© 2024 HealthAI. All rights reserved. Built with cutting-edge AI technology.</p>
        </div>
      </div>
    </footer>
  );
};
