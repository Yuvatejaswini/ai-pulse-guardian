import { Smartphone, Activity, BarChart3 } from "lucide-react";
import aiAnalysis from "@/assets/ai-analysis.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    icon: Activity,
    title: "Wear & Monitor",
    description: "Put on your smart wearable device and let it continuously track your vital signs throughout the day."
  },
  {
    icon: Smartphone,
    title: "Sync Data",
    description: "Health metrics automatically sync to your smartphone app via secure Bluetooth connection."
  },
  {
    icon: BarChart3,
    title: "AI Analysis",
    description: "Our advanced AI analyzes patterns, provides insights, and alerts you to any concerning trends."
  }
];

export const HowItWorks = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.1);
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation(0.1);
  
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Three simple steps to better health monitoring
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {steps.map((step, index) => {
              const { ref, isVisible } = useScrollAnimation(0.1);
              
              return (
                <div 
                  key={index} 
                  ref={ref}
                  className={`flex gap-6 group transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex-shrink-0 relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                      <step.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="absolute top-20 left-8 w-0.5 h-12 bg-gradient-to-b from-primary to-transparent"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-semibold text-primary px-3 py-1 bg-primary/10 rounded-full">STEP {index + 1}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div 
            ref={imageRef}
            className={`relative transition-all duration-1000 ${
              imageVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-95'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-3xl animate-pulse"></div>
            <img 
              src={aiAnalysis} 
              alt="AI analyzing health data"
              className="relative rounded-3xl shadow-2xl w-full h-auto hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
