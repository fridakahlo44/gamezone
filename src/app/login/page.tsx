export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">


      <div className="w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-950 p-8">


        <div className="text-center">

          <h1 className="text-4xl font-extrabold">
            GAME<span className="text-yellow-400">ZONE</span>
          </h1>


          <p className="mt-3 text-zinc-400">
            Hesabına giriş yap ve oyunlara devam et
          </p>

        </div>




        {/* Avatar */}
        <div className="mt-8 flex justify-center">

          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-orange-600 text-5xl">
            👤
          </div>

        </div>




        <div className="mt-8 space-y-4">


          <input
            type="email"
            placeholder="E-posta"
            className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none transition focus:border-yellow-400"
          />



          <input
            type="password"
            placeholder="Şifre"
            className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none transition focus:border-yellow-400"
          />



          <button className="w-full rounded-xl bg-yellow-400 py-3 font-bold text-black transition hover:bg-yellow-300">
            Giriş Yap
          </button>


        </div>




        <div className="mt-6 flex justify-between text-sm">

          <a
            href="#"
            className="text-zinc-500 hover:text-yellow-400"
          >
            Şifremi unuttum
          </a>


          <a
            href="/register"
            className="text-yellow-400"
          >
            Kayıt Ol
          </a>

        </div>


      </div>


    </main>
  );
}