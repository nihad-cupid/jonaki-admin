// app/dashboard/teachers/page.tsx
'use client';

import { useState } from 'react';
import AddTeacherModal from '@/components/AddTeacherModal';

// Sample data - পরে database থেকে আসবে
const initialTeachers = [
  { 
    id: 1, 
    name: "মোঃ আব্দুস সাত্তার", 
    position: "প্রধান শিক্ষক", 
    phone: "01303-255164",
    email: "principal@jonaki.edu.bd",
    subjects: ["বাংলা", "ইংরেজি"],
    joinDate: "২০১০"
  },
  { 
    id: 2, 
    name: "মোঃ জাকির হোসেন", 
    position: "সহকারী প্রধান শিক্ষক", 
    phone: "01303-255164",
    email: "assistant@jonaki.edu.bd", 
    subjects: ["গণিত", "বিজ্ঞান"],
    joinDate: "২০১২"
  },
];

export default function TeachersPage() {
  const [teachers, setTeachers] = useState(initialTeachers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPosition, setFilterPosition] = useState('');

  // Add new teacher function
  const handleAddTeacher = (newTeacher: any) => {
    setTeachers([...teachers, newTeacher]);
  };

  // Filter teachers based on search and filter
  const filteredTeachers = teachers.filter(teacher => {
    const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         teacher.subjects.some(subject => 
                           subject.toLowerCase().includes(searchTerm.toLowerCase())
                         );
    const matchesPosition = !filterPosition || teacher.position === filterPosition;
    
    return matchesSearch && matchesPosition;
  });

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">শিক্ষকবৃন্দ</h1>
          <p className="text-gray-600">স্কুলের সকল শিক্ষকের তালিকা</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
        >
          <span className="mr-2">+</span> নতুন শিক্ষক যোগ করুন
        </button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <span className="text-2xl">👨‍🏫</span>
            </div>
            <div>
              <p className="text-sm text-gray-600">মোট শিক্ষক</p>
              <p className="text-2xl font-bold text-gray-800">{teachers.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
              <span className="text-2xl">⭐</span>
            </div>
            <div>
              <p className="text-sm text-gray-600">সিনিয়র শিক্ষক</p>
              <p className="text-2xl font-bold text-gray-800">
                {teachers.filter(t => t.position.includes('সিনিয়র')).length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
              <span className="text-2xl">👨‍💼</span>
            </div>
            <div>
              <p className="text-sm text-gray-600">সহকারী শিক্ষক</p>
              <p className="text-2xl font-bold text-gray-800">
                {teachers.filter(t => t.position.includes('সহকারী')).length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
              <span className="text-2xl">📚</span>
            </div>
            <div>
              <p className="text-sm text-gray-600">বিষয়</p>
              <p className="text-2xl font-bold text-gray-800">
                {new Set(teachers.flatMap(t => t.subjects)).size}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white p-4 rounded-lg shadow-sm border">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input 
              type="text" 
              placeholder="শিক্ষকের নাম বা বিষয় খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select 
            value={filterPosition}
            onChange={(e) => setFilterPosition(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">সকল পদবী</option>
            <option value="প্রধান শিক্ষক">প্রধান শিক্ষক</option>
            <option value="সহকারী প্রধান শিক্ষক">সহকারী প্রধান শিক্ষক</option>
            <option value="সিনিয়র শিক্ষক">সিনিয়র শিক্ষক</option>
            <option value="সহকারী শিক্ষক">সহকারী শিক্ষক</option>
          </select>
          <button 
            onClick={() => {
              setSearchTerm('');
              setFilterPosition('');
            }}
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200"
          >
            ফিল্টার রিসেট
          </button>
        </div>
      </div>

      {/* Teachers Table */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">শিক্ষক</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">পদবী</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">যোগাযোগ</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">বিষয়</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">কর্ম</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredTeachers.map((teacher) => (
                <tr key={teacher.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-3">
                        {teacher.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{teacher.name}</div>
                        <div className="text-sm text-gray-500">জয়েন: {teacher.joinDate}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      teacher.position === 'প্রধান শিক্ষক' ? 'bg-green-100 text-green-800' :
                      teacher.position === 'সহকারী প্রধান শিক্ষক' ? 'bg-blue-100 text-blue-800' :
                      teacher.position === 'সিনিয়র শিক্ষক' ? 'bg-purple-100 text-purple-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {teacher.position}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{teacher.phone}</div>
                    <div className="text-sm text-gray-500">{teacher.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-wrap gap-1">
                      {teacher.subjects.map((subject, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 text-sm">এডিট</button>
                      <button className="text-green-600 hover:text-green-800 text-sm">ভিউ</button>
                      <button 
                        onClick={() => setTeachers(teachers.filter(t => t.id !== teacher.id))}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        ডিলিট
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Teacher Modal */}
      <AddTeacherModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddTeacher={handleAddTeacher}
      />
    </div>
  );
}