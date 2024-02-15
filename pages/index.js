import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Bienvenido</h1>
      <Link href="/form">
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300 ease-in-out">
          Empezar
        </button>
      </Link>
    </div>
  );
}
