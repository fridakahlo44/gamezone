type FeatureCardProps = {
  title: string;
  description: string;
};

export default function FeatureCard({
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-yellow-400 hover:-translate-y-1">

      <h3 className="text-xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 text-zinc-400 leading-7">
        {description}
      </p>

    </div>
  );
}