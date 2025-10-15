export default function AdmissionsPage() {
  const applications = [
    { id: 1, studentName: "সাকিব আল হাসান", class: "ষষ্ঠ", status: "pending", applyDate: "২০২৪-০১-১৫" },
    { id: 2, studentName: "ফাতেমা বেগম", class: "পঞ্চম", status: "approved", applyDate: "২০২৪-০১-১৪" },
    { id: 3, studentName: "আরিফুল ইসলাম", class: "চতুর্থ", status: "rejected", applyDate: "২০২৪-০১-১৩" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-yellow-100 text-yellow-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'approved': return 'অনুমোদিত';
      case 'rejected': return 'বাতিল';
      default: return 'মুলতুবি';
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">ভর্তি আবেদন</h1>
        <div className="flex space-x-4">
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200">
            রিপোর্ট জেনারেট
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            নতুন আবেদন
          </button>
        </div>
      </div>

      {/* Applications List */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">আবেদনকারী</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ক্লাস</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">আবেদনের তারিখ</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">স্ট্যাটাস</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">কর্ম</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {applications.map((app) => (
                <tr key={app.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    {app.studentName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{app.class}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{app.applyDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(app.status)}`}>
                      {getStatusText(app.status)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 text-sm">বিস্তারিত</button>
                      <button className="text-green-600 hover:text-green-800 text-sm">অ্যাপ্রুভ</button>
                      <button className="text-red-600 hover:text-red-800 text-sm">রিজেক্ট</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
          <div className="text-2xl font-bold text-yellow-600">১২</div>
          <div className="text-gray-600">মুলতুবি আবেদন</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
          <div className="text-2xl font-bold text-green-600">২৫</div>
          <div className="text-gray-600">অনুমোদিত আবেদন</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
          <div className="text-2xl font-bold text-red-600">৩</div>
          <div className="text-gray-600">বাতিল আবেদন</div>
        </div>
      </div>
    </div>
  );
}