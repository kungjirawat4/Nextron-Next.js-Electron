// import React from 'react'

// export default function Test() {
//   return (
//     <div>test</div>
//   )
// }

import React from 'react';

export default function StudentDevelopmentRecord() {
  return (
    <div className="font-thai mx-auto min-h-[297mm] max-w-[210mm] bg-white p-8 text-sm">
      {/* Header */}
      <div className="mb-6 text-center">
        <h1 className="mb-2 text-lg font-bold">สมุดบันทึกการพัฒนาคุณภาพผู้เรียน (ปพ.5)</h1>
        <h2 className="mb-1 text-base font-semibold">โรงเรียนวัดทุ่งเอื้อง (อุทิศวิทยาคาร)</h2>
        <p className="text-sm">กรอกลงชื่อระดับจังหวัด หรือเขตพื้นที่การศึกษา</p>
      </div>

      {/* Student Info Section */}
      <div className="mb-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span>ที่</span>
            <div className="h-6 w-20 border-b border-dotted border-black"></div>
            <span>ประจำปีการศึกษา พ.ศ.</span>
            <div className="h-6 w-16 border-b border-dotted border-black"></div>
            <span>ปีการศึกษา</span>
            <div className="h-6 w-16 border-b border-dotted border-black"></div>
            <span>วันที่</span>
            <div className="h-6 w-12 border-b border-dotted border-black"></div>
            <span>เดือน</span>
            <div className="h-6 w-16 border-b border-dotted border-black"></div>
            <span>พ.ศ.</span>
            <div className="h-6 w-16 border-b border-dotted border-black"></div>
          </div>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <span>ชื่อผู้สมัคร</span>
            <div className="h-6 flex-1 border-b border-dotted border-black"></div>
            <span>ภาษาไทย</span>
          </div>
          <div className="flex items-center gap-2">
            <span>นางสาวไทย สุขมาลีย์</span>
          </div>
        </div>

        <div className="mb-4 grid grid-cols-3 gap-4">
          <div className="flex items-center gap-2">
            <span>ชาวต่างชาติ/ชาวต่างชาติ สุขมาลีย์</span>
            <div className="h-6 flex-1 border-b border-dotted border-black"></div>
            <span>ครูประจำชั้น</span>
          </div>
          <div className="flex items-center gap-2">
            <span>ครูที่ปรึกษา/ครูประจำชั้น</span>
          </div>
          <div className="flex items-center gap-2">
            <span>ครูที่ปรึกษา/ครูประจำชั้น</span>
          </div>
        </div>

        {/* Student count section */}
        <div className="mb-4 grid grid-cols-6 gap-2 text-center">
          <div className="flex items-center gap-1">
            <span>นักเรียนชั้นปีการศึกษา</span>
            <div className="flex size-8 items-center justify-center border border-black font-bold">0</div>
            <span>คน</span>
          </div>
          <div className="flex items-center gap-1">
            <span>หญิง</span>
            <div className="flex size-8 items-center justify-center border border-black font-bold">0</div>
            <span>คน</span>
          </div>
          <div className="flex items-center gap-1">
            <span>รวม</span>
            <div className="flex size-8 items-center justify-center border border-black font-bold">0</div>
            <span>คน</span>
          </div>
        </div>

        <div className="mb-4 grid grid-cols-6 gap-2 text-center">
          <div className="flex items-center gap-1">
            <span>ออกระหว่างปีการศึกษา</span>
            <div className="flex size-8 items-center justify-center border border-black font-bold">0</div>
            <span>คน</span>
          </div>
          <div className="flex items-center gap-1">
            <span>หญิง</span>
            <div className="flex size-8 items-center justify-center border border-black font-bold">0</div>
            <span>คน</span>
          </div>
          <div className="flex items-center gap-1">
            <span>รวม</span>
            <div className="flex size-8 items-center justify-center border border-black font-bold">0</div>
            <span>คน</span>
          </div>
        </div>

        <div className="mb-4 grid grid-cols-6 gap-2 text-center">
          <div className="flex items-center gap-1">
            <span>เข้าระหว่างปีการศึกษา</span>
            <div className="flex size-8 items-center justify-center border border-black font-bold">0</div>
            <span>คน</span>
          </div>
          <div className="flex items-center gap-1">
            <span>หญิง</span>
            <div className="flex size-8 items-center justify-center border border-black font-bold">0</div>
            <span>คน</span>
          </div>
          <div className="flex items-center gap-1">
            <span>รวม</span>
            <div className="flex size-8 items-center justify-center border border-black font-bold">0</div>
            <span>คน</span>
          </div>
        </div>

        <div className="mb-6 grid grid-cols-6 gap-2 text-center">
          <div className="flex items-center gap-1">
            <span>รวมสิ้นปีการศึกษา</span>
            <div className="flex size-8 items-center justify-center border border-black font-bold">0</div>
            <span>คน</span>
          </div>
          <div className="flex items-center gap-1">
            <span>หญิง</span>
            <div className="flex size-8 items-center justify-center border border-black font-bold">0</div>
            <span>คน</span>
          </div>
          <div className="flex items-center gap-1">
            <span>รวม</span>
            <div className="flex size-8 items-center justify-center border border-black font-bold">0</div>
            <span>คน</span>
          </div>
        </div>
      </div>

      {/* Academic Performance Table */}
      <div className="mb-6">
        <h3 className="mb-4 text-center font-bold">สรุปผลสัมฤทธิ์ทางการเรียนรู้</h3>

        <table className="w-full border-collapse border border-black text-xs">
          <thead>
            <tr>
              <th rowSpan={2} className="w-20 border border-black p-2">ระดับ</th>
              <th rowSpan={2} className="w-24 border border-black p-2">จำนวนนักเรียน</th>
              <th colSpan={9} className="border border-black p-2">ผล</th>
            </tr>
            <tr>
              <th className="w-10 border border-black p-1">5</th>
              <th className="w-10 border border-black p-1">0</th>
              <th className="w-10 border border-black p-1">1</th>
              <th className="w-10 border border-black p-1">1.5</th>
              <th className="w-10 border border-black p-1">2</th>
              <th className="w-10 border border-black p-1">2.5</th>
              <th className="w-10 border border-black p-1">3</th>
              <th className="w-10 border border-black p-1">3.5</th>
              <th className="w-10 border border-black p-1">4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black p-2 text-center">จำนวนนักเรียน</td>
              <td className="border border-black p-2 text-center">-</td>
              <td className="border border-black p-2 text-center">-</td>
              <td className="border border-black p-2 text-center">-</td>
              <td className="border border-black p-2 text-center">-</td>
              <td className="border border-black p-2 text-center">-</td>
              <td className="border border-black p-2 text-center">-</td>
              <td className="border border-black p-2 text-center">-</td>
              <td className="border border-black p-2 text-center">-</td>
              <td className="border border-black p-2 text-center">-</td>
            </tr>
            <tr>
              <td rowSpan={2} className="border border-black p-2 text-center">สรุปการประเมิน</td>
              <td className="border border-black p-2 text-xs">
                <div>สมเด็กมีคะแนนกิจกรรมประเมิน</div>
                <div>ระดับเป็นเลิศ 4 (ดีเยี่ยม)</div>
                <div>อันดับที่หนึ่ง 3 (ดีมาก) จำนวน</div>
                <div>6 (ดีพอใช้) จำนวน</div>
              </td>
              <td className="border border-black p-2 text-center">-</td>
              <td className="border border-black p-2 text-center">-</td>
              <td className="border border-black p-2 text-center">-</td>
              <td className="border border-black p-2 text-center">-</td>
              <td className="border border-black p-2 text-center">-</td>
              <td className="border border-black p-2 text-center">-</td>
              <td className="border border-black p-2 text-center">-</td>
              <td className="border border-black p-2 text-center">-</td>
            </tr>
            <tr>
              <td className="border border-black p-2 text-center">จำนวนนักเรียน</td>
              <td className="border border-black p-2 text-center">-</td>
              <td className="border border-black p-2 text-center">-</td>
              <td className="border border-black p-2 text-center">-</td>
              <td className="border border-black p-2 text-center">-</td>
              <td className="border border-black p-2 text-center">-</td>
              <td className="border border-black p-2 text-center">-</td>
              <td className="border border-black p-2 text-center">-</td>
              <td className="border border-black p-2 text-center">-</td>
            </tr>
            <tr>
              <td rowSpan={2} className="border border-black p-2 text-center">สรุปการประเมิน</td>
              <td className="border border-black p-2 text-xs">
                <div>สมบูรณ์จำนวนกิจกรรมประเมิน</div>
                <div>พื้นฐานรูปแบบใด 3 (ดีพอใช้)</div>
              </td>
              <td className="border border-black p-2 text-center">-</td>
              <td className="border border-black p-2 text-center">-</td>
              <td className="border border-black p-2 text-center">-</td>
              <td className="border border-black p-2 text-center">-</td>
            </tr>
            <tr>
              <td className="border border-black p-2 text-center">จำนวนนักเรียน</td>
              <td className="border border-black p-2 text-center">-</td>
              <td className="border border-black p-2 text-center">-</td>
              <td className="border border-black p-2 text-center">-</td>
              <td className="border border-black p-2 text-center">-</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Learning Development Section */}
      <div className="mb-6">
        <h3 className="mb-4 text-center font-bold">การอบรมผู้เยาวการเรียน</h3>

        <div className="mb-4">
          <div className="mb-2 border-b border-dotted border-black">
            <span>ครูประจำชั้น</span>
          </div>
          <div className="mb-2 border-b border-dotted border-black">
            <span>ห้องโรงเรียนวิชาการโรงเรียน</span>
          </div>
          <div className="mb-4 border-b border-dotted border-black">
            <span>ของผู้อำนวยการโรงเรียน</span>
          </div>
        </div>

        {/* Checkbox section */}
        <div className="mb-4 flex items-center justify-center gap-8">
          <div className="flex items-center gap-2">
            <div className="size-4 border border-black"></div>
            <span>อนุมัติ</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-4 border border-black"></div>
            <span>ไม่อนุมัติ</span>
          </div>
        </div>

        {/* Signature section */}
        <div className="text-center">
          <div className="mb-4">
            <span>(ครอบครัว-สกุล ผู้อำนวยการ</span>
          </div>
          <div className="mb-2">
            <span>ครอบครัวหนังสืออำนวยการโรงเรียนกิจกรรมการ</span>
          </div>
          <div className="flex justify-center gap-4">
            <span>วัน</span>
            <div className="h-6 w-8 border-b border-black"></div>
            <span>เดือน</span>
            <div className="h-6 w-16 border-b border-black"></div>
            <span>พ.ศ.</span>
            <div className="h-6 w-12 border-b border-black"></div>
          </div>
        </div>
      </div>

      {/* Color indicator */}
      <div className="absolute right-0 top-0 h-full w-2 bg-gradient-to-b from-red-500 via-yellow-500 to-blue-500"></div>
    </div>
  );
}
