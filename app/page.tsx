export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">জোনাকী স্কুল ড্যাশবোর্ড</h1>
        <p className="text-xl mb-8">এডমিন প্যানেলে স্বাগতম</p>
        <a 
          href="/dashboard" 
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          ড্যাশবোর্ডে যান
        </a>
      </div>
    </div>
  );
}