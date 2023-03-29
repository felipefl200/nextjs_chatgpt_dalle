export default function CardPokemon() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-slate-800 rounded shadow-md p-6 flex flex-col max-w-lg">
        <span className="self-end bg-sky-500 rounded-full px-3 text-slate-200">
          HP 130
        </span>
        <div>
          <img
            className="p-6 mx-auto w-60"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
            alt=""
          />
          <p className="text-2xl text-white text-center">Nome do pokemon</p>
          <div className="flex justify-center gap-3 my-4">
            <span className="px-2 text-center text-slate-100 bg-yellow-500 rounded-full">
              water
            </span>
            <span className="px-2 text-center text-slate-100 bg-yellow-500 rounded-full">
              water
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center pt-4">
          <div className="flex flex-col items-center bg-slate-900 p-2 rounded-md">
            <span className="font-semibold text-slate-100">60</span>
            <span className="text-slate-400">Ataque</span>
          </div>
          <div className="flex flex-col items-center bg-slate-900 p-2 rounded-md">
            <span className="font-semibold text-slate-100">95</span>
            <span className="text-slate-400">Defesa</span>
          </div>
          <div className="flex flex-col items-center bg-slate-900 p-2 rounded-md">
            <span className="font-semibold text-slate-100">65</span>
            <span className="text-slate-400 text-ellipsis">Velocidade</span>
          </div>
        </div>
      </div>
      <p className="max-w-md"><span className="text-slate-900 font-bold">Descrição:</span>  m dolor sit amet consectetur, adipisicing elit. Provident, mollitia inventore explicabo a vel ipsam iure distinctio asperiores veritatis quia in repellat, facilis similique culpa sit iste aspernatur cupiditate officia.</p>
    </div>
  )
}
