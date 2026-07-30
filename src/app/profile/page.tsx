import { users } from "../data/users";

export default function ProfilePage() {

  const user = users[0];

  return (
    <main className="min-h-screen bg-black px-8 py-16 text-white">

      <div className="mx-auto max-w-5xl">


        {/* Profil */}
        <section className="rounded-3xl border border-zinc-800 bg-zinc-950 p-10">

          <div className="flex flex-col items-center gap-6 md:flex-row">


            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-orange-600 text-6xl">
              {user.avatar}
            </div>


            <div>

              <h1 className="text-4xl font-extrabold">
                {user.username}
              </h1>


              <p className="mt-2 text-zinc-400">
                GAMEZONE oyuncusu
              </p>


              <div className="mt-4 inline-block rounded-full bg-yellow-400 px-5 py-2 font-bold text-black">
                Seviye {user.level}
              </div>

            </div>


          </div>

        </section>




        {/* İstatistikler */}
        <section className="mt-10 grid gap-6 md:grid-cols-3">


          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 text-center">

            <h2 className="text-4xl font-bold text-yellow-400">
              {user.gamesPlayed}
            </h2>

            <p className="text-zinc-400">
              Oynanan Oyun
            </p>

          </div>



          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 text-center">

            <h2 className="text-4xl font-bold text-yellow-400">
              {user.points}
            </h2>

            <p className="text-zinc-400">
              Toplam Puan
            </p>

          </div>



          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 text-center">

            <h2 className="text-4xl font-bold text-yellow-400">
              {user.achievements.length}
            </h2>

            <p className="text-zinc-400">
              Başarı
            </p>

          </div>


        </section>




        {/* Başarılar */}
        <section className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-950 p-8">

          <h2 className="text-3xl font-bold">
            🏆 Başarılar
          </h2>


          <div className="mt-6 grid gap-4 md:grid-cols-3">

            {user.achievements.map((achievement) => (

              <div
                key={achievement}
                className="rounded-2xl bg-zinc-900 p-5"
              >
                ⭐ {achievement}
              </div>

            ))}

          </div>


        </section>




        {/* Favoriler */}
        <section className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-950 p-8">

          <h2 className="text-3xl font-bold">
            ❤️ Favori Oyunlar
          </h2>


          <div className="mt-5 flex flex-wrap gap-4">

            {user.favoriteGames.map((game) => (

              <span
                key={game}
                className="rounded-full border border-zinc-700 px-5 py-2 text-yellow-400"
              >
                {game}
              </span>

            ))}

          </div>

        </section>



      </div>

    </main>
  );
}