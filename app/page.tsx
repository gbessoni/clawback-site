"use client";

import { useState } from "react";

const exampleSlides = [
  {
    label: "Investor Outreach",
    without: "Saw you invested in vertical SaaS companies. I'm building one and would love to chat.",
    with: "You asked on X yesterday whether AI agents will unbundle SaaS or create new categories. We're betting unbundle — and have early signal it's working. Worth 15 min?"
  },
  {
    label: "Partnership Outreach",
    without: "Our products have similar audiences. Would love to explore a partnership.",
    with: "You mentioned in the Lenny podcast (3 days ago) that you're rethinking your integration strategy. We've solved the exact auth flow problem you described. Want to see it?"
  },
  {
    label: "Advisor / Hiring Outreach",
    without: "We're hiring senior engineers and think you'd be a great fit.",
    with: "You posted about finally shipping the multi-tenant rewrite last week. That's the exact problem we're solving right now — and we're looking for someone who's been through it. Interested in advising (or joining)?"
  },
  {
    label: "Sales Outreach",
    without: "I help companies like yours improve sales efficiency. Do you have 15 minutes?",
    with: "Your VP Sales mentioned on the earnings call that you're scaling SDR headcount 3x this year. We help teams like yours ramp new SDRs 40% faster. Worth a look?"
  }
];

export default function LandingPage() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="bg-[#0a0a0a] text-white">
      {/* HERO */}
      <section className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Copy */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
                Conversations are shaping what people care about right now.
                <br />
                <span className="text-gray-500">Most outreach ignores them.</span>
              </h1>

              <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                Clawback shows you what they&apos;ve been talking about in the last 30 days — and gives you the best angle to reach out.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <a
                  href="#"
                  className="px-8 py-4 bg-[#D4763A] text-white text-lg font-semibold rounded-lg hover:bg-[#c46830] transition-colors text-center"
                >
                  Get Chrome Extension
                </a>
                <a
                  href="#"
                  className="px-8 py-4 border border-gray-700 text-white text-lg font-semibold rounded-lg hover:border-gray-600 transition-colors text-center"
                >
                  Sign in
                </a>
              </div>
              <p className="text-sm text-gray-500">First results in ~60 seconds.</p>
            </div>

            {/* Right side - Carousel */}
            <div className="lg:order-last order-first">
              <div className="bg-[#111] border border-gray-700 rounded-xl overflow-hidden">
                <div className="border-b border-gray-800 px-6 py-3 bg-[#0d0d0d]">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                    Static personalization vs Conversation-aware outreach
                  </p>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-gray-800 overflow-x-auto">
                  {exampleSlides.map((slide, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSlide(idx)}
                      className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                        activeSlide === idx
                          ? "text-[#D4763A] border-b-2 border-[#D4763A]"
                          : "text-gray-500 hover:text-gray-300"
                      }`}
                    >
                      {slide.label}
                    </button>
                  ))}
                </div>

                {/* Slide Content */}
                <div className="p-6 space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <span className="text-xs font-semibold text-gray-400 uppercase">Without Clawback</span>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {exampleSlides[activeSlide].without}
                    </p>
                  </div>

                  <div className="border-t border-gray-800 pt-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-xs font-semibold text-[#D4763A] uppercase">With Clawback</span>
                    </div>
                    <p className="text-base text-gray-200 leading-relaxed">
                      {exampleSlides[activeSlide].with}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="examples" className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight text-center">
            &quot;Personalized&quot; outreach got generic.
          </h2>
          <div className="space-y-6 mb-12">
            <div className="flex items-start gap-4">
              <span className="text-3xl">❌</span>
              <p className="text-xl text-gray-400">Congrats on the role… from 6 months ago.</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-3xl">❌</span>
              <p className="text-xl text-gray-400">Loved your post… from last quarter.</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-3xl">❌</span>
              <p className="text-xl text-gray-400">Saw you&apos;re hiring… (so did everyone else).</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-12">
            <p className="text-2xl text-center text-white font-semibold">
              Clawback uses what they&apos;ve been talking about and reacting to in the last 30 days.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-center">
            How it works
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-6xl font-bold text-[#D4763A] mb-4">1</div>
              <h3 className="text-xl font-bold mb-3">Open a profile</h3>
              <p className="text-gray-400">
                LinkedIn, X, or any profile page. Click the Clawback extension.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-[#D4763A] mb-4">2</div>
              <h3 className="text-xl font-bold mb-3">Run Clawback</h3>
              <p className="text-gray-400">
                We scan the last 30 days of conversations, posts, and reactions.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-[#D4763A] mb-4">3</div>
              <h3 className="text-xl font-bold mb-3">Get the best angle + ready-to-send message</h3>
              <p className="text-gray-400">
                Brief + angle decision + message in under 60 seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUTPUTS */}
      <section className="border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-center">
            What you get
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#111] border border-gray-800 rounded-lg p-8">
              <div className="text-sm font-semibold text-[#D4763A] mb-3">1. SIGNAL SUMMARY</div>
              <p className="text-gray-400 leading-relaxed">
                What they&apos;ve been talking about, reacting to, and engaging with in the last 30 days.
              </p>
            </div>
            <div className="bg-[#111] border border-gray-800 rounded-lg p-8">
              <div className="text-sm font-semibold text-[#D4763A] mb-3">2. WHAT IT MEANS</div>
              <p className="text-gray-400 leading-relaxed">
                The angle you should take and why it&apos;ll land right now.
              </p>
            </div>
            <div className="bg-[#111] border border-gray-800 rounded-lg p-8">
              <div className="text-sm font-semibold text-[#D4763A] mb-3">3. WHAT TO SAY & WHY</div>
              <p className="text-gray-400 leading-relaxed">
                A ready-to-send message that shows you&apos;re already in the conversation.
              </p>
            </div>
            <div className="bg-[#111] border border-gray-800 rounded-lg p-8">
              <div className="text-sm font-semibold text-[#D4763A] mb-3">4. GO DEEPER PROMPTS</div>
              <p className="text-gray-400 leading-relaxed">
                Follow-up questions and angles if you need to iterate or explore further.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            Who it&apos;s for
          </h2>
          <div className="flex flex-wrap justify-center gap-6 text-xl text-gray-400">
            <span>Founders</span>
            <span className="text-gray-700">•</span>
            <span>SDRs</span>
            <span className="text-gray-700">•</span>
            <span>Partnerships</span>
            <span className="text-gray-700">•</span>
            <span>Recruiting</span>
            <span className="text-gray-700">•</span>
            <span>Investors & Advisors</span>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-center">
            Pricing
          </h2>
          <div className="text-center space-y-6 max-w-2xl mx-auto">
            <p className="text-2xl text-white font-semibold">
              Try it free.
            </p>
            <p className="text-2xl text-white font-semibold">
              Buy credits when you need more.
            </p>
            <p className="text-2xl text-white font-semibold">
              Go monthly if you use it every day.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-32 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-10 tracking-tight leading-tight">
            Stop guessing what to say.
          </h2>
          <a
            href="#"
            className="inline-block px-8 py-4 bg-[#D4763A] text-white text-lg font-semibold rounded-lg hover:bg-[#c46830] transition-colors"
          >
            Get the Chrome Extension
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-12 text-center">
          <p className="text-gray-500">
            Built by{" "}
            <a
              href="https://x.com/greg15"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4763A] hover:underline"
            >
              Greg Bessoni
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
