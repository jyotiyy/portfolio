import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar, { type Section } from "./components/Navbar";
import About from "./sections/About";
import Resume from "./sections/Resume";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

const sectionComponents: Record<Section, React.ComponentType> = {
  About,
  Resume,
  Projects,
  Contact,
};

export default function App() {
  const [active, setActive] = useState<Section>("About");
  const ActiveSection = sectionComponents[active];

  return (
    <div className="min-h-screen bg-[var(--color-bg)] px-4 py-6 sm:px-6 sm:py-10 lg:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 lg:h-[calc(100vh-5rem)] lg:min-h-[640px] lg:flex-row">
        <Sidebar />

        <main className="flex min-h-0 flex-1 flex-col rounded-3xl border border-[var(--color-border)] bg-[var(--color-panel)] p-5 sm:p-7">
          <header className="mb-6 flex justify-end">
            <Navbar active={active} onChange={setActive} />
          </header>

          <div className="flex-1 overflow-y-auto pr-1">
            <ActiveSection />
          </div>
        </main>
      </div>
    </div>
  );
}
