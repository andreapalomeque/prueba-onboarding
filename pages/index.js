import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Bienvenido</h1>
      <Link href="/form">
        <button>Empezar</button>
      </Link>
    </div>
  );
}
