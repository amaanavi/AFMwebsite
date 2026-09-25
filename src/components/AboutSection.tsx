/* eslint-disable @next/next/no-img-element */
import { profile } from "@/data/resume";

export default function AboutSection() {
  return (
    <section id="about" className="bg-gray-50 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            About Me
          </h2>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center">
              <img
                src="/headshot.jpg"
                alt={profile.name}
                className="mr-6 h-24 w-24 rounded-full object-cover shadow-lg"
              />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {profile.name}
                </h3>
                <p className="text-gray-600">{profile.location}</p>
              </div>
            </div>
            <p className="mb-6 leading-relaxed text-gray-700">
              {profile.about}
            </p>
            <div className="flex flex-wrap gap-3">
              {profile.traits.map((trait) => (
                <span
                  key={trait}
                  className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src="/travel/travel-12.jpg"
              alt="Sitting above a geothermal valley in Iceland"
              className="h-full w-full object-cover"
            />
            <div className="bg-white p-4">
              <p className="text-sm font-medium text-gray-600">
                Thingvellir, Iceland
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
