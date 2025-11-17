import { Smartphone, Activity, BarChart3 } from "lucide-react";
import aiAnalysis from "@/assets/ai-analysis.jpg";

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
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Three simple steps to better health monitoring
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-semibold text-primary">STEP {index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-3xl"></div>
            <img 
              src={aiAnalysis} 
              alt="AI analyzing health data"
              className="relative rounded-3xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
