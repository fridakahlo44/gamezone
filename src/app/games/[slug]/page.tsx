import { games } from "../../data/games";
import GameCard from "../../components/GameCard";
import GamePlay from "@/app/components/GamePlay";

type GamePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function createSlug(text: string) {
  return text
    .toLowerCase()
    .replaceAll(" ", "-")
    .replaceAll("ı", "i")
    .replaceAll("ş", "s")
    .replaceAll("ğ", "g")
    .replaceAll("ç", "c")
    .replaceAll("ö", "o")
    .replaceAll("ü", "u");
}


export default async function GamePage({ params }: GamePageProps) {

  const { slug } = await params;


  const game = games.find(
    (item) => createSlug(item.title) === slug
  );


  if (!game) {
    return (
      <main className="min-h-screen bg-black p-10 text-white">
        <h1 className="text-3xl font-bold">
          Oyun bulunamadı
        </h1>
      </main>
    );
  }


  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">

      <div className="mx-auto max-w-6xl">


        {/* Oyun Kapak Alanı */}
        <section
          className={`rounded-3xl bg-gradient-to-br ${game.color} p-10`}
        >

          <div className="flex min-h-[350px] flex-col items-center justify-center text-center">


            <div className="text-8xl">
              {game.icon}
            </div>


            <h1 className="mt-6 text-5xl font-black md:text-6xl">
              {game.title}
            </h1>


            <span className="mt-4 rounded-full bg-black/40 px-6 py-2">
              {game.category}
            </span>


          </div>

        </section>



        <div className="mt-10 grid gap-8 lg:grid-cols-3">


          {/* Sol Alan */}
          <section className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 lg:col-span-2">


            <h2 className="text-3xl font-bold">
              Oyun Hakkında
            </h2>


            <p className="mt-5 text-lg text-zinc-400">
              {game.description}
            </p>



            <GamePlay
              game={{
                title: game.title,
                minCoin: game.minCoin,
                maxCoin: game.maxCoin,
                rewardMultiplier: game.rewardMultiplier,
              }}
            />


          </section>



          {/* Bilgi Alanı */}
          <aside className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">


            <h2 className="text-2xl font-bold">
              Oyun Bilgileri
            </h2>


            <div className="mt-6 space-y-4 text-zinc-400">


              <p>
                🎮 Kategori:
                <span className="ml-2 text-white">
                  {game.category}
                </span>
              </p>


              <p>
                🪙 Minimum Oyun:
                <span className="ml-2 text-yellow-400">
                  {game.minCoin} Coin
                </span>
              </p>


              <p>
                🪙 Maksimum Oyun:
                <span className="ml-2 text-yellow-400">
                  {game.maxCoin} Coin
                </span>
              </p>


              <p>
                ⭐ Puan:
                <span className="ml-2 text-white">
                  4.8
                </span>
              </p>


              <p>
                👥 Oyuncu:
                <span className="ml-2 text-white">
                  10K+
                </span>
              </p>


            </div>


          </aside>


        </div>



        {/* Benzer Oyunlar */}
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