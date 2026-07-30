export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-zinc-800 bg-black/80 px-8 py-5 backdrop-blur">

      <a href="/" className="text-3xl font-extrabold">
        GAME<span className="text-yellow-400">ZONE</span>
      </a>


      <div className="hidden gap-8 text-zinc-300 md:flex">

        <a
          href="/"
          className="transition hover:text-yellow-400"
        >
          Ana Sayfa
        </a>

        <a
          href="/games"
          className="transition hover:text-yellow-400"
        >
          Oyunlar
        </a>

        <a
          href="#"
          className="transition hover:text-yellow-400"
        >
          Etkinlikler
        </a>

        <a
          href="/profile"
          className="transition hover:text-yellow-400"
        >
          Profil
        </a>

      </div>


      <div className="flex gap-3">

        <a
          href="/login"
          className="rounded-xl border border-zinc-700 px-5 py-2 font-bold text-white transition hover:border-yellow-400"
        >
          Giriş
        </a>


        <a
          href="/register"
          className="rounded-xl bg-yellow-400 px-5 py-2 font-bold text-black transition hover:scale-105"
        >
          Kayıt Ol
        </a>

      </div>

    </nav>
  );
}