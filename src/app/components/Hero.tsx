"use client";
import React from 'react';
import { ContainerScroll } from '../../components/ui/container-scroll-animation';
import Image from "next/image";
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden pt-10">
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff33_1px,transparent_1px)] [mask-image:radial-gradient(circle_at_center,_black,transparent_90%)] [background-size:16px_16px]" />
      </div>
      <div className="h-px w-px absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[40rem] w-[40rem] bg-blue-500/30 relative top-1/2 -translate-y-1/2 rounded-full blur-[128px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative">
        <div className="flex flex-col gap-12">
          <div className="space-y-8 text-center max-w-3xl mx-auto">
            <div className="space-y-4">
              <h1 className="text-9xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 leading-tight">
                <span className="font-bold">Bot</span>
                <span className="font-light">-Sensei</span>
              </h1>
              <p className="text-xl max-w-[36rem] mx-auto text-blue-200">
                Build, deploy, and scale intelligent Telegram bots with our no-code platform powered by cutting-edge AI so that you can focus on what REALLY MATTERS !
              </p>
            </div>
            
            <div className="flex gap-4 justify-center">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="border border-blue-600 flex items-center space-x-2 px-8 py-4"
              >
                <span>Create Bot &rarr;</span>
              </HoverBorderGradient>
            </div>

          </div>

          <div className="flex flex-col overflow-hidden -mt-64">
            <ContainerScroll
              titleComponent={null
              }
            >
              <Image
                src="https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Bot Interface"
                height={600}
                width={1000}
                className="mx-auto rounded-2xl object-cover h-full object-left-top"
                draggable={false}
              />
            </ContainerScroll>
          </div>
        </div>
      </div>
    </div>
  );
}