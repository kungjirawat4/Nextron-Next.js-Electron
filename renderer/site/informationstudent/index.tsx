'use client'
import React, { useRef, useState } from 'react';
import {
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  Filter,
  Download,
  User,
  Users,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/main-layout/navbar';
import { useReactToPrint } from "react-to-print";
import StudentTable from '@/components/print/test2';
import { Card, CardContent, CardTitle } from '@/components/ui/card';

export default function StudentTableCRUD() {
  const componentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    contentRef: componentRef, // ✅ ใช้ contentRef แทน content
    documentTitle: 'student-report',
    onAfterPrint: () => console.log('พิมพ์เสร็จแล้ว'),
  });

  // ข้อมูลตัวอย่าง
  const route = useRouter();
  const [students, setStudents] = useState([
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

  const [searchTerm, setSearchTerm] = useState('');
  const [filterGrade, setFilterGrade] = useState('');
  const [filterGender, setFilterGender] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);



  // ฟิลเตอร์ข้อมูล
  const filteredStudents = students.filter(student => {
    const matchesSearch =
      student.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.nationalId.includes(searchTerm);

    const matchesGrade = filterGrade === '' || student.grade === filterGrade;
    const matchesGender = filterGender === '' || student.gender === filterGender;

    return matchesSearch && matchesGrade && matchesGender;
  });

  // Pagination
  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentStudents = filteredStudents.slice(startIndex, startIndex + itemsPerPage);

  const handleDelete = (id) => {
    if (window.confirm('คุณแน่ใจหรือไม่ที่จะลบข้อมูลนักเรียนคนนี้?')) {
      setStudents(students.filter(s => s.id !== id));
    }
  };

  const exportToCSV = () => {
    const headers = ['รหัสนักเรียน', 'ชื่อ-นามสกุล', 'ชั้น', 'ห้อง', 'เพศ', 'เลขบัตรประชาชน'];
    const csvContent = [
      headers.join(','),
      ...filteredStudents.map(student =>
        [
          student.studentId,
          `${student.titlePrefix}${student.firstName} ${student.lastName}`,
          student.grade,
          student.room,
          student.gender,
          student.nationalId
        ].join(',')
      )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'student_data.csv';
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4">

      <div className="mx-auto max-w-7xl">
        <Navbar isBackArrow titleName="รายการนักเรียนทั้งหมด" />
        {/* Header */}
        <Card className="mb-6 rounded-lg bg-white p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-3">
              <Users className="size-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">ระบบจัดการข้อมูลนักเรียน</h1>
                <p className="text-lg text-gray-600">จัดการข้อมูลนักเรียนในโรงเรียน</p>
              </div>
            </CardTitle>
            <div className="flex gap-3">
              <Button
                onClick={exportToCSV}
                className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700"
              >
                <Download className="size-4" />
                ส่งออก CSV
              </Button>
              <Button
                onClick={() => route.push('/informationstudent/new')}
                className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
              >
                <Plus className="size-4" />
                เพิ่มนักเรียน
              </Button>
              <div>
                <div ref={componentRef} className="hidden print:block">
                  {/* <StudentDevelopmentRecord /> */}
                  <StudentTable />
                </div>

                <Button onClick={handlePrint}>Print</Button>
              </div>
            </div>

          </div>
        </Card>

        {/* ฟิลเตอร์และค้นหา */}
        <Card className="mb-6 rounded-lg bg-white p-6 shadow-lg">
          <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                <Search className="mr-1 inline size-4" />
                ค้นหา
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="ค้นหาด้วยชื่อ, รหัสนักเรียน, หรือเลขบัตรประชาชน"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                <Filter className="mr-1 inline size-4" />
                ชั้น
              </label>
              <select
                value={filterGrade}
                onChange={(e) => setFilterGrade(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">ทุกชั้น</option>
                <option value="ป.1">ป.1</option>
                <option value="ป.2">ป.2</option>
                <option value="ป.3">ป.3</option>
                <option value="ป.4">ป.4</option>
                <option value="ป.5">ป.5</option>
                <option value="ป.6">ป.6</option>
                <option value="ม.1">ม.1</option>
                <option value="ม.2">ม.2</option>
                <option value="ม.3">ม.3</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                เพศ
              </label>
              <select
                value={filterGender}
                onChange={(e) => setFilterGender(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">ทุกเพศ</option>
                <option value="ชาย">ชาย</option>
                <option value="หญิง">หญิง</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* สถิติ */}
        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card className="rounded-lg bg-white p-6 shadow-lg">
            <div className="flex items-center gap-3">
              <Users className="size-8 text-blue-600" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">นักเรียนทั้งหมด</h3>
                <p className="text-2xl font-bold text-blue-600">{students.length}</p>
              </div>
            </div>
          </Card>
          <Card className="rounded-lg bg-white p-6 shadow-lg">
            <div className="flex items-center gap-3">
              <User className="size-8 text-green-600" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">นักเรียนชาย</h3>
                <p className="text-2xl font-bold text-green-600">
                  {students.filter(s => s.gender === 'ชาย').length}
                </p>
              </div>
            </div>
          </Card>
          <Card className="rounded-lg bg-white p-6 shadow-lg">
            <div className="flex items-center gap-3">
              <User className="size-8 text-pink-600" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">นักเรียนหญิง</h3>
                <p className="text-2xl font-bold text-pink-600">
                  {students.filter(s => s.gender === 'หญิง').length}
                </p>
              </div>
            </div>
          </Card>
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
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    เลขบัตรประชาชน
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    ผู้ปกครอง
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-gray-500">
                    จัดการ
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {currentStudents.map((student) => (
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
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                      {student.nationalId}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                      {student.guardianTitle}{student.guardianFirstName} {student.guardianLastName}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-center">
                      <div className="flex justify-center gap-2">
                        <button
                          // onClick={() => openModal('view', student)}
                          className="text-blue-600 transition-colors hover:text-blue-800"
                          title="ดูข้อมูล"
                        >
                          <Eye className="size-4" />
                        </button>
                        <button
                          // onClick={() => openModal('edit', student)}
                          className="text-green-600 transition-colors hover:text-green-800"
                          title="แก้ไข"
                        >
                          <Edit className="size-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(student.id)}
                          className="text-red-600 transition-colors hover:text-red-800"
                          title="ลบ"
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3">
              <div className="flex items-center text-sm text-gray-700">
                <span>
                  แสดง {startIndex + 1} ถึง {Math.min(startIndex + itemsPerPage, filteredStudents.length)}
                  จาก {filteredStudents.length} รายการ
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="rounded bg-gray-300 px-3 py-1 text-gray-700 disabled:opacity-50"
                >
                  ก่อนหน้า
                </button>
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`rounded px-3 py-1 ${currentPage === i + 1
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                      }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="rounded bg-gray-300 px-3 py-1 text-gray-700 disabled:opacity-50"
                >
                  ถัดไป
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
