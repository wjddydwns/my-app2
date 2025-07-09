'use client';
import React from 'react';

const Education = () => {
  return (
    <section className="bg-white py-10 px-4 max-w-2xl"
    style={{borderRadius:"16px", boxShadow:"black 0 0 15px"}}>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">학력</h2>

      {/* 1. 나사렛대학교 */}
      <div className="flex items-start gap-4 mb-6">
        <img
          src="/img/naz.png"
          alt="나사렛대학교"
          className="w-14 h-14 object-contain"
        />
        <div className="flex-1">
          <p className="font-semibold text-gray-700">나사렛대학 <span className="text-sm text-gray-500">[중퇴]</span></p>
          <p className="text-sm text-gray-600">컴퓨터 공학과</p>
          <p className="text-sm text-gray-500">2020년 2월 ~ 2022년 8월</p>
        </div>
      </div>

      {/* 화살표 */}
      <div className="text-center text-gray-400 mb-6 text-2xl">↓</div>

      {/* 2. 가천대학교 */}
      <div className="flex items-start gap-4">
        <img
          src="/img/gachon.png"
          alt="가천대학교"
          className="w-14 h-14 object-contain"
        />
        <div className="flex-1">
          <p className="font-semibold text-gray-700">
            가천대학교 학사 <span className="text-sm text-gray-500">(졸업예정)</span> - 편입
          </p>
          <p className="text-sm text-gray-600">소프트웨어 · 인공지능(인공지능)</p>
          <p className="text-sm text-gray-500">2023년 3월 ~ 2025년 8월 (졸업예정)</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
