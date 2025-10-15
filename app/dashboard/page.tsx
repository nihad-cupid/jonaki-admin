export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">ড্যাশবোর্ড ওভারভিউ</h1>
      
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-600">মোট শিক্ষার্থী</h3>
          <p className="text-3xl font-bold text-blue-600">৫২০</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-600">শিক্ষক সংখ্যা</h3>
          <p className="text-3xl font-bold text-green-600">১৮</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-600">ভর্তি আবেদন</h3>
          <p className="text-3xl font-bold text-orange-600">৪৫</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-600">ক্লাস রুম</h3>
          <p className="text-3xl font-bold text-purple-600">১২</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h2 className="text-xl font-semibold mb-4">সাম্প্রতিক কার্যক্রম</h2>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>নতুন শিক্ষার্থী ভর্তি হয়েছে</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span>পরীক্ষার রেজাল্ট প্রকাশিত</span>
          </div>
        </div>
      </div>
    </div>
  );
}