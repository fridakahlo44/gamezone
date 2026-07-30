import Link from "next/link";

type GameCardProps = {
  title: string;
  category: string;
  icon: string;
  color: string;
  description: string;
};

export default function GameCard({
  title,
  category,
  icon,
  color,
  description,
}: GameCardProps) {

  const slug = title
    .toLowerCase()
    .replaceAll(" ", "-")
    .replaceAll("ı", "i")
    .replaceAll("ş", "s")
    .replaceAll("ğ", "g")
    .replaceAll("ç", "c")
    .replaceAll("ö", "o")
    .replaceAll("ü", "u");


  return (
    <Link href={`/games/${slug}`}>

      <article className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 transition duration-500 hover:-translate-y-3 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-400/20">


        {/* Kapak Alanı */}
        <div
          className={`relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br ${color}`}
        >

          <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/10"></div>


          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-3xl"></div>


          <div className="relative text-8xl transition duration-500 group-hover:scale-125 group-hover:rotate-6">
            {icon}
          </div>


          <span className="absolute left-5 top-5 rounded-full bg-black/60 px-4 py-2 text-xs font-bold text-yellow-400">
            POPÜLER
          </span>


        </div>



        {/* Bilgi Alanı */}
        <div className="p-6">


          <p className="text-sm font-bold uppercase tracking-wider text-yellow-400">
            {category}
          </p>


          <h2 className="mt-3 text-2xl font-extrabold">
            {title}
          </h2>


          <p className="mt-3 line-clamp-2 text-zinc-400">
            {description}
          </p>



          <div className="mt-5 flex items-center justify-between text-sm text-zinc-500">

            <span>
              ⭐ 4.8
            </span>


            <span>
              🎮 Oyna
            </span>

          </div>



          <button className="mt-6 w-full rounded-xl bg-yellow-400 py-3 font-bold text-black transition hover:bg-yellow-300">
            Başlat
          </button>


        </div>


      </article>

    </Link>
  );
}