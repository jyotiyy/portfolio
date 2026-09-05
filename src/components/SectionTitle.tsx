interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-text)]">
        {title}
      </h2>
      <span className="mt-3 block h-[3px] w-10 rounded-full bg-[var(--color-accent)]" />
    </div>
  );
}
