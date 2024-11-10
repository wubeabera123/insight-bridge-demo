import { ArrowRight, BookOpen, Target, Trophy } from 'lucide-react';
import React from 'react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-white leading-tight">
                Master Your RAS Exam Preparation
              </h1>
              <p className="text-xl text-gray-300">
                Comprehensive study materials, interactive tests, and personalized tracking for aspiring RAS officers
              </p>
            </div>
            
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors">
                Start Your Preparation Journey
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border-2 border-blue-600 text-blue-400 rounded-lg font-semibold hover:bg-blue-900/20 transition-colors">
                Explore Features
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-gray-300">Complete Syllabus</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-gray-300">Focused Approach</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-gray-300">Proven Results</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gray-800 rounded-2xl shadow-xl p-6 transform rotate-2">
              <img 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1000"
                alt="Student studying"
                className="rounded-lg w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-gray-800 p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-400">87%</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Success Rate</p>
                    <p className="text-sm text-gray-300">Among regular students</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}