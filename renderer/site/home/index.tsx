'use client'
import React from 'react';
import {
  School,
  Users,
  BookOpen,
  Activity,
  Trophy,
  User,
  Building,
  // FileText,
  Settings,
  ChevronRight,
  GraduationCap,
  Heart
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { showToast } from '@/hook/toast/showToast';

export default function MainDashboard() {
  const route = useRouter();
  // ข้อมูลหมวดวิชาและรายวิชา
  const subjects = {
    // thai: {
    //   title: 'ภาษาไทย',
    //   color: 'bg-cyan-500',
    //   hoverColor: 'hover:bg-cyan-600',
    //   icon: FileText,
    //   items: [
    //     'คำ', 'ข้อมูลคำไทย', 'ข้อมูลคำเขียน', 'ข้อมูลเสียงเขียน'
    //   ]
    // },
    grade5: {
      title: 'ปพ.5',
      color: 'bg-teal-500',
      hoverColor: 'hover:bg-teal-600',
      icon: GraduationCap,
      items: [
        { label: 'กำหนดรายวิชา', path: '#' },
        { label: 'ปก ปพ.5 รายชั้น', path: '#' },
        { label: 'ปก ปพ.5 รายวิชา', path: '#' }
      ]
    },
    student: {
      title: 'นักเรียน',
      color: 'bg-emerald-500',
      hoverColor: 'hover:bg-emerald-600',
      icon: Users,
      items: [
        { label: 'ข้อมูลนักเรียน', path: '/informationstudent' },
        { label: 'ปฏิทิน', path: '#' },
        { label: 'เวลาเรียน', path: '#' }
      ]
    },
    activities: {
      title: 'โภชนาการ',
      color: 'bg-green-400',
      hoverColor: 'hover:bg-green-500',
      icon: Activity,
      items: [
        { label: 'น้ำหนัก-ส่วนสูง', path: '#' },
        { label: 'โภชนาการ 1-1', path: '#' },
        { label: 'โภชนาการ 1-2', path: '#' },
        { label: 'โภชนาการ 2-1', path: '#' },
        { label: 'โภชนาการ 2-1', path: '#' }
      ]
    },
    knowledge: {
      title: 'ความซุก',
      color: 'bg-lime-400',
      hoverColor: 'hover:bg-lime-500',
      icon: BookOpen,
      items: [
        { label: 'ความซุก 1-1', path: '#' },
        { label: 'ความซุก 1-2', path: '#' },
        { label: 'ความซุก 2-1', path: '#' },
        { label: 'ความซุก 2-2', path: '#' },
        { label: 'สรุปโภชนาการ 1-1', path: '#' },
        { label: 'สรุปโภชนาการ 1-2', path: '#' },
        { label: 'สรุปโภชนาการ 2-1', path: '#' },
        { label: 'สรุปโภชนาการ 2-2', path: '#' },
      ]
    },
    skills1: {
      title: 'ผลสัมฤทธิ์',
      color: 'bg-yellow-400',
      hoverColor: 'hover:bg-yellow-500',
      icon: Trophy,
      items: [
        { label: 'รายวิชา 1', path: '#' },
        { label: 'รายวิชา 2', path: '#' },
        { label: 'รายวิชา 3', path: '#' },
        { label: 'รายวิชา 4', path: '#' },
        { label: 'รายวิชา 5', path: '#' },
        { label: 'รายวิชา 6', path: '#' },
        { label: 'รายวิชา 7', path: '#' },

      ]
    },
    skills2: {
      title: 'ผลสัมฤทธิ์',
      color: 'bg-yellow-500',
      hoverColor: 'hover:bg-yellow-600',
      icon: Trophy,
      items: [
        { label: 'รายวิชา 8', path: '#' },
        { label: 'รายวิชา 9', path: '#' },
        { label: 'รายวิชา 10', path: '#' },
        { label: 'รายวิชา 11', path: '#' },
        { label: 'รายวิชา 12', path: '#' },
        { label: 'รายวิชา 13', path: '#' },
        { label: 'รายวิชา 14', path: '#' },

      ]

    },
    skills3: {
      title: 'ผลสัมฤทธิ์',
      color: 'bg-amber-500',
      hoverColor: 'hover:bg-amber-600',
      icon: Trophy,
      items: [
        { label: 'รายวิชา 15', path: '#' },
        { label: 'รายวิชา 16', path: '#' },
        { label: 'รายวิชา 17', path: '#' },
        { label: 'รายวิชา 18', path: '#' },
        { label: 'รายวิชา 19', path: '#' },
        { label: 'รายวิชา 20', path: '#' },


      ]
    },
    character: {
      title: 'คุณลักษณะ',
      color: 'bg-orange-400',
      hoverColor: 'hover:bg-orange-500',
      icon: Heart,
      items: [
        { label: 'คุณลักษณะอันพึงประสงค์', path: '#' },
        { label: 'สมรรถนะ', path: '#' },
        { label: 'กิจกรรมพัฒนาผู้เรียน', path: '#' },
        { label: 'เอกสารแนบท้าย', path: '#' },
        { label: 'คำชี้แจง ป.พ.5', path: '#' },
      ]

    },
    grade6: {
      title: 'ชั้น ป.พ.6',
      color: 'bg-red-400',
      hoverColor: 'hover:bg-red-500',
      icon: GraduationCap,
      items: [
        { label: 'ป.พ.6', path: '#' },
        { label: 'เล่ม ป.พ.6', path: '#' },
        { label: 'ใบรับรอง', path: '#' },
        { label: 'คะแนนรายชั้น', path: '#' },
        { label: 'เกรดรายชั้น', path: '#' },
        { label: 'เกรดร้อยละ', path: '#' }
      ]

    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-green-50 to-yellow-50 p-4">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-6 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <School className="size-12 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-800">
              โปรแกรมงานทะเบียน
            </h1>
          </div>
          <p className="text-lg text-gray-600">
            โปรแกรมงานทะเบียนและวิชาการโรงเรียน(ปพ.5-6)
          </p>
        </div>

        {/* Illustration Section */}
        {/* <div className="relative mb-12">
          <div className="mb-8 flex items-center justify-center">
            <div className="relative">
         
              <div className="absolute -left-4 -top-4 size-8 rounded-full bg-yellow-300 opacity-70"></div>
              <div className="absolute -right-6 -top-2 size-6 rounded-full bg-pink-300 opacity-70"></div>
              <div className="absolute -bottom-3 -left-2 size-5 rounded-full bg-blue-300 opacity-70"></div>

          
              <div className="flex h-48 w-80 items-center justify-center rounded-3xl bg-gradient-to-r from-green-200 to-blue-200 shadow-lg">
                <div className="text-center">
                  <Users className="mx-auto mb-2 size-16 text-green-600" />
                  <p className="font-medium text-gray-700">นักเรียนและครู</p>
                  <p className="text-sm text-gray-500">เรียนรู้ไปด้วยกัน</p>
                </div>
              </div>

            
              <div className="absolute right-8 top-4 flex size-12 items-center justify-center rounded-full bg-white shadow-md">
                <BookOpen className="size-6 text-blue-500" />
              </div>
              <div className="absolute bottom-6 left-8 flex size-10 items-center justify-center rounded-full bg-white shadow-md">
                <GraduationCap className="size-5 text-green-500" />
              </div>
            </div>
          </div>
        </div> */}

        {/* Statistics Overview */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-4">
          <Card className="rounded-lg bg-white p-6 text-center shadow-lg">
            <Users className="mx-auto mb-2 size-8 text-blue-600" />
            <div className="text-2xl font-bold text-gray-800">1,247</div>
            <div className="text-gray-600">นักเรียนทั้งหมด</div>
          </Card>
          <Card className="rounded-lg bg-white p-6 text-center shadow-lg">
            <User className="mx-auto mb-2 size-8 text-green-600" />
            <div className="text-2xl font-bold text-gray-800">85</div>
            <div className="text-gray-600">ครูและบุคลากร</div>
          </Card>
          <Card className="rounded-lg bg-white p-6 text-center shadow-lg">
            <BookOpen className="mx-auto mb-2 size-8 text-purple-600" />
            <div className="text-2xl font-bold text-gray-800">42</div>
            <div className="text-gray-600">รายวิชา</div>
          </Card>
          <Card className="rounded-lg bg-white p-6 text-center shadow-lg">
            <Building className="mx-auto mb-2 size-8 text-orange-600" />
            <div className="text-2xl font-bold text-gray-800">24</div>
            <div className="text-gray-600">ห้องเรียน</div>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mt-12 rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
            การจัดการระบบ
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <button
              onClick={() => route.push('/information')}
              className="flex items-center gap-3 rounded-lg bg-blue-50 p-4 transition-colors duration-200 hover:bg-blue-100"
            >
              <Building className="size-6 text-blue-600" />
              <div className="text-left">
                <div className="font-semibold text-gray-800">ข้อมูลโรงเรียน</div>
                <div className="text-sm text-gray-600">จัดการข้อมูลพื้นฐาน</div>
              </div>
            </button>
            <button
              onClick={() => route.push('/informationstudent')}
              className="flex items-center gap-3 rounded-lg bg-green-50 p-4 transition-colors duration-200 hover:bg-green-100"
            >
              <Users className="size-6 text-green-600" />
              <div className="text-left">
                <div className="font-semibold text-gray-800">ข้อมูลนักเรียน</div>
                <div className="text-sm text-gray-600">จัดการข้อมูลนักเรียน</div>
              </div>
            </button>
            <button
              onClick={() => showToast({
                type: 'warning',
                description: `ยังไม่ได้สร้างข้อมูลสำหรับหน้านี้`,
                position: 'top-center',
              })}

              className="flex items-center gap-3 rounded-lg bg-purple-50 p-4 transition-colors duration-200 hover:bg-purple-100"
            >
              <Settings className="size-6 text-purple-600" />
              <div className="text-left">
                <div className="font-semibold text-gray-800">ตั้งค่าระบบ</div>
                <div className="text-sm text-gray-600">กำหนดค่าต่างๆ</div>
              </div>
            </button>
          </div>
        </Card>

        {/* Subject Details Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(subjects).map(([key, subject]) => (
            <div key={key} className="overflow-hidden rounded-lg bg-white shadow-lg">
              <div className={`${subject.color} p-4`}>
                <div className="flex items-center gap-3 text-white">
                  <subject.icon className="size-6" />
                  <h3 className="text-xl font-bold">{subject.title}</h3>
                </div>
              </div>
              <div className="p-4">
                <div className="space-y-2">
                  {subject.items.map((item, index) => (
                    <button
                      key={index}
                      // onClick={() => route.push(item.path)}
                      onClick={() => {
                        if (item.path === '#' || !item.path) {
                          // alert(`หน้าสำหรับ "${item.label}" ยังไม่ได้สร้าง`);
                          showToast({
                            type: 'warning',
                            description: `ยังไม่ได้สร้างข้อมูลสำหรับหน้านี้`,
                            position: 'top-center',
                          })
                        } else {
                          route.push(item.path);
                        }
                      }}

                      className="group flex w-full items-center justify-between rounded-lg p-3 text-left transition-colors duration-200 hover:bg-gray-50"
                    >
                      <span className="text-gray-700 group-hover:text-gray-900">
                        {item.label}
                      </span>
                      <ChevronRight className="size-4 text-gray-400 group-hover:translate-x-1 group-hover:text-gray-600" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Footer */}
        <div className="mt-12 text-center text-gray-600">
          <p>© 2025 ระบบจัดการเรียนการสอน | พัฒนาเพื่อการศึกษา</p>
        </div>
      </div>
    </div>
  );
}
