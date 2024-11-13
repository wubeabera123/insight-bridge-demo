"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"

const words1 = "🤖 Unleash the power of AI in your Telegram chats! Our intelligent bots are here to transform your messaging experience.";

const words2 = "✨ From automated responses to smart workflows, we're revolutionizing how you interact.";

const words3 = "🚀 No coding required - just pure innovation at your fingertips. Build your perfect bot assistant today and watch your productivity soar! 💫";

export function catchyLine() {
  return (
    <div className="w-1/2 mx-auto py-12">
      <div>
        <TextGenerateEffect words={words1} />
      </div>
      <div>
        <TextGenerateEffect words={words2} />
      </div>
      <div>
        <TextGenerateEffect words={words3} />
      </div>
    </div>
  );
}
