import Navbar from "./components/Navbar";
import GameCard from "./components/GameCard";
import Footer from "./components/Footer";
import { games } from "./data/games";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />


      {/* Ana Tanıtım Alanı */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6">

        <div className="absolute h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl"></div>

        <div className="relative text-center">

          <h1 className="text-7xl font-extrabold">
            GAME<span className="text-yellow-400">ZONE</span>
          </h1>


          <p className="mx-auto mt-6 max-w-xl text-xl text-zinc-400">
            Yeni nesil oyun platformunda eğlenceli dünyaları keşfet.
          </p>


          <a
            href="/games"
            className="mt-10 inline-block rounded-xl bg-yellow-400 px-10 py-4 font-bold text-black transition hover:scale-105"
          >
            Oyunları Keşfet
          </a>

        </div>

      </section>



      {/* Popüler Oyunlar */}
      <section className="mx-auto max-w-6xl px-8 pb-20">

        <h2 className="mb-8 text-4xl font-bold">
          🔥 Popüler Oyunlar
        </h2>


        <div className="grid gap-8 md:grid-cols-3">

          {games.slice(0, 3).map((game) => (

            <GameCard
              key={game.title}
              {...game}
            />

          ))}

        </div>

      </section>



      {/* Yeni Oyunlar */}
      <section className="mx-auto max-w-6xl px-8 pb-20">

        <h2 className="mb-8 text-4xl font-bold">
          🆕 Yeni Eklenenler
        </h2>


        <div className="grid gap-8 md:grid-cols-3">

          {games.slice(3, 6).map((game) => (

            <GameCard
              key={game.title}
              {...game}
            />

          ))}

        </div>

      </section>



      <Footer />

    </main>
  );
}