"use client";

import { useState } from "react";

type GamePlayProps = {
  game: {
    title: string;
    minCoin: number;
    maxCoin: number;
    rewardMultiplier: number;
  };
};

export default function GamePlay({ game }: GamePlayProps) {

  const [coin, setCoin] = useState(game.minCoin);
  const [balance, setBalance] = useState(10000);
  const [result, setResult] = useState("");

  function playGame() {

    if (coin > balance) {
      setResult("Yeterli coin yok!");
      return;
    }

    const win = Math.random() > 0.5;

    if (win) {

      const reward = coin * game.rewardMultiplier;

      setBalance(balance + reward);

      setResult(`🎉 Kazandın! +${reward} Coin`);

    } else {

      setBalance(balance - coin);

      setResult(`❌ Kaybettin! -${coin} Coin`);

    }

  }


  return (
    <div className="mt-8 rounded-3xl border border-yellow-400/30 bg-zinc-900 p-8">

      <h3 className="text-2xl font-bold">
        🪙 Coin ile Oyna
      </h3>

      <p className="mt-3 text-yellow-400">
        Bakiyen: {balance} Coin
      </p>


      <div className="mt-5 flex flex-wrap gap-3">

        {[100, 500, 1000, 5000].map((amount) => (

          <button
            key={amount}
            onClick={() => setCoin(amount)}
            className={
              coin === amount
                ? "rounded-xl bg-yellow-400 px-5 py-3 font-bold text-black"
                : "rounded-xl bg-zinc-800 px-5 py-3 font-bold"
            }
          >
            {amount}
          </button>

        ))}

      </div>


      <button
        onClick={playGame}
        className="mt-8 rounded-xl bg-yellow-400 px-10 py-4 font-bold text-black"
      >
        Oyunu Başlat
      </button>


      {result && (
        <div className="mt-5 rounded-xl bg-black p-4 text-xl">
          {result}
        </div>
      )}

    </div>
  );
}