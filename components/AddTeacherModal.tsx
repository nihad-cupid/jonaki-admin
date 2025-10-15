// components/AddTeacherModal.tsx
'use client';

import { useState } from 'react';

interface AddTeacherModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTeacher: (teacher: any) => void;
}

export default function AddTeacherModal({ isOpen, onClose, onAddTeacher }: AddTeacherModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    phone: '',
    email: '',
    subjects: '',
    joinDate: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const teacherData = {
      ...formData,
      id: Date.now(), // Temporary ID
      subjects: formData.subjects.split(',').map(s => s.trim())
    };
    onAddTeacher(teacherData);
    onClose();
    setFormData({ name: '', position: '', phone: '', email: '', subjects: '', joinDate: '' });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">নতুন শিক্ষক যোগ করুন</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">নাম *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="শিক্ষকের পুরো নাম"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">পদবী *</label>
            <select
              required
              value={formData.position}
              onChange={(e) => setFormData({...formData, position: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">পদবী নির্বাচন করুন</option>
              <option value="প্রধান শিক্ষক">প্রধান শিক্ষক</option>
              <option value="সহকারী প্রধান শিক্ষক">সহকারী প্রধান শিক্ষক</option>
              <option value="সিনিয়র শিক্ষক">সিনিয়র শিক্ষক</option>
              <option value="সহকারী শিক্ষক">সহকারী শিক্ষক</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">ফোন নম্বর *</label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="০১XXXXXXXXX"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">ইমেইল</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="email@school.edu.bd"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">বিষয়সমূহ</label>
            <input
              type="text"
              value={formData.subjects}
              onChange={(e) => setFormData({...formData, subjects: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="বাংলা, ইংরেজি, গণিত (কমা দিয়ে分离 করুন)"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">যোগদানের তারিখ</label>
            <input
              type="date"
              value={formData.joinDate}
              onChange={(e) => setFormData({...formData, joinDate: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex space-x-3 pt-4">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              সংরক্ষণ করুন
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400"
            >
              বাতিল
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}