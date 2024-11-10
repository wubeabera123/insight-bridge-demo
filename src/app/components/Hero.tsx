import { ArrowRight, Bot, Zap, Code } from 'lucide-react';
import React from 'react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden">
      <div className="h-px w-px absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[40rem] w-[40rem] bg-blue-500/30 relative top-1/2 -translate-y-1/2 rounded-full blur-[128px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-white leading-tight">
                Create AI-Powered Telegram Bots in Minutes
              </h1>
              <p className="text-xl text-gray-300">
                Build, deploy, and scale intelligent Telegram bots with our no-code platform powered by cutting-edge AI
              </p>
            </div>
            
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors">
                Create Your Bot
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border-2 border-blue-600 text-blue-400 rounded-lg font-semibold hover:bg-blue-900/20 transition-colors">
                View Templates
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-gray-300">No-Code Builder</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-gray-300">Instant Deploy</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-gray-300">API Access</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gray-800 rounded-2xl shadow-xl p-6 transform rotate-2">
              <img 
                src="https://images.unsplash.com/photo-1625314887424-9f190599bd56?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Bot Interface"
                className="rounded-lg w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-gray-800 p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-400">10k+</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Active Bots</p>
                    <p className="text-sm text-gray-300">Built on our platform</p>
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