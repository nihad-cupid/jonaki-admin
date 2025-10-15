export default function Header() {
  return (
    <header className="bg-white shadow-sm p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-800">এডমিন ড্যাশবোর্ড</h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">অ্যাডমিন</span>
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
            A
          </div>
        </div>
      </div>
    </header>
  );
}