import GameCard from "../components/GameCard";
import { games } from "../data/games";

export default function GamesPage() {
  return (
    <main className="min-h-screen bg-black px-8 py-16 text-white">


      <section className="mx-auto max-w-6xl">

        <h1 className="text-5xl font-extrabold">
          Oyun Merkezi
        </h1>


        <p className="mt-4 text-lg text-zinc-400">
          Tüm oyunları keşfet, favorilerini bul ve eğlenceye katıl.
        </p>

      </section>



      {/* Kategoriler */}
      <section className="mx-auto mt-12 max-w-6xl">

        <div className="flex flex-wrap gap-4">

          <button className="rounded-full border border-zinc-700 px-6 py-3 hover:border-yellow-400">
            Tümü
          </button>

          <button className="rounded-full border border-zinc-700 px-6 py-3 hover:border-yellow-400">
            Bulmaca
          </button>

          <button className="rounded-full border border-zinc-700 px-6 py-3 hover:border-yellow-400">
            Aksiyon
          </button>

          <button className="rounded-full border border-zinc-700 px-6 py-3 hover:border-yellow-400">
            Eğlence
          </button>

        </div>

      </section>



      {/* Oyun Listesi */}
      <section className="mx-auto mt-12 max-w-6xl">

        <div className="grid gap-8 md:grid-cols-3">

          {games.map((game) => (

            <GameCard
              key={game.title}
              {...game}
            />

          ))}

        </div>

      </section>


    </main>
  );
}