import { games } from "../../data/games";
import GameCard from "../../components/GameCard";

type GamePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function GamePage({ params }: GamePageProps) {

  const { slug } = await params;


  const game = games.find((item) => {
    const gameSlug = item.title
      .toLowerCase()
      .replaceAll(" ", "-")
      .replaceAll("ı", "i")
      .replaceAll("ş", "s")
      .replaceAll("ğ", "g")
      .replaceAll("ç", "c")
      .replaceAll("ö", "o")
      .replaceAll("ü", "u");

    return gameSlug === slug;
  });


  if (!game) {
    return (
      <main className="min-h-screen bg-black p-10 text-white">
        Oyun bulunamadı.
      </main>
    );
  }



  return (
    <main className="min-h-screen bg-black px-8 py-16 text-white">


      <div className="mx-auto max-w-6xl">


        <div
          className={`overflow-hidden rounded-3xl bg-gradient-to-br ${game.color} p-10`}
        >

          <div className="flex min-h-[400px] flex-col items-center justify-center text-center">

            <div className="text-9xl">
              {game.icon}
            </div>


            <h1 className="mt-8 text-6xl font-extrabold">
              {game.title}
            </h1>


            <p className="mt-4 rounded-full bg-black/30 px-6 py-2">
              {game.category}
            </p>


          </div>

        </div>



        <div className="mt-10 grid gap-8 md:grid-cols-3">


          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 md:col-span-2">

            <h2 className="text-3xl font-bold">
              Oyun Hakkında
            </h2>


            <p className="mt-5 text-lg text-zinc-400">
              {game.description}
            </p>


            <button className="mt-8 rounded-xl bg-yellow-400 px-10 py-4 font-bold text-black hover:bg-yellow-300">
              Oyuna Başla
            </button>

          </div>



          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">

            <h2 className="text-2xl font-bold">
              Bilgiler
            </h2>


            <div className="mt-5 space-y-4 text-zinc-400">

              <p>
                ⭐ Puan: 4.8
              </p>

              <p>
                🎮 Kategori: {game.category}
              </p>

              <p>
                👥 Oyuncular: 10K+
              </p>

            </div>


          </div>


        </div>



        <section className="mt-16">

          <h2 className="mb-8 text-4xl font-bold">
            Benzer Oyunlar
          </h2>


          <div className="grid gap-8 md:grid-cols-3">

            {games
              .filter((item) => item.title !== game.title)
              .slice(0, 3)
              .map((item) => (

                <GameCard
                  key={item.title}
                  {...item}
                />

              ))}

          </div>


        </section>


      </div>


    </main>
  );
}