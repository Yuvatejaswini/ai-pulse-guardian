import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { LineChart, Line, ResponsiveContainer, YAxis } from "recharts";

export const HeartRate = () => {
  const [heartRate, setHeartRate] = useState(72);
  const [data, setData] = useState(() => 
    Array.from({ length: 20 }, (_, i) => ({
      value: 72 + Math.random() * 8 - 4
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const newRate = 68 + Math.random() * 12;
      setHeartRate(Math.round(newRate));
      
      setData(prev => {
        const newData = [...prev.slice(1), { value: newRate }];
        return newData;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getStatus = () => {
    if (heartRate < 60) return { text: "Low", color: "text-blue-500" };
    if (heartRate > 100) return { text: "High", color: "text-destructive" };
    return { text: "Normal", color: "text-accent" };
  };

  const status = getStatus();

  return (
    <Card className="p-6 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Heart className="w-5 h-5 text-white animate-pulse" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Heart Rate</p>
              <p className={`text-xs font-medium ${status.color}`}>{status.text}</p>
            </div>
          </div>
        </div>

        <div className="mb-2">
          <div className="text-4xl font-bold tracking-tight">
            {heartRate}
            <span className="text-xl text-muted-foreground ml-1">BPM</span>
          </div>
        </div>

        <div className="h-20 -mx-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <YAxis hide domain={[60, 90]} />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={false}
                animationDuration={300}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
};
