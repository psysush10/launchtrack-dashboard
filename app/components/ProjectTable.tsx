type Project = {
  name: string;
  status: string;
  progress: number;
};

const projects: Project[] = [
  { name: "Client A", status: "At Risk", progress: 60 },
  { name: "Client B", status: "On Track", progress: 80 },
  { name: "Client C", status: "Delayed", progress: 45 },
  { name: "Client D", status: "On Track", progress: 90 },
];

export default function ProjectTable() {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm">
      <h3 className="mb-4 font-medium">Projects</h3>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 text-sm border-b">
            <th className="py-2">Project</th>
            <th>Status</th>
            <th>Progress</th>
          </tr>
        </thead>

        <tbody>
          {projects.map((project, index) => (
            <tr key={index} className="border-b last:border-none hover:bg-gray-50">
              <td className="py-3">{project.name}</td>

              <td>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    project.status === "At Risk"
                      ? "bg-yellow-100 text-yellow-700"
                      : project.status === "Delayed"
                      ? "bg-red-100 text-red-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {project.status}
                </span>
              </td>

              <td>{project.progress}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}