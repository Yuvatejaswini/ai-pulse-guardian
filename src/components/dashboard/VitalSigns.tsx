import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Activity, Droplet, Wind, Thermometer } from "lucide-react";

interface VitalSign {
  icon: any;
  label: string;
  value: string;
  unit: string;
  status: "normal" | "warning" | "good";
  bgColor: string;
}

export const VitalSigns = () => {
  const [vitals, setVitals] = useState<VitalSign[]>([
    {
      icon: Activity,
      label: "Blood Pressure",
      value: "120/80",
      unit: "mmHg",
      status: "normal",
      bgColor: "from-primary/10 to-primary/5"
    },
    {
      icon: Droplet,
      label: "Blood Oxygen",
      value: "98",
      unit: "%",
      status: "good",
      bgColor: "from-accent/10 to-accent/5"
    },
    {
      icon: Wind,
      label: "Respiratory Rate",
      value: "16",
      unit: "bpm",
      status: "normal",
      bgColor: "from-secondary/10 to-secondary/5"
    },
    {
      icon: Thermometer,
      label: "Temperature",
      value: "36.8",
      unit: "°C",
      status: "normal",
      bgColor: "from-primary/10 to-accent/5"
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVitals(prev => prev.map(vital => {
        if (vital.label === "Blood Oxygen") {
          const newValue = 95 + Math.random() * 4;
          return { ...vital, value: Math.round(newValue).toString() };
        }
        if (vital.label === "Respiratory Rate") {
          const newValue = 14 + Math.random() * 4;
          return { ...vital, value: Math.round(newValue).toString() };
        }
        if (vital.label === "Temperature") {
          const newValue = 36.5 + Math.random() * 0.6;
          return { ...vital, value: newValue.toFixed(1) };
        }
        return vital;
      }));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "good": return "text-accent";
      case "warning": return "text-destructive";
      default: return "text-primary";
    }
  };

  return (
    <Card className="p-6 hover:shadow-xl transition-all duration-300">
      <div className="mb-6">
        <h3 className="text-xl font-bold">Vital Signs</h3>
        <p className="text-sm text-muted-foreground">Current health metrics</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {vitals.map((vital, index) => (
          <div 
            key={index}
            className={`p-4 rounded-xl bg-gradient-to-br ${vital.bgColor} border border-border/50 hover:scale-105 transition-transform duration-300`}
          >
            <div className="flex items-start justify-between mb-3">
              <vital.icon className={`w-5 h-5 ${getStatusColor(vital.status)}`} />
            </div>
            <div>
              <p className="text-2xl font-bold tracking-tight">
                {vital.value}
                <span className="text-sm text-muted-foreground ml-1">{vital.unit}</span>
              </p>
              <p className="text-xs text-muted-foreground mt-1">{vital.label}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
