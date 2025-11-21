import { Button } from "@/components/ui/button";
import { ArrowRight, Activity } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-wearable.jpg";

export const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 hover:bg-primary/20 transition-all duration-300 cursor-pointer group">
            <Activity className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium text-primary">Next-Gen Health Technology</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
            AI-Powered Health
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-pulse">
              Monitoring Systems
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-xl">
            Transform your wellness journey with intelligent wearable sensors that monitor, analyze, and predict your health metrics in real-time.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              onClick={() => navigate("/dashboard")}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl group"
            >
              View Dashboard
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/30 hover:bg-primary/5 hover:scale-105 hover:border-primary/50 transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
          
          <div className="flex gap-8 pt-4">
            <div className="group cursor-pointer">
              <div className="text-3xl font-bold text-foreground group-hover:scale-110 transition-transform">99.9%</div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-3xl font-bold text-foreground group-hover:scale-110 transition-transform">24/7</div>
              <div className="text-sm text-muted-foreground">Monitoring</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-3xl font-bold text-foreground group-hover:scale-110 transition-transform">50K+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
          </div>
        </div>
        
        <div className="relative animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl animate-pulse"></div>
          <img 
            src={heroImage} 
            alt="AI-powered wearable health monitoring device"
            className="relative rounded-3xl shadow-2xl w-full h-auto hover:scale-105 transition-transform duration-500 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};
