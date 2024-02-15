import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-hablalo_black">
      <h1 className="text-4xl font-bold text-white mb-8">Bienvenido</h1>
      <Link href="/form">
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300 ease-in-out">
          Empezar
        </button>
      </Link>
    </div>
  );
}
