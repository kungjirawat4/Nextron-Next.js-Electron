'use client'
import React, { useState } from 'react';
import {
  Plus,
  Edit2,
  Trash2,
  Eye,
  Search,
  School,
  MapPin,
  User,
  Users,
  BookOpen,
  Save,
  X,
  Filter
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/layout/main-layout/navbar';
import NoResultsState from '@/components/noResultsState';
import { Card, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function SchoolDataTable() {
  const route = useRouter();
  // ข้อมูลตัวอย่าง
  const [schools, setSchools] = useState([
    {
      id: 1,
      schoolName: 'โรงเรียนบ้านดอกไม้',
      departmentLevel: 'กรมสามัญศึกษา',
      subdistrict: 'ดอกไม้',
      district: 'เมือง',
      province: 'เชียงใหม่',
      provinceArea: 'เขตพื้นที่การศึกษาประถมศึกษาเชียงใหม่ เขต 1',
      directorName: 'นายสมชาย ใจดี',
      directorPosition: 'ผู้อำนวยการโรงเรียน',
      registrarName: 'นางสาวมาลี รักเรียน',
      academicHeadName: 'นายสมศักดิ์ รู้มาก',
      teacherName: 'นางสุดา สอนดี'
    },
    {
      id: 2,
      schoolName: 'โรงเรียนวัดป่าใหญ่',
      departmentLevel: 'กรมการฝึกหัดครู',
      subdistrict: 'ป่าใหญ่',
      district: 'แม่ริม',
      province: 'เชียงใหม่',
      provinceArea: 'เขตพื้นที่การศึกษาประถมศึกษาเชียงใหม่ เขต 2',
      directorName: 'นายประยุทธ เก่งกาจ',
      directorPosition: 'ผู้อำนวยการโรงเรียน',
      registrarName: 'นางจันทร์ จัดการดี',
      academicHeadName: 'นายวิชา ชำนาญ',
      teacherName: 'นางสมหวัง ห่วงใย'
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState('create'); // 'create', 'edit', 'view'
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [provinceFilter, setProvinceFilter] = useState('');

  // ฟอร์มข้อมูล
  const [formData, setFormData] = useState({
    schoolName: '',
    departmentLevel: '',
    subdistrict: '',
    district: '',
    province: '',
    provinceArea: '',
    directorName: '',
    directorPosition: '',
    registrarName: '',
    academicHeadName: '',
    teacherName: ''
  });

  const resetForm = () => {
    setFormData({
      schoolName: '',
      departmentLevel: '',
      subdistrict: '',
      district: '',
      province: '',
      provinceArea: '',
      directorName: '',
      directorPosition: '',
      registrarName: '',
      academicHeadName: '',
      teacherName: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // เปิด Modal
  const openModal = (mode, school = null) => {
    setModalMode(mode);
    setSelectedSchool(school);
    if (school) {
      setFormData({ ...school });
    } else {
      resetForm();
    }
    setShowModal(true);
  };

  // ปิด Modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedSchool(null);
    resetForm();
  };

  // เพิ่มข้อมูล
  const handleCreate = () => {
    const newSchool = {
      ...formData,
      id: Math.max(...schools.map(s => s.id)) + 1
    };
    setSchools([...schools, newSchool]);
    closeModal();
  };

  // แก้ไขข้อมูล
  const handleUpdate = () => {
    setSchools(schools.map(school =>
      school.id === selectedSchool.id ? { ...formData, id: selectedSchool.id } : school
    ));
    closeModal();
  };

  // ลบข้อมูล
  const handleDelete = (id) => {
    if (window.confirm('ต้องการลบข้อมูลนี้หรือไม่?')) {
      setSchools(schools.filter(school => school.id !== id));
    }
  };

  // กรองข้อมูล
  const filteredSchools = schools.filter(school => {
    const matchesSearch = school.schoolName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.directorName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesProvince = provinceFilter === '' || school.province === provinceFilter;
    return matchesSearch && matchesProvince;
  });

  // ดึงรายการจังหวัดที่ไม่ซ้ำ
  // const provinces = [...new Set(schools.map(school => school.province))];
  const provinces = Array.from(new Set(schools.map(school => school.province)));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
      <div className="mx-auto max-w-7xl">
        <Navbar isBackArrow titleName="รายการโรงเรียนทั้งหมด" />
        {/* Header */}
        <Card className="mb-6 rounded-lg p-6 ">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <School className="size-8 text-blue-600" />
              <CardTitle>
                <h1 className="text-2xl font-bold text-gray-800">จัดการข้อมูลโรงเรียน</h1>
                <p className="text-lg text-gray-600">ระบบจัดการข้อมูลพื้นฐานโรงเรียน</p>
              </CardTitle>
            </div>
            <Button
              onClick={() => route.push('/information/new')}
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors duration-200 hover:bg-blue-700"
            >
              <Plus className="size-4" />
              เพิ่มโรงเรียนใหม่
            </Button>
          </div>
        </Card>

        {/* ค้นหาและกรอง */}
        <Card className="mb-6 rounded-lg p-6 ">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="ค้นหาชื่อโรงเรียน, อำเภอ, หรือชื่อผู้อำนวยการ..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                <select
                  value={provinceFilter}
                  onChange={(e) => setProvinceFilter(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">ทุกจังหวัด</option>
                  {provinces.map(province => (
                    <option key={province} value={province}>{province}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </Card>

        {/* ตาราง */}
        <div className="overflow-hidden rounded-lg bg-white shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">ลำดับ</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">ชื่อโรงเรียน</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">ที่ตั้ง</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">ผู้อำนวยการ</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">สังกัด</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">จัดการ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredSchools.length === 0 ? (
                  <NoResultsState title="ไม่มีรายการ" />
                ) : (
                  filteredSchools.map((school, index) => (
                    <tr key={school.id} className="transition-colors duration-150 hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">{index + 1}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <School className="size-4 text-blue-600" />
                          <span className="text-sm font-medium text-gray-900">{school.schoolName}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="size-4 text-green-600" />
                          <span className="text-sm text-gray-700">
                            {school.district}, {school.province}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <User className="size-4 text-purple-600" />
                          <span className="text-sm text-gray-700">{school.directorName}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-700">{school.departmentLevel}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex justify-center gap-2">
                          <button
                            onClick={() => openModal('view', school)}
                            className="rounded-lg p-2 text-blue-600 transition-colors duration-200 hover:bg-blue-100"
                            title="ดูรายละเอียด"
                          >
                            <Eye className="size-4" />
                          </button>
                          <button
                            onClick={() => openModal('edit', school)}
                            className="rounded-lg p-2 text-yellow-600 transition-colors duration-200 hover:bg-yellow-100"
                            title="แก้ไข"
                          >
                            <Edit2 className="size-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(school.id)}
                            className="rounded-lg p-2 text-red-600 transition-colors duration-200 hover:bg-red-100"
                            title="ลบ"
                          >
                            <Trash2 className="size-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-white shadow-xl">
            <div className="p-6">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-800">
                  {modalMode === 'create' && 'เพิ่มโรงเรียนใหม่'}
                  {modalMode === 'edit' && 'แก้ไขข้อมูลโรงเรียน'}
                  {modalMode === 'view' && 'รายละเอียดโรงเรียน'}
                </h2>
                <button
                  onClick={closeModal}
                  className="rounded-lg p-2 transition-colors duration-200 hover:bg-gray-100"
                >
                  <X className="size-5" />
                </button>
              </div>

              <div className="space-y-6">
                {/* ข้อมูลโรงเรียน */}
                <div>
                  <div className="mb-4 flex items-center gap-2">
                    <School className="size-5 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-800">ข้อมูลโรงเรียน</h3>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        ชื่อโรงเรียน <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="schoolName"
                        value={formData.schoolName}
                        onChange={handleInputChange}
                        disabled={modalMode === 'view'}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                        placeholder="ระบุชื่อโรงเรียน"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        สังกัดระดับกรม
                      </label>
                      <select
                        name="departmentLevel"
                        value={formData.departmentLevel}
                        onChange={handleInputChange}
                        disabled={modalMode === 'view'}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                      >
                        <option value="">เลือกสังกัด</option>
                        <option value="กรมการฝึกหัดครู">กรมการฝึกหัดครู</option>
                        <option value="กรมสามัญศึกษา">กรมสามัญศึกษา</option>
                        <option value="กรมอาชีวศึกษา">กรมอาชีวศึกษา</option>
                        <option value="กรมการศึกษานอกโรงเรียน">กรมการศึกษานอกโรงเรียน</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* ที่อยู่โรงเรียน */}
                <div>
                  <div className="mb-4 flex items-center gap-2">
                    <MapPin className="size-5 text-green-600" />
                    <h3 className="text-lg font-semibold text-gray-800">ที่ตั้งโรงเรียน</h3>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        ตำบล/แขวง <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="subdistrict"
                        value={formData.subdistrict}
                        onChange={handleInputChange}
                        disabled={modalMode === 'view'}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                        placeholder="ระบุตำบลหรือแขวง"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        อำเภอ/เขต <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="district"
                        value={formData.district}
                        onChange={handleInputChange}
                        disabled={modalMode === 'view'}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                        placeholder="ระบุอำเภอหรือเขต"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        จังหวัด <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="province"
                        value={formData.province}
                        onChange={handleInputChange}
                        disabled={modalMode === 'view'}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                        placeholder="ระบุจังหวัด"
                      />
                    </div>

                    <div className="md:col-span-2 lg:col-span-3">
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        สังกัดระดับจังหวัด/เขตพื้นที่
                      </label>
                      <input
                        type="text"
                        name="provinceArea"
                        value={formData.provinceArea}
                        onChange={handleInputChange}
                        disabled={modalMode === 'view'}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                        placeholder="ระบุสังกัดระดับจังหวัดหรือเขตพื้นที่"
                      />
                    </div>
                  </div>
                </div>

                {/* ข้อมูลบุคลากร */}
                <div>
                  <div className="mb-4 flex items-center gap-2">
                    <Users className="size-5 text-purple-600" />
                    <h3 className="text-lg font-semibold text-gray-800">ข้อมูลบุคลากร</h3>
                  </div>

                  <div className="space-y-4">
                    {/* ผู้อำนวยการ */}
                    <div className="grid grid-cols-1 gap-4 rounded-lg bg-gray-50 p-4 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                          <User className="mr-1 inline size-4" />
                          ชื่อ-สกุลผู้อำนวยการ <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="directorName"
                          value={formData.directorName}
                          onChange={handleInputChange}
                          disabled={modalMode === 'view'}
                          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                          placeholder="ระบุชื่อ-สกุลผู้อำนวยการ"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                          ตำแหน่งผู้อำนวยการ
                        </label>
                        <input
                          type="text"
                          name="directorPosition"
                          value={formData.directorPosition}
                          onChange={handleInputChange}
                          disabled={modalMode === 'view'}
                          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                          placeholder="เช่น ผู้อำนวยการโรงเรียน"
                        />
                      </div>
                    </div>

                    {/* เจ้าหน้าที่อื่นๆ */}
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                          <User className="mr-1 inline size-4" />
                          ชื่อ-สกุลนายทะเบียน
                        </label>
                        <input
                          type="text"
                          name="registrarName"
                          value={formData.registrarName}
                          onChange={handleInputChange}
                          disabled={modalMode === 'view'}
                          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                          placeholder="ระบุชื่อ-สกุลนายทะเบียน"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                          <BookOpen className="mr-1 inline size-4" />
                          ชื่อ-สกุลหัวหน้าวิชาการ
                        </label>
                        <input
                          type="text"
                          name="academicHeadName"
                          value={formData.academicHeadName}
                          onChange={handleInputChange}
                          disabled={modalMode === 'view'}
                          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                          placeholder="ระบุชื่อ-สกุลหัวหน้าวิชาการ"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                          <User className="mr-1 inline size-4" />
                          ชื่อ-สกุลครูประจำชั้น/ครูที่ปรึกษา
                        </label>
                        <input
                          type="text"
                          name="teacherName"
                          value={formData.teacherName}
                          onChange={handleInputChange}
                          disabled={modalMode === 'view'}
                          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                          placeholder="ระบุชื่อ-สกุลครูประจำชั้น"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ปุ่มควบคุม */}
              {modalMode !== 'view' && (
                <div className="mt-6 flex justify-end gap-3 border-t pt-6">
                  <button
                    onClick={closeModal}
                    className="rounded-lg bg-gray-500 px-4 py-2 text-white transition-colors duration-200 hover:bg-gray-600"
                  >
                    ยกเลิก
                  </button>
                  <button
                    onClick={modalMode === 'create' ? handleCreate : handleUpdate}
                    className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors duration-200 hover:bg-blue-700"
                  >
                    <Save className="size-4" />
                    {modalMode === 'create' ? 'เพิ่มข้อมูล' : 'บันทึกการแก้ไข'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
