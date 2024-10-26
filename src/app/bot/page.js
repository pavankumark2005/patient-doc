import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white bg-[url('/backg.jpg')] bg-cover bg-center">
      <h1 className="underline">AI Chatbot</h1>

      <Link href="/pres">
        <button className="px-4 py-2 text-lg rounded-lg border border-black bg-black/60 mt-4">
          Start Chart
        </button>
      </Link>
    </div>
  );
}
