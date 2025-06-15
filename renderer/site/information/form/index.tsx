"use client"
import React, { useState } from 'react';
import { Save, School, MapPin, User, Users, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { showToast } from '@/hook/toast/showToast';
// import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';
import Navbar from '@/components/layout/main-layout/navbar';

export default function SchoolInfoForm() {
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

  return (
    <div className="min-h-screen p-4">
      <div className="mx-auto max-w-4xl">
        <Navbar isBackArrow titleName="เพิ่มข้อมูลพื้นฐานโรงเรียน" />
        {/* Header */}
        <Card className="mb-6 rounded-lg bg-white p-6 shadow-lg">
          <CardTitle className="mb-2 flex items-center gap-3">
            <School className="size-8 text-blue-600" />
            <div className="text-2xl font-bold text-gray-800">ข้อมูลพื้นฐานโรงเรียน</div>
          </CardTitle>
          <p className="text-gray-600">กรอกข้อมูลพื้นฐานของโรงเรียนและบุคลากรที่เกี่ยวข้อง</p>
        </Card>

        <div className="space-y-6">
          {/* ข้อมูลโรงเรียน */}
          <Card className="rounded-lg bg-white p-6 shadow-lg">
            <CardTitle className="mb-4 flex items-center gap-2">
              <School className="size-5 text-blue-600" />
              <h2 className="text-lg font-semibold text-gray-800">ข้อมูลโรงเรียน</h2>
            </CardTitle>

            <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* <FormField
                control={form.control}
                name="userAccount.employeeid"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      รหัสพนักงาน
                    </FormLabel>
                    <FormControl>
                      <Input
                        maxLength={13}
                        placeholder="รหัสพนักงาน"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  ชื่อโรงเรียน <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="ระบุชื่อโรงเรียน"
                  required
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
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">เลือกสังกัด</option>
                  <option value="กรมการฝึกหัดครู">กรมการฝึกหัดครู</option>
                  <option value="กรมสามัญศึกษา">กรมสามัญศึกษา</option>
                  <option value="กรมอาชีวศึกษา">กรมอาชีวศึกษา</option>
                  <option value="กรมการศึกษานอกโรงเรียน">กรมการศึกษานอกโรงเรียน</option>
                </select>
              </div>
            </CardContent>
          </Card>

          {/* ที่อยู่โรงเรียน */}
          <Card className="rounded-lg bg-white p-6 shadow-lg">
            <CardTitle className="mb-4 flex items-center gap-2">
              <MapPin className="size-5 text-green-600" />
              <h2 className="text-lg font-semibold text-gray-800">ที่ตั้งโรงเรียน</h2>
            </CardTitle>

            <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  ตำบล/แขวง <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="subdistrict"
                  value={formData.subdistrict}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="ระบุตำบลหรือแขวง"
                  required
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
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="ระบุอำเภอหรือเขต"
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
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="ระบุจังหวัด"
                  required
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
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="ระบุสังกัดระดับจังหวัดหรือเขตพื้นที่"
                />
              </div>
            </CardContent>
          </Card>

          {/* ข้อมูลบุคลากร */}
          <Card className="rounded-lg bg-white p-6 shadow-lg">
            <CardTitle className="mb-4 flex items-center gap-2">
              <Users className="size-5 text-purple-600" />
              <h2 className="text-lg font-semibold text-gray-800">ข้อมูลบุคลากร</h2>
            </CardTitle>

            <div className="space-y-4">
              {/* ผู้อำนวยการ */}
              <CardContent className="grid grid-cols-1 gap-4 rounded-lg bg-gray-50 p-4 md:grid-cols-2">
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
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="ระบุชื่อ-สกุลผู้อำนวยการ"
                    required
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
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="เช่น ผู้อำนวยการโรงเรียน"
                  />
                </div>
              </CardContent>

              {/* เจ้าหน้าที่อื่นๆ */}
              <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="ระบุชื่อ-สกุลครูประจำชั้น"
                  />
                </div>
              </CardContent>
            </div>
          </Card>

          {/* ปุ่มควบคุม */}
          <div>
            <div className="flex flex-col justify-end gap-3 sm:flex-row">
              <Button
                type="button"
                onClick={handleReset}
                className="rounded-lg bg-gray-500 px-6 py-2 text-white transition-colors duration-200 hover:bg-gray-600"
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
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>ระบบข้อมูลพื้นฐานโรงเรียน | สำหรับใช้งานภายในโรงเรียน</p>
        </div>
      </div>
    </div>
  );
}
