import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export const StepsCounter = () => {
  const [steps, setSteps] = useState(6234);
  const goal = 10000;
  const progress = (steps / goal) * 100;

  useEffect(() => {
    const interval = setInterval(() => {
      setSteps(prev => Math.min(prev + Math.floor(Math.random() * 20), goal));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="p-6 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Daily Steps</p>
              <p className="text-xs font-medium text-accent">
                {Math.round(progress)}% of goal
              </p>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="text-4xl font-bold tracking-tight animate-fade-in">
            {steps.toLocaleString()}
            <span className="text-xl text-muted-foreground ml-1">/ {goal.toLocaleString()}</span>
          </div>
        </div>

        <Progress value={progress} className="h-3" />

        <div className="mt-4 grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-xs text-muted-foreground">Distance</p>
            <p className="text-sm font-semibold">{(steps * 0.000762).toFixed(1)} km</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Calories</p>
            <p className="text-sm font-semibold">{Math.round(steps * 0.04)}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Active Min</p>
            <p className="text-sm font-semibold">{Math.round(steps * 0.01)}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
