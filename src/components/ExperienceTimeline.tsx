import { Briefcase, Calendar, MapPin } from "lucide-react";
import { education, experience } from "@/data/resume";

const timeline = [
  ...education.map((item) => ({
    type: "Education" as const,
    title: item.school,
    company: item.detail,
    location: "",
    period: item.period,
    description: "",
    highlights: [] as string[],
  })),
  ...experience.map((item) => ({
    type: "Work" as const,
    title: item.role,
    company: item.org,
    location: item.location,
    period: item.period,
    description: "",
    highlights: item.bullets,
  })),
];

export default function ExperienceTimeline() {
  return (
    <section id="resume" className="bg-gray-50 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Resume
          </h2>
        </div>

        <div className="space-y-8">
          {timeline.map((item, i) => (
            <div key={`${item.title}-${item.period}`} className="relative">
              {i < timeline.length - 1 && (
                <div className="absolute top-16 left-6 h-24 w-0.5 bg-gray-200" />
              )}
              <div className="flex items-start space-x-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${
                    item.type === "Education" ? "bg-purple-100" : "bg-green-100"
                  }`}
                >
                  <Briefcase
                    className={
                      item.type === "Education"
                        ? "text-purple-600"
                        : "text-green-600"
                    }
                    size={20}
                  />
                </div>
                <div className="flex-1 rounded-xl bg-white p-6 shadow-lg transition-shadow duration-200 hover:shadow-xl">
                  <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h4 className="text-xl font-bold text-gray-900">
                      {item.title}
                    </h4>
                    <div className="mt-1 flex items-center text-sm text-gray-500 sm:mt-0">
                      <Calendar size={16} className="mr-1" />
                      {item.period}
                    </div>
                  </div>
                  <div className="mb-3 flex items-center text-gray-600">
                    <span className="font-semibold">{item.company}</span>
                    {item.location && (
                      <>
                        <span className="mx-2">•</span>
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {item.location}
                        </div>
                      </>
                    )}
                  </div>
                  {item.highlights.length > 0 && (
                    <ul className="space-y-2">
                      {item.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start text-sm text-gray-600"
                        >
                          <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-purple-500" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
