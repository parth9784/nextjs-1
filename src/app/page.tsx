import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <div className="flex justify-center items-center h-screen space-x-4">
        <Link href="/add">
          <button className="text-xl border border-black p-2 rounded-lg bg-blue-600 text-white">
            Addition
          </button>
        </Link>
        <Link href="/sub">
          <button className="text-xl border border-black p-2 rounded-lg bg-blue-600 text-white">
            Subtraction
          </button>
        </Link>
        <Link href="/multiply">
          <button className="text-xl border border-black p-2 rounded-lg bg-blue-600 text-white">
            Multiplication
          </button>
        </Link>
        <Link href="/divide">
          <button className="text-xl border border-black p-2 rounded-lg bg-blue-600 text-white">
            Division
          </button>
        </Link>
      </div>
    </div>
  );
}
