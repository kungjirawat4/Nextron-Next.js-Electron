"use client"
import React, { useState } from 'react';
import { Save, User, School, MapPin, Users, Heart, Briefcase, Calendar, Flag, Book } from 'lucide-react';
import Navbar from '@/components/layout/main-layout/navbar';
import { showToast } from '@/hook/toast/showToast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';

export default function StudentInfoForm() {
  const [formData, setFormData] = useState({
    schoolCode: '',
    schoolName: '',
    nationalId: '',
    grade: '',
    room: '',
    studentId: '',
    gender: '',
    titlePrefix: '',
    firstName: '',
    lastName: '',
    birthDate: '',
    nationality: '',
    ethnicity: '',
    religion: '',
    parentsMaritalStatus: '',
    fatherTitle: '',
    fatherFirstName: '',
    fatherLastName: '',
    motherTitle: '',
    motherFirstName: '',
    motherLastName: '',
    guardianRelation: '',
    guardianTitle: '',
    guardianFirstName: '',
    guardianLastName: '',
    houseNumber: '',
    village: '',
    subdistrict: '',
    district: '',
    province: '',
    postalCode: '',
    fatherOccupation: '',
    motherOccupation: '',
    guardianOccupation: ''
  });

  const [activeTab, setActiveTab] = useState('student');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // จำลองการบันทึกข้อมูล
    showToast({
      type: 'success',
      description: `ข้อมูลของคุณได้รับการบันทึกแล้ว`,
      position: 'top-center',
    })
  };

  const handleReset = () => {
    setFormData({
      schoolCode: '',
      schoolName: '',
      nationalId: '',
      grade: '',
      room: '',
      studentId: '',
      gender: '',
      titlePrefix: '',
      firstName: '',
      lastName: '',
      birthDate: '',
      nationality: '',
      ethnicity: '',
      religion: '',
      parentsMaritalStatus: '',
      fatherTitle: '',
      fatherFirstName: '',
      fatherLastName: '',
      motherTitle: '',
      motherFirstName: '',
      motherLastName: '',
      guardianRelation: '',
      guardianTitle: '',
      guardianFirstName: '',
      guardianLastName: '',
      houseNumber: '',
      village: '',
      subdistrict: '',
      district: '',
      province: '',
      postalCode: '',
      fatherOccupation: '',
      motherOccupation: '',
      guardianOccupation: ''
    });
  };

  const tabs = [
    { id: 'student', label: 'ข้อมูลนักเรียน', icon: User },
    { id: 'parents', label: 'ข้อมูลบิดามารดา', icon: Heart },
    { id: 'guardian', label: 'ข้อมูลผู้ปกครอง', icon: Users },
    { id: 'address', label: 'ที่อยู่', icon: MapPin }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="mx-auto max-w-5xl">
        <Navbar isBackArrow titleName="รายการนักเรียนทั้งหมด" />
        {/* Header */}
        <Card className="mb-6 rounded-lg bg-white p-6 shadow-lg">
          <CardTitle className="mb-2 flex items-center gap-3">
            <User className="size-8 text-green-600" />
            <h1 className="text-2xl font-bold text-gray-800">ข้อมูลนักเรียน</h1>
          </CardTitle>
          <p className="text-gray-600">กรอกข้อมูลนักเรียนและครอบครัวให้ครบถ้วน</p>
        </Card>

        {/* Tabs */}
        <Card className="mb-6 rounded-lg">
          <div className="flex flex-wrap border-b">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${activeTab === tab.id
                    ? 'border-b-2 border-green-600 bg-green-50 text-green-600'
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                    }`}
                >
                  <IconComponent className="size-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </Card>

        <div className="space-y-6">
          {/* ข้อมูลนักเรียน */}
          {activeTab === 'student' && (
            <Card className="rounded-lg bg-white p-6 shadow-lg">
              <CardTitle className="mb-6 flex items-center gap-2">
                <User className="size-5 text-green-600" />
                <h2 className="text-lg font-semibold text-gray-800">ข้อมูลนักเรียน</h2>
              </CardTitle>

              {/* ข้อมูลโรงเรียน */}
              <div className="mb-6 grid grid-cols-1 gap-4 rounded-lg bg-blue-50 p-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    <School className="mr-1 inline size-4" />
                    รหัสโรงเรียน <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="schoolCode"
                    value={formData.schoolCode}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="ระบุรหัสโรงเรียน"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    ชื่อโรงเรียน <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="ระบุชื่อโรงเรียน"
                    required
                  />
                </div>
              </div>

              {/* ข้อมูลพื้นฐานนักเรียน */}
              <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    เลขประจำตัวประชาชน <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="nationalId"
                    value={formData.nationalId}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="1-3456-78901-23-4"
                    // maxLength="17"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    รหัสนักเรียน <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="ระบุรหัสนักเรียน"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    เพศ <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  >
                    <option value="">เลือกเพศ</option>
                    <option value="ชาย">ชาย</option>
                    <option value="หญิง">หญิง</option>
                  </select>
                </div>
              </div>

              {/* ชั้นและห้อง */}
              <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    <Book className="mr-1 inline size-4" />
                    ชั้น <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  >
                    <option value="">เลือกชั้น</option>
                    <option value="ป.1">ป.1</option>
                    <option value="ป.2">ป.2</option>
                    <option value="ป.3">ป.3</option>
                    <option value="ป.4">ป.4</option>
                    <option value="ป.5">ป.5</option>
                    <option value="ป.6">ป.6</option>
                    <option value="ม.1">ม.1</option>
                    <option value="ม.2">ม.2</option>
                    <option value="ม.3">ม.3</option>
                    <option value="ม.4">ม.4</option>
                    <option value="ม.5">ม.5</option>
                    <option value="ม.6">ม.6</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    ห้อง <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="room"
                    value={formData.room}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="เช่น 1, 2, 3"
                    required
                  />
                </div>
              </div>

              {/* ชื่อ-นามสกุล */}
              <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    คำนำหน้าชื่อ <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="titlePrefix"
                    value={formData.titlePrefix}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  >
                    <option value="">เลือกคำนำหน้า</option>
                    <option value="เด็กชาย">เด็กชาย</option>
                    <option value="เด็กหญิง">เด็กหญิง</option>
                    <option value="นาย">นาย</option>
                    <option value="นางสาว">นางสาว</option>
                    <option value="นาง">นาง</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    ชื่อ <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="ระบุชื่อ"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    นามสกุล <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="ระบุนามสกุล"
                    required
                  />
                </div>
              </div>

              {/* ข้อมูลส่วนตัว */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    <Calendar className="mr-1 inline size-4" />
                    วันเกิด <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    <Flag className="mr-1 inline size-4" />
                    สัญชาติ
                  </label>
                  <input
                    type="text"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="เช่น ไทย"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    เชื้อชาติ
                  </label>
                  <input
                    type="text"
                    name="ethnicity"
                    value={formData.ethnicity}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="เช่น ไทย"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    ศาสนา
                  </label>
                  <select
                    name="religion"
                    value={formData.religion}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">เลือกศาสนา</option>
                    <option value="พุทธ">พุทธ</option>
                    <option value="อิสลาม">อิสลาม</option>
                    <option value="คริสต์">คริสต์</option>
                    <option value="ฮินดู">ฮินดู</option>
                    <option value="อื่นๆ">อื่นๆ</option>
                  </select>
                </div>
              </div>
            </Card>
          )}

          {/* ข้อมูลบิดามารดา */}
          {activeTab === 'parents' && (
            <Card className="rounded-lg p-6 ">
              <CardTitle className="mb-6 flex items-center gap-2">
                <Heart className="size-5 text-pink-600" />
                <h2 className="text-lg font-semibold text-gray-800">ข้อมูลบิดามารดา</h2>
              </CardTitle>

              {/* สถานภาพสมรส */}
              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  สถานภาพสมรสของบิดามารดา
                </label>
                <select
                  name="parentsMaritalStatus"
                  value={formData.parentsMaritalStatus}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500 md:w-1/3"
                >
                  <option value="">เลือกสถานภาพ</option>
                  <option value="สมรส">สมรส</option>
                  <option value="หย่าร้าง">หย่าร้าง</option>
                  <option value="แยกกันอยู่">แยกกันอยู่</option>
                  <option value="เสียชีวิต">เสียชีวิต</option>
                </select>
              </div>

              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {/* ข้อมูลบิดา */}
                <div className="rounded-lg bg-blue-50 p-4">
                  <h3 className="mb-4 text-lg font-medium text-gray-800">ข้อมูลบิดา</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                          คำนำหน้าชื่อ
                        </label>
                        <select
                          name="fatherTitle"
                          value={formData.fatherTitle}
                          onChange={handleInputChange}
                          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                          <option value="">เลือก</option>
                          <option value="นาย">นาย</option>
                          <option value="พ.ต.">พ.ต.</option>
                          <option value="ร.ต.">ร.ต.</option>
                          <option value="จ.ส.อ.">จ.ส.อ.</option>
                        </select>
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                          ชื่อบิดา
                        </label>
                        <input
                          type="text"
                          name="fatherFirstName"
                          value={formData.fatherFirstName}
                          onChange={handleInputChange}
                          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                          placeholder="ระบุชื่อบิดา"
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                          นามสกุลบิดา
                        </label>
                        <input
                          type="text"
                          name="fatherLastName"
                          value={formData.fatherLastName}
                          onChange={handleInputChange}
                          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                          placeholder="ระบุนามสกุลบิดา"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        <Briefcase className="mr-1 inline size-4" />
                        อาชีพบิดา
                      </label>
                      <input
                        type="text"
                        name="fatherOccupation"
                        value={formData.fatherOccupation}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="ระบุอาชีพบิดา"
                      />
                    </div>
                  </div>
                </div>

                {/* ข้อมูลมารดา */}
                <div className="rounded-lg bg-pink-50 p-4">
                  <h3 className="mb-4 text-lg font-medium text-gray-800">ข้อมูลมารดา</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                          คำนำหน้าชื่อ
                        </label>
                        <select
                          name="motherTitle"
                          value={formData.motherTitle}
                          onChange={handleInputChange}
                          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                          <option value="">เลือก</option>
                          <option value="นาง">นาง</option>
                          <option value="นางสาว">นางสาว</option>
                        </select>
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                          ชื่อมารดา
                        </label>
                        <input
                          type="text"
                          name="motherFirstName"
                          value={formData.motherFirstName}
                          onChange={handleInputChange}
                          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                          placeholder="ระบุชื่อมารดา"
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                          นามสกุลมารดา
                        </label>
                        <input
                          type="text"
                          name="motherLastName"
                          value={formData.motherLastName}
                          onChange={handleInputChange}
                          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                          placeholder="ระบุนามสกุลมารดา"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        <Briefcase className="mr-1 inline size-4" />
                        อาชีพมารดา
                      </label>
                      <input
                        type="text"
                        name="motherOccupation"
                        value={formData.motherOccupation}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="ระบุอาชีพมารดา"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* ข้อมูลผู้ปกครอง */}
          {activeTab === 'guardian' && (
            <Card className="rounded-lg bg-white p-6 shadow-lg">
              <CardTitle className="mb-6 flex items-center gap-2">
                <Users className="size-5 text-purple-600" />
                <h2 className="text-lg font-semibold text-gray-800">ข้อมูลผู้ปกครอง</h2>
              </CardTitle>

              <CardContent className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    ความเกี่ยวข้องของผู้ปกครองกับนักเรียน
                  </label>
                  <select
                    name="guardianRelation"
                    value={formData.guardianRelation}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500 md:w-1/3"
                  >
                    <option value="">เลือกความสัมพันธ์</option>
                    <option value="บิดา">บิดา</option>
                    <option value="มารดา">มารดา</option>
                    <option value="ปู่">ปู่</option>
                    <option value="ย่า">ย่า</option>
                    <option value="ตา">ตา</option>
                    <option value="ยาย">ยาย</option>
                    <option value="ลุง">ลุง</option>
                    <option value="ป้า">ป้า</option>
                    <option value="น้า">น้า</option>
                    <option value="อา">อา</option>
                    <option value="พี่">พี่</option>
                    <option value="น้อง">น้อง</option>
                    <option value="อื่นๆ">อื่นๆ</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      คำนำหน้าชื่อผู้ปกครอง
                    </label>
                    <select
                      name="guardianTitle"
                      value={formData.guardianTitle}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">เลือกคำนำหน้า</option>
                      <option value="นาย">นาย</option>
                      <option value="นาง">นาง</option>
                      <option value="นางสาว">นางสาว</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      ชื่อผู้ปกครอง
                    </label>
                    <input
                      type="text"
                      name="guardianFirstName"
                      value={formData.guardianFirstName}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="ระบุชื่อผู้ปกครอง"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      นามสกุลผู้ปกครอง
                    </label>
                    <input
                      type="text"
                      name="guardianLastName"
                      value={formData.guardianLastName}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="ระบุนามสกุลผู้ปกครอง"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    <Briefcase className="mr-1 inline size-4" />
                    อาชีพผู้ปกครอง
                  </label>
                  <input
                    type="text"
                    name="guardianOccupation"
                    value={formData.guardianOccupation}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500 md:w-1/2"
                    placeholder="ระบุอาชีพผู้ปกครอง"
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {/* ที่อยู่ */}
          {activeTab === 'address' && (
            <Card className="rounded-lg bg-white p-6 shadow-lg">
              <CardTitle className="mb-6 flex items-center gap-2">
                <MapPin className="size-5 text-blue-600" />
                <h2 className="text-lg font-semibold text-gray-800">ที่อยู่</h2>
              </CardTitle>

              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      เลขที่บ้าน <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="houseNumber"
                      value={formData.houseNumber}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="เช่น 123, 123/45"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      หมู่
                    </label>
                    <input
                      type="text"
                      name="village"
                      value={formData.village}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="เช่น หมู่ 1, หมู่ 2"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      รหัสไปรษณีย์
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="เช่น 10400"
                    // maxLength="5"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      ตำบล <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="subdistrict"
                      value={formData.subdistrict}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="ระบุตำบล"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      อำเภอ <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="district"
                      value={formData.district}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="ระบุอำเภอ"
                      required
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
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="ระบุจังหวัด"
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* ปุ่มควบคุม */}
          <Card className="rounded-lg p-6 ">
            <div className="flex flex-col justify-between gap-3 sm:flex-row">
              <div className="flex gap-3">
                {activeTab !== 'student' && (
                  <Button
                    type="button"
                    variant='ghost'
                    onClick={() => {
                      const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
                      if (currentIndex > 0) {
                        setActiveTab(tabs[currentIndex - 1].id);
                      }
                    }}
                  // className="rounded-lg bg-gray-500 px-6 py-2 text-white transition-colors duration-200 hover:bg-gray-600"
                  >
                    ← ย้อนกลับ
                  </Button>
                )}
                {activeTab !== 'address' && (
                  <Button
                    type="button"
                    variant='ghost'
                    onClick={() => {
                      const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
                      if (currentIndex < tabs.length - 1) {
                        setActiveTab(tabs[currentIndex + 1].id);
                      }
                    }}
                  // className="rounded-lg bg-green-600 px-6 py-2 text-white transition-colors duration-200 hover:bg-green-700"
                  >
                    ถัดไป →
                  </Button>
                )}
              </div>

              <div className="flex gap-3">
                {activeTab !== 'student' &&activeTab !== 'parents' &&activeTab !== 'guardian' && (
                  <>
                    <Button
                      type="button"
                      onClick={handleReset}
                      className="rounded-lg bg-red-500 px-6 py-2 text-white transition-colors duration-200 hover:bg-red-600"
                    >
                      ล้างข้อมูล
                    </Button>
                    <Button
                      type="button"
                      onClick={handleSubmit}
                      className="flex items-center gap-2 rounded-lg bg-green-600 px-6 py-2 text-white transition-colors duration-200 hover:bg-green-700"
                    >
                      <Save className="size-4" />
                      บันทึกข้อมูล
                    </Button>
                  </>

                )}

              </div>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>ระบบข้อมูลนักเรียน | สำหรับใช้งานภายในโรงเรียน</p>
        </div>
      </div>
    </div>
  );
}
