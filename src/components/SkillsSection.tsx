import { Award, Users } from "lucide-react";
import {
  clubsAndAwards,
  interests,
  languages,
  skills,
} from "@/data/resume";

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-white py-16 sm:px-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Skills & Activities
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="rounded-xl bg-white p-8 shadow-lg">
            <div className="mb-6 flex items-center">
              <Award className="mr-3 text-purple-600" size={28} />
              <h3 className="text-2xl font-bold text-gray-900">
                Core Skills
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-purple-50"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-6 rounded-lg bg-purple-50 p-4">
              <div className="flex items-center">
                <Users className="mr-2 text-purple-600" size={20} />
                <span className="text-sm font-medium text-purple-800">
                  Languages: {languages.join(" · ")}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-xl bg-white p-8 shadow-lg">
              <div className="mb-6 flex items-center">
                <Award className="mr-3 text-purple-600" size={28} />
                <h3 className="text-2xl font-bold text-gray-900">
                  Clubs & Awards
                </h3>
              </div>
              <div className="space-y-4">
                {clubsAndAwards.map((item) => (
                  <div
                    key={item}
                    className="flex items-start space-x-4 rounded-lg bg-gray-50 p-4"
                  >
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-500" />
                    <p className="text-sm text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-lg">
              <div className="mb-4 flex items-center">
                <Users className="mr-3 text-purple-600" size={28} />
                <h3 className="text-2xl font-bold text-gray-900">
                  Interests
                </h3>
              </div>
              <p className="leading-relaxed text-gray-700">
                {interests.join(" · ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
