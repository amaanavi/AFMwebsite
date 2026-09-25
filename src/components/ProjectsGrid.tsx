import { ExternalLink, FileText, Gamepad2 } from "lucide-react";
import { projects } from "@/data/resume";

const icons = [FileText, FileText, Gamepad2];

const statusColor: Record<string, string> = {
  Completed: "bg-green-100 text-green-800",
  "In Progress": "bg-yellow-100 text-yellow-800",
  Ongoing: "bg-purple-100 text-purple-800",
};

export default function ProjectsGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, i) => {
        const Icon = icons[i % icons.length];
        const tags = project.tags.slice(0, 3);
        const extraTags = project.tags.length - tags.length;
        return (
          <a
            key={project.title}
            href={project.href}
            target={project.href.startsWith("#") ? undefined : "_blank"}
            rel={
              project.href.startsWith("#") ? undefined : "noopener noreferrer"
            }
            className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-shadow duration-200 hover:shadow-xl"
          >
            <div className={`h-2 w-full bg-gradient-to-r ${project.accent}`} />
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center justify-between">
                <div className="rounded-lg bg-gray-50 p-3 transition-colors duration-200 group-hover:bg-purple-50">
                  <Icon className="text-purple-600" size={32} />
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      statusColor[project.status] ?? "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {project.status}
                  </span>
                  <ExternalLink className="h-4 w-4 text-zinc-400" />
                </div>
              </div>

              <h3 className="mt-4 text-xl font-bold text-gray-900 transition-colors duration-200 group-hover:text-purple-600">
                {project.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600"
                  >
                    {tag}
                  </span>
                ))}
                {extraTags > 0 && (
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
                    +{extraTags} more
                  </span>
                )}
              </div>

              <div className="mt-auto flex items-center justify-between pt-6 text-xs text-zinc-500">
                <span>{project.date}</span>
                <span className="text-xs font-medium text-purple-600">
                  {project.href.startsWith("#") ? "Play now" : "Click to expand"}
                </span>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}
