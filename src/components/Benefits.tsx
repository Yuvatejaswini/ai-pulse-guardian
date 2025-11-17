import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  "Early detection of potential health issues",
  "Personalized health recommendations",
  "Improved medication adherence",
  "Better sleep quality tracking",
  "Stress and mental wellness monitoring",
  "Fitness and activity optimization",
  "Chronic condition management",
  "Direct healthcare provider integration"
];

export const Benefits = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Transform Your
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Health Journey
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our AI-powered wearable sensors provide comprehensive health monitoring that adapts to your unique needs and lifestyle.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <div className="text-4xl font-bold text-primary mb-2">2M+</div>
              <div className="text-muted-foreground">Health Data Points Analyzed Daily</div>
            </Card>
            <Card className="p-8 bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
              <div className="text-4xl font-bold text-secondary mb-2">95%</div>
              <div className="text-muted-foreground">User Satisfaction Rate</div>
            </Card>
            <Card className="p-8 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
              <div className="text-4xl font-bold text-accent mb-2">30%</div>
              <div className="text-muted-foreground">Average Health Improvement</div>
            </Card>
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-muted-foreground">Expert Support Available</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
