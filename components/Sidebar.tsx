export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-lg h-screen p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">জোনাকী স্কুল</h2>
      
      <nav className="space-y-2">
        <a href="/dashboard" className="flex items-center p-3 bg-blue-100 text-blue-600 rounded-lg font-semibold">
          <span className="mr-3">🏠</span>
          ড্যাশবোর্ড
        </a>
        <a href="/dashboard/teachers" className="flex items-center p-3 text-gray-600 hover:bg-gray-100 rounded-lg">
          <span className="mr-3">👨‍🏫</span>
          শিক্ষকবৃন্দ
        </a>
        <a href="/dashboard/students" className="flex items-center p-3 text-gray-600 hover:bg-gray-100 rounded-lg">
          <span className="mr-3">👨‍🎓</span>
          শিক্ষার্থী
        </a>
        <a href="/dashboard/admissions" className="flex items-center p-3 text-gray-600 hover:bg-gray-100 rounded-lg">
          <span className="mr-3">📝</span>
          ভর্তি প্রক্রিয়া
        </a>
        <a href="#" className="flex items-center p-3 text-gray-600 hover:bg-gray-100 rounded-lg">
          <span className="mr-3">📊</span>
          রেজাল্ট
        </a>
        <a href="#" className="flex items-center p-3 text-gray-600 hover:bg-gray-100 rounded-lg">
          <span className="mr-3">💰</span>
          ফি সংগ্রহ
        </a>
        <a href="#" className="flex items-center p-3 text-gray-600 hover:bg-gray-100 rounded-lg">
          <span className="mr-3">⚙️</span>
          সেটিংস
        </a>
      </nav>
    </div>
  );
}