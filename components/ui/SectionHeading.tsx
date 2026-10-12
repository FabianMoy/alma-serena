type Props = { title: string; description?: string; id?: string; light?: boolean; className?: string };

export default function SectionHeading({ title, description, id, light = false, className = "" }: Props) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <h2 id={id} className={`font-serif text-3xl leading-tight sm:text-4xl ${light ? "text-white" : "text-sage-900"}`}>{title}</h2>
      {description && <p className={`mt-4 text-lg leading-relaxed ${light ? "text-sage-100" : "text-ink-soft"}`}>{description}</p>}
    </div>
  );
}
