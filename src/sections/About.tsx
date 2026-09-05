import { Brain, Code, Lightbulb } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import ActivityCard from "../components/ActivityCard";
import { profile } from "../data/profile";

const activities = [
  {
    icon: Brain,
    title: "Machine Learning",
    description:
      "Interested in machine learning, deep learning, computer vision, NLP, and building intelligent systems.",
  },
  {
    icon: Code,
    title: "Software Development",
    description:
      "Building scalable applications and solving complex engineering problems with clean and maintainable code.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Passionate about algorithms, data structures, competitive programming, and turning ideas into practical solutions.",
  },
];

export default function About() {
  return (
    <div className="fade-in">
      <SectionTitle title="About Me" />
      <p className="max-w-2xl text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
        {profile.bio}
      </p>

      <h3 className="mb-4 mt-10 text-lg font-semibold text-[var(--color-text)]">
        What I'm Doing
      </h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {activities.map((activity) => (
          <ActivityCard key={activity.title} {...activity} />
        ))}
      </div>
    </div>
  );
}
