// app/dashboard/students/page.tsx - COMPLETE FIXED VERSION
'use client';

import { useState } from 'react';
import AddStudentModal from '@/components/AddStudentModal';

// Type definition
interface Student {
  id: number;
  name: string;
  class: string;
  roll: number;
  gender: "Male" | "Female";
  phone: string;
  parentName: string;
  address?: string;
  admissionDate: string;
}

// Sample classes data
const classes = [
  { id: 'nursery', name: 'নার্সারি', color: 'bg-pink-100 text-pink-800' },
  { id: 'class1', name: 'প্রথম শ্রেণী', color: 'bg-purple-100 text-purple-800' },
  { id: 'class2', name: 'দ্বিতীয় শ্রেণী', color: 'bg-blue-100 text-blue-800' },
  { id: 'class3', name: 'তৃতীয় শ্রেণী', color: 'bg-green-100 text-green-800' },
  { id: 'class4', name: 'চতুর্থ শ্রেণী', color: 'bg-yellow-100 text-yellow-800' },
  { id: 'class5', name: 'পঞ্চম শ্রেণী', color: 'bg-orange-100 text-orange-800' },
  { id: 'class6', name: 'ষষ্ঠ শ্রেণী', color: 'bg-red-100 text-red-800' },
  { id: 'class7', name: 'সপ্তম শ্রেণী', color: 'bg-indigo-100 text-indigo-800' },
  { id: 'class8', name: 'অষ্টম শ্রেণী', color: 'bg-teal-100 text-teal-800' },
  { id: 'class9', name: 'নবম শ্রেণী', color: 'bg-cyan-100 text-cyan-800' },
];

// Sample students data - class-wise (FIXED)
const initialStudents: Student[] = [
  { 
    id: 1, 
    name: "আনিকা তাবাসসুম", 
    class: "nursery", 
    roll: 1, 
    gender: "Female", 
    phone: "01710-123456", 
    parentName: "মোঃ রফিকুল ইসলাম", 
    admissionDate: "২০২৪" 
  },
  { 
    id: 2, 
    name: "আরিয়ান আহমেদ", 
    class: "nursery", 
    roll: 2, 
    gender: "Male", 
    phone: "01711-234567", 
    parentName: "মোঃ কামাল হোসেন", 
    admissionDate: "২০২৪" 
  },
];

export default function StudentsPage() {
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [selectedClass, setSelectedClass] = useState('nursery');
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Add new student function
  const handleAddStudent = (newStudent: any) => {
    console.log('Adding student:', newStudent);
    setStudents([...students, { ...newStudent, id: Date.now() }]);
  };

  // Get students for selected class
  const classStudents = students.filter(student => 
    student.class === selectedClass && 
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get class-wise statistics
  const classStats = classes.map(cls => ({
    ...cls,
    totalStudents: students.filter(s => s.class === cls.id).length,
    boys: students.filter(s => s.class === cls.id && s.gender === "Male").length,
    girls: students.filter(s => s.class === cls.id && s.gender === "Female").length,
  }));

  const totalStudents = students.length;
  const totalBoys = students.filter(s => s.gender === "Male").length;
  const totalGirls = students.filter(s => s.gender === "Female").length;

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">শিক্ষার্থী ব্যবস্থাপনা</h1>
          <p className="text-gray-600">ক্লাস-ভিত্তিক শিক্ষার্থী তালিকা</p>
        </div>
        <div className="flex items-center space-x-4">
          <input 
            type="text"
            placeholder="শিক্ষার্থীর নাম খুঁজুন..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            onClick={() => {
              console.log('Main add button clicked');
              setIsModalOpen(true);
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
          >
            <span className="mr-2">+</span> নতুন শিক্ষার্থী
          </button>
        </div>
      </div>

      {/* Overall Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
          <div className="text-3xl font-bold text-blue-600">{totalStudents}</div>
          <div className="text-gray-600">মোট শিক্ষার্থী</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
          <div className="text-3xl font-bold text-green-600">{totalBoys}</div>
          <div className="text-gray-600">ছাত্র</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
          <div className="text-3xl font-bold text-pink-600">{totalGirls}</div>
          <div className="text-gray-600">ছাত্রী</div>
        </div>
      </div>

      {/* Class Selection Tabs */}
      <div className="bg-white p-4 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold mb-4">ক্লাস সিলেক্ট করুন</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {classStats.map((cls) => (
            <button
              key={cls.id}
              onClick={() => setSelectedClass(cls.id)}
              className={`p-3 rounded-lg border-2 text-center transition-all ${
                selectedClass === cls.id 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className={`text-xs px-2 py-1 rounded-full ${cls.color} mb-2`}>
                {cls.name}
              </div>
              <div className="text-lg font-bold text-gray-800">{cls.totalStudents}</div>
              <div className="text-xs text-gray-600">
                ছাত্র: {cls.boys} | ছাত্রী: {cls.girls}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Class Students */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-4 border-b">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                {classes.find(c => c.id === selectedClass)?.name} - শিক্ষার্থী তালিকা
              </h3>
              <p className="text-gray-600">
                মোট {classStudents.length} জন শিক্ষার্থী
                {classStudents.length > 0 && ` (রোল ১-${classStudents.length})`}
              </p>
            </div>
            <button 
              onClick={() => {
                console.log('Class-specific add button clicked');
                setIsModalOpen(true);
              }}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center"
            >
              <span className="mr-2">+</span> এই ক্লাসে যোগ করুন
            </button>
          </div>
        </div>

        {/* Students Grid */}
        {classStudents.length > 0 ? (
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {classStudents.map((student) => (
                <div key={student.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                  <div className="flex items-center mb-3">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold mr-3 ${
                      student.gender === "Male" ? "bg-blue-500" : "bg-pink-500"
                    }`}>
                      {student.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{student.name}</h4>
                      <p className="text-sm text-gray-600">রোল: {student.roll}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">লিঙ্গ:</span>
                      <span className="font-medium">{student.gender === "Male" ? "ছাত্র" : "ছাত্রী"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">অভিভাবক:</span>
                      <span className="font-medium">{student.parentName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">ফোন:</span>
                      <span className="font-medium">{student.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">ভর্তি:</span>
                      <span className="font-medium">{student.admissionDate}</span>
                    </div>
                  </div>

                  <div className="mt-4 flex space-x-2">
                    <button className="flex-1 bg-blue-50 text-blue-600 py-2 rounded text-sm hover:bg-blue-100">
                      প্রোফাইল
                    </button>
                    <button 
                      onClick={() => setStudents(students.filter(s => s.id !== student.id))}
                      className="flex-1 bg-red-50 text-red-600 py-2 rounded text-sm hover:bg-red-100"
                    >
                      রিমুভ
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-8 text-center">
            <div className="text-gray-400 text-6xl mb-4">👨‍🎓</div>
            <h3 className="text-lg font-semibold text-gray-600 mb-2">কোন শিক্ষার্থী নেই</h3>
            <p className="text-gray-500">এই ক্লাসে এখনো কোন শিক্ষার্থী ভর্তি হয়নি</p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              প্রথম শিক্ষার্থী যোগ করুন
            </button>
          </div>
        )}
      </div>

      {/* Add Student Modal */}
      <AddStudentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddStudent={handleAddStudent}
        selectedClass={selectedClass}
      />
    </div>
  );
}