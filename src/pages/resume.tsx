import Header from "../components/Header";
import Footer from "../components/Footer";
import ExperienceCard from "../components/ExperienceCard";
import SkillPill from "../components/SkillPill";

export default function Resume() {
  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">My Resume</h1>

        <h2 className="text-xl font-semibold mt-6 mb-2">Experience</h2>
        <ExperienceCard
          title="Web Developer Intern"
          company="Tech Company Inc."
          date="June 2024 - Aug 2024"
          description="Worked on developing responsive web apps using React and Next.js."
        />

        <h2 className="text-xl font-semibold mt-6 mb-2">Skills</h2>
        <div>
          <SkillPill skill="JavaScript" />
          <SkillPill skill="TypeScript" />
          <SkillPill skill="React" />
          <SkillPill skill="Next.js" />
          <SkillPill skill="Tailwind CSS" />
          <SkillPill skill="C#" />
          <SkillPill skill="WPF" />
          <SkillPill skill="Tailwind CSS" />
        </div>
      </main>
      <Footer />
    </>
  );
}
