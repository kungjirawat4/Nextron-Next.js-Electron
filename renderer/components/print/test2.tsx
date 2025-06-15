'use client'
import React, { useState } from 'react';
import {

  User,
  Users,
} from 'lucide-react';


export default function StudentTable() {


  // ข้อมูลตัวอย่าง
  const [students] = useState([
    {
      id: 1,
      schoolCode: 'SC001',
      schoolName: 'โรงเรียนวัดไผ่',
      nationalId: '1-2345-67890-12-3',
      grade: 'ป.6',
      room: '1',
      studentId: 'ST001',
      gender: 'ชาย',
      titlePrefix: 'เด็กชาย',
      firstName: 'สมชาย',
      lastName: 'ใจดี',
      birthDate: '2010-05-15',
      nationality: 'ไทย',
      ethnicity: 'ไทย',
      religion: 'พุทธ',
      parentsMaritalStatus: 'สมรส',
      fatherTitle: 'นาย',
      fatherFirstName: 'สมศักดิ์',
      fatherLastName: 'ใจดี',
      fatherOccupation: 'เกษตรกร',
      motherTitle: 'นาง',
      motherFirstName: 'สมหญิง',
      motherLastName: 'ใจดี',
      motherOccupation: 'ค้าขาย',
      guardianRelation: 'บิดา',
      guardianTitle: 'นาย',
      guardianFirstName: 'สมศักดิ์',
      guardianLastName: 'ใจดี',
      guardianOccupation: 'เกษตรกร',
      houseNumber: '123',
      village: 'หมู่ 5',
      subdistrict: 'บางพลี',
      district: 'บางพลี',
      province: 'สมุทรปราการ',
      postalCode: '10540'
    },
    {
      id: 2,
      schoolCode: 'SC001',
      schoolName: 'โรงเรียนวัดไผ่',
      nationalId: '1-2345-67890-45-6',
      grade: 'ป.5',
      room: '2',
      studentId: 'ST002',
      gender: 'หญิง',
      titlePrefix: 'เด็กหญิง',
      firstName: 'สมหญิง',
      lastName: 'รักเรียน',
      birthDate: '2011-08-22',
      nationality: 'ไทย',
      ethnicity: 'ไทย',
      religion: 'พุทธ',
      parentsMaritalStatus: 'สมรส',
      fatherTitle: 'นาย',
      fatherFirstName: 'สมปอง',
      fatherLastName: 'รักเรียน',
      fatherOccupation: 'ข้าราชการ',
      motherTitle: 'นาง',
      motherFirstName: 'สมใส',
      motherLastName: 'รักเรียน',
      motherOccupation: 'พยาบาล',
      guardianRelation: 'มารดา',
      guardianTitle: 'นาง',
      guardianFirstName: 'สมใส',
      guardianLastName: 'รักเรียน',
      guardianOccupation: 'พยาบาล',
      houseNumber: '456',
      village: 'หมู่ 3',
      subdistrict: 'บางนา',
      district: 'บางนา',
      province: 'กรุงเทพฯ',
      postalCode: '10260'
    }
  ]);




  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
      {/* สถิติ */}
      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <div className="flex items-center gap-3">
            <Users className="size-8 text-blue-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">นักเรียนทั้งหมด</h3>
              <p className="text-2xl font-bold text-blue-600">{students.length}</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <div className="flex items-center gap-3">
            <User className="size-8 text-green-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">นักเรียนชาย</h3>
              <p className="text-2xl font-bold text-green-600">
                {students.filter(s => s.gender === 'ชาย').length}
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <div className="flex items-center gap-3">
            <User className="size-8 text-pink-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">นักเรียนหญิง</h3>
              <p className="text-2xl font-bold text-pink-600">
                {students.filter(s => s.gender === 'หญิง').length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ตาราง */}
      <div className="overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  รหัสนักเรียน
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  ชื่อ-นามสกุล
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  ชั้น/ห้อง
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  เพศ
                </th>


              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                    {student.studentId}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {student.titlePrefix}{student.firstName} {student.lastName}
                      </div>
                      <div className="text-sm text-gray-500">
                        {student.schoolName}
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                    {student.grade}/{student.room}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <span className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${student.gender === 'ชาย'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-pink-100 text-pink-800'
                      }`}>
                      {student.gender}
                    </span>
                  </td>


                </tr>
              ))}
            </tbody>
          </table>
        </div>


      </div>
    </div>
  );
}
