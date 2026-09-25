import { FileText, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/resume";
import LinkedInIcon from "@/components/icons/LinkedInIcon";

const info = [
  {
    icon: <Mail className="text-purple-600" size={24} />,
    title: "Email",
    value: profile.email,
    link: `mailto:${profile.email}`,
  },
  {
    icon: <MapPin className="text-purple-600" size={24} />,
    title: "Location",
    value: profile.location,
    link: null,
  },
];

const socials = [
  {
    name: "LinkedIn",
    icon: <LinkedInIcon className="h-6 w-6" />,
    url: profile.linkedin,
    color: "hover:text-purple-600",
  },
  {
    name: "Resume",
    icon: <FileText size={24} />,
    url: profile.resumeUrl,
    color: "hover:text-gray-900",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-16 sm:px-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Get In Touch
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Reach out about opportunities, ideas, or just to say hi.
          </p>
        </div>

        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          {info.map((item) => {
            const content = (
              <div className="flex items-center rounded-xl bg-gray-50 p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
                <div className="mr-4 rounded-lg bg-purple-100 p-3">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    {item.title}
                  </p>
                  <p className="font-semibold text-gray-900">{item.value}</p>
                </div>
              </div>
            );
            return item.link ? (
              <a key={item.title} href={item.link}>
                {content}
              </a>
            ) : (
              <div key={item.title}>{content}</div>
            );
          })}
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className={`text-gray-500 transition-colors duration-200 ${social.color}`}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
