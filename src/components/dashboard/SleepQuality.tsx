import { Card } from "@/components/ui/card";
import { Moon } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const sleepData = [
  { name: "Deep Sleep", value: 3.2, color: "hsl(var(--primary))" },
  { name: "Light Sleep", value: 4.5, color: "hsl(var(--secondary))" },
  { name: "REM Sleep", value: 1.8, color: "hsl(var(--accent))" },
  { name: "Awake", value: 0.5, color: "hsl(var(--muted))" },
];

export const SleepQuality = () => {
  const totalSleep = sleepData.reduce((acc, curr) => acc + curr.value, 0);
  const sleepScore = Math.round((totalSleep / 8) * 100);

  return (
    <Card className="p-6 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
              <Moon className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Sleep Quality</p>
              <p className="text-xs font-medium text-secondary">Score: {sleepScore}/100</p>
            </div>
          </div>
        </div>

        <div className="mb-2">
          <div className="text-4xl font-bold tracking-tight">
            {totalSleep.toFixed(1)}
            <span className="text-xl text-muted-foreground ml-1">hours</span>
          </div>
        </div>

        <div className="h-40 -mx-4">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={sleepData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={60}
                paddingAngle={2}
                dataKey="value"
                animationBegin={0}
                animationDuration={800}
              >
                {sleepData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend 
                verticalAlign="bottom" 
                height={36}
                formatter={(value, entry: any) => (
                  <span className="text-xs">{value}: {entry.payload.value}h</span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
};
