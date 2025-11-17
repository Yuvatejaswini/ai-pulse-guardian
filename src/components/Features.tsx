import { Heart, Brain, Zap, Shield, TrendingUp, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Heart,
    title: "Real-Time Vitals Tracking",
    description: "Continuous monitoring of heart rate, blood pressure, oxygen levels, and more with medical-grade precision."
  },
  {
    icon: Brain,
    title: "AI Predictive Analytics",
    description: "Machine learning algorithms detect patterns and predict potential health issues before they become serious."
  },
  {
    icon: Zap,
    title: "Instant Alerts",
    description: "Get immediate notifications for abnormal readings and critical health events, anytime, anywhere."
  },
  {
    icon: Shield,
    title: "HIPAA Compliant Security",
    description: "Bank-level encryption ensures your health data remains private and secure at all times."
  },
  {
    icon: TrendingUp,
    title: "Personalized Insights",
    description: "Receive tailored recommendations based on your unique health profile and lifestyle patterns."
  },
  {
    icon: Users,
    title: "Family Sharing",
    description: "Monitor and share health data with family members, caregivers, and healthcare providers seamlessly."
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Powerful Features for
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Complete Health Insights
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Advanced technology meets intuitive design to give you total control of your health data
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 shadow-lg">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
