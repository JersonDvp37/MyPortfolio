"use client"

import { Mail, Phone, Github, Linkedin, ExternalLink } from "lucide-react"

export default function Portfolio() {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#", color: "hover:text-gray-700 dark:hover:text-gray-300" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jerson-tom%C3%A1s-0a7a45266",
      color: "hover:text-blue-600",
    },
    { icon: ExternalLink, label: "Portfolio", href: "#", color: "hover:text-blue-500" },
  ]

  const projects = [
    {
      title: "AnotAction",
      category: "UI/UX",
      description: "Notes management web application with task management features",
      href: "https://annot-actions.vercel.app/",
    },
    {
      title: "Design Services Mozart",
      category: "UI/UX",
      description: "Professional design services portfolio and showcase",
      href: "https://designservicesmozart.vercel.app/",
    },
    {
      title: "Moz Arts",
      category: "Graphic Design",
      description: "Creative portfolio showcasing graphic design and digital art projects",
      href: "https://moz-arts-abi-1-0.vercel.app/",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Header/Hero Section */}
      <header className="bg-white dark:bg-slate-900 shadow-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
                Jerson Tomás
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">Frontend Developer & Graphic Designer</p>
            </div>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 text-gray-500 dark:text-gray-400 transition-colors ${link.color}`}
                    title={link.label}
                  >
                    <Icon size={24} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* About Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Contact Card */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">
                Contact
              </h2>
              <div className="space-y-3">
                <a
                  href="tel:+258842340266"
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  <Phone size={18} />
                  <span>+258 842 340 266</span>
                </a>
                <a
                  href="mailto:gersonthomas37@gmail.com"
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition break-all"
                >
                  <Mail size={18} />
                  <span className="text-sm">gersonthomas37@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Languages Card */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">
                Languages
              </h2>
              <div className="space-y-2">
                <div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">Portuguese</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Fluent</p>
                </div>
                <div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">English</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Intermediate</p>
                </div>
              </div>
            </div>

            {/* About Card */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">
                About
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                21-year-old final-year student pursuing a Bachelor's degree in Software Development at São Tomás
                University of Mozambique, with a strong interest in innovative technologies and social impact.
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <div className="w-1 h-8 bg-blue-600 rounded"></div>
            Education
          </h2>
          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Bachelor's Degree in Software Development
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">2022 – 2025</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">São Tomás University of Mozambique (USTM)</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Expected Graduation: 2026</p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Complementary Courses</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">▸</span>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">ReactJS: From Zero to Mastery</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Udemy (2025)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">▸</span>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">GraphQL</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">In progress (Beginner level)</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <div className="w-1 h-8 bg-blue-600 rounded"></div>
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SkillCategory
              title="Programming Languages"
              skills={["Java", "PHP", "JavaScript", "C#", "HTML", "CSS", "SQL"]}
            />
            <SkillCategory title="Frameworks & Libraries" skills={["ReactJS", "Bootstrap", "Node.js", "Express"]} />
            <SkillCategory title="Databases" skills={["MySQL", "SQL Server"]} />
            <SkillCategory title="APIs" skills={["RESTful", "GraphQL"]} />
            <SkillCategory title="Tools" skills={["Git", "GitHub", "Figma", "Vercel", "VS Code"]} />
            <SkillCategory title="Others" skills={["Photoshop", "Illustrator", "Microsoft Office", "Zapier"]} />
          </div>
        </section>

        {/* Interpersonal Skills */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <div className="w-1 h-8 bg-blue-600 rounded"></div>
            Interpersonal Skills
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Adaptability", "Communication", "Teamwork", "Critical Thinking"].map((skill) => (
                <div key={skill} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <span className="text-blue-600 dark:text-blue-400">✓</span>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <div className="w-1 h-8 bg-blue-600 rounded"></div>
            Experience
          </h2>
          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Frontend Developer – Web App Project
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">August 2024</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">Task Management Application</p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Developed the user interface for a corporate task management web application</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Implemented UI components</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Collaborated with both frontend and backend teams</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Freelance Graphic Designer</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                  November 2022 – Present
                </span>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Created visual identities and branding materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Designed UI/UX prototypes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Developed creative concepts for digital and print media</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <div className="w-1 h-8 bg-blue-600 rounded"></div>
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-slate-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-blue-400 dark:hover:border-blue-500 transition-all group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                    {project.title}
                  </h3>
                  <ExternalLink
                    size={20}
                    className="text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition"
                  />
                </div>
                <span className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium mb-3">
                  {project.category}
                </span>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{project.description}</p>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-gray-800 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600 dark:text-gray-400 text-sm">
            <p>© 2025 Jerson Tomás. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function SkillCategory({
  title,
  skills,
}: {
  title: string
  skills: string[]
}) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
      <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
