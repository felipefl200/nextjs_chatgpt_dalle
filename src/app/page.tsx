import Image from "next/image"
import { Inter } from "next/font/google"
import CardPokemon from "./components/PokemonCard"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main className="w-full min-h-screen animate-background bg-[length:400%] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 flex items-center justify-center">
      <CardPokemon />
    </main>
  )
}
