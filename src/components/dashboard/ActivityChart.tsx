import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { TrendingUp } from "lucide-react";

const activityData = [
  { day: "Mon", active: 45, exercise: 30, rest: 25 },
  { day: "Tue", active: 52, exercise: 35, rest: 13 },
  { day: "Wed", active: 38, exercise: 28, rest: 34 },
  { day: "Thu", active: 48, exercise: 40, rest: 12 },
  { day: "Fri", active: 55, exercise: 38, rest: 7 },
  { day: "Sat", active: 62, exercise: 45, rest: 0 },
  { day: "Sun", active: 40, exercise: 25, rest: 35 },
];

export const ActivityChart = () => {
  return (
    <Card className="p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold">Weekly Activity</h3>
          <p className="text-sm text-muted-foreground">Minutes per day</p>
        </div>
        <div className="flex items-center gap-2 text-accent">
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm font-medium">+12% vs last week</span>
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={activityData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
            <XAxis 
              dataKey="day" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Bar 
              dataKey="active" 
              fill="hsl(var(--primary))" 
              radius={[4, 4, 0, 0]}
              animationDuration={800}
            />
            <Bar 
              dataKey="exercise" 
              fill="hsl(var(--accent))" 
              radius={[4, 4, 0, 0]}
              animationDuration={800}
            />
            <Bar 
              dataKey="rest" 
              fill="hsl(var(--muted))" 
              radius={[4, 4, 0, 0]}
              animationDuration={800}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-border/50">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <p className="text-xs text-muted-foreground">Active</p>
          </div>
          <p className="text-lg font-bold">340 min</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <div className="w-3 h-3 rounded-full bg-accent" />
            <p className="text-xs text-muted-foreground">Exercise</p>
          </div>
          <p className="text-lg font-bold">241 min</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <div className="w-3 h-3 rounded-full bg-muted" />
            <p className="text-xs text-muted-foreground">Rest</p>
          </div>
          <p className="text-lg font-bold">126 min</p>
        </div>
      </div>
    </Card>
  );
};
