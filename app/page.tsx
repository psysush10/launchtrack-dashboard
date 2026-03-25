import StatsCard from "./components/StatsCard";
import Charts from "./components/Charts";
import ProjectTable from "./components/ProjectTable";

export default function Dashboard() {
  return (
    
    <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">
                LaunchTrack Dashboard
            </h1>
            {/* Sections will go here */}
            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 mb-6">
                <StatsCard title="Total Projects" value={42} />
                <StatsCard title="Active" value={30} />
                <StatsCard title="At Risk" value={8} />
                <StatsCard title="Completed" value={12} />
            </div>

            {/*Charts*/ }
            <Charts />

            {/*Projects Table*/}
            <ProjectTable />
        </div>
    </div>
  );
}