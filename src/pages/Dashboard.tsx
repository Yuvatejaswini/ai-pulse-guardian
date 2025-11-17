import { useState, useEffect } from "react";
import { HeartRate } from "@/components/dashboard/HeartRate";
import { StepsCounter } from "@/components/dashboard/StepsCounter";
import { SleepQuality } from "@/components/dashboard/SleepQuality";
import { VitalSigns } from "@/components/dashboard/VitalSigns";
import { ActivityChart } from "@/components/dashboard/ActivityChart";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RefreshCw } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Health Dashboard</h1>
              <p className="text-sm text-muted-foreground">Real-time monitoring</p>
            </div>
          </div>
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleRefresh}
            className="gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Refresh
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6">
          <HeartRate key={`hr-${refreshKey}`} />
          <StepsCounter key={`steps-${refreshKey}`} />
          <SleepQuality key={`sleep-${refreshKey}`} />
        </div>

        <div className="grid gap-6 lg:grid-cols-2 mb-6">
          <VitalSigns key={`vitals-${refreshKey}`} />
          <ActivityChart key={`activity-${refreshKey}`} />
        </div>

        <div className="text-center text-sm text-muted-foreground">
          <p>Last updated: {new Date().toLocaleTimeString()}</p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
