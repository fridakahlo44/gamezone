import Navbar from "./components/Navbar";
import GameCard from "./components/GameCard";
import Footer from "./components/Footer";
import { games } from "./data/games";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />


      {/* Hero Alanı */}
      <section className="relative flex min-h-[75vh] items-center justify-center overflow-hidden px-6">

        <div className="absolute h-[500px] w-[500px] rounded-full bg-yellow-400/10 blur-3xl" />

        <div className="relative text-center">

          <h1 className="text-6xl font-black md:text-8xl">
            GAME
            <span className="text-yellow-400">ZONE</span>
            <span>ARENA</span>
          </h1>


          <p className="mx-auto mt-6 max-w-2xl text-xl text-zinc-400">
            Yeni nesil oyun platformuna hoş geldin.
            Eğlenceli oyunları keşfet, seviyeni yükselt ve kendi oyun deneyimini oluştur.
          </p>


          <div className="mt-8 flex justify-center gap-4">

            <div className="rounded-xl border border-yellow-400/40 bg-yellow-400/10 px-6 py-3 font-bold text-yellow-400">
              🪙 10.000 Coin Başlangıç
            </div>

          </div>


          <a
            href="/games"
            className="mt-10 inline-block rounded-xl bg-yellow-400 px-10 py-4 font-bold text-black transition hover:scale-105"
          >
            Oyunları Keşfet
          </a>

        </div>

      </section>



      {/* Kategoriler */}
      <section className="mx-auto max-w-6xl px-8 pb-20">

        <h2 className="mb-8 text-4xl font-bold">
          🎮 Kategoriler
        </h2>


        <div className="grid gap-5 md:grid-cols-4">

          {[
            "Şans Oyunları",
            "Arcade",
            "Strateji",
            "Yeni Oyunlar",
          ].map((category) => (

            <div
              key={category}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 text-center font-bold transition hover:border-yellow-400 hover:text-yellow-400"
            >
              {category}
            </div>

          ))}

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