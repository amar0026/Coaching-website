import { useState } from 'react'

const tabs = [
  {
    key: 'school',
    label: 'School',
    icon: '🏫',
    heading: 'Foundation courses for Classes 5–12',
    description: 'Subject-specific coaching designed to build strong fundamentals. Our structured programs cover Mathematics, Science, English, and Social Studies with regular assessments and doubt-clearing sessions.',
    highlights: ['Classes 5–12 coverage', 'Subject-specific batches', 'Board exam preparation', 'Weekly mock tests'],
    color: '#0EA569',
    light: '#e1f5ee',
  },
  {
    key: 'college',
    label: 'College',
    icon: '🎓',
    heading: 'Academic support for undergraduates',
    description: 'Comprehensive support for undergraduate and diploma students. From semester prep to project guidance, our faculty help you navigate college academics with clarity and confidence.',
    highlights: ['Semester-wise modules', 'Project & assignment help', 'Diploma programs', 'Lab & practical support'],
    color: '#6366f1',
    light: '#ede9fe',
  },
  {
    key: 'academy',
    label: 'Academy',
    icon: '🏆',
    heading: 'Competitive & certification programs',
    description: 'Professional certification, skill development, and career-focused learning for JEE, NEET, UPSC, and more. Intensive crash courses and long-term programs crafted by top-ranked educators.',
    highlights: ['JEE / NEET coaching', 'UPSC & SSC prep', 'Skill certification', 'Career counselling'],
    color: '#f59e0b',
    light: '#fef3c7',
  },
]

const faculty = [
  { name: 'Dr. Amit Sharma', role: 'Mathematics Expert', avatar: 'AS', color: '#0EA569' },
  { name: 'Priya Verma', role: 'Science Mentor', avatar: 'PV', color: '#6366f1' },
  { name: 'Rahul Das', role: 'English Faculty', avatar: 'RD', color: '#f59e0b' },
]

export default function Categories() {
  const [active, setActive] = useState(0)
  const tab = tabs[active]

  return (
    <section className="py-20 px-6" style={{ background: '#f8fafc' }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#0EA569' }}>
            Our Programs
          </p>
          <h2
            className="text-3xl md:text-4xl font-black text-gray-900"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Programs for Every Learner
          </h2>
          <p className="mt-3 text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
            Whether you're preparing for school exams, college academics, or competitive tests, we have
            specialized courses tailored to your needs.
          </p>
          <div className="mt-4 w-12 h-1 rounded-full mx-auto" style={{ background: '#FACC15' }} />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Left — Tabs + Content */}
          <div className="flex-1 min-w-0">

            {/* Tab Buttons */}
            <div className="flex gap-3 mb-8 flex-wrap">
              {tabs.map((t, i) => (
                <button
                  key={t.key}
                  onClick={() => setActive(i)}
                  className="relative px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 overflow-hidden"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    background: active === i ? t.color : '#fff',
                    color: active === i ? '#fff' : '#6b7280',
                    border: active === i ? `2px solid ${t.color}` : '2px solid #e5e7eb',
                    boxShadow: active === i ? `0 4px 16px ${t.color}40` : 'none',
                    transform: active === i ? 'translateY(-2px)' : 'translateY(0)',
                  }}
                >
                  <span className="mr-1.5">{t.icon}</span>
                  {t.label}
                </button>
              ))}
            </div>

            {/* Content Card */}
            <div
              key={tab.key}
              className="rounded-3xl p-8 md:p-10 transition-all duration-500"
              style={{
                background: '#fff',
                border: `1.5px solid ${tab.color}30`,
                boxShadow: `0 8px 40px ${tab.color}18`,
                animation: 'fadeSlide 0.35s ease forwards',
              }}
            >
              {/* Top accent */}
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-5"
                style={{ background: tab.light, color: tab.color }}
              >
                <span>{tab.icon}</span> {tab.label} Program
              </div>

              <h3
                className="text-2xl font-black text-gray-900 mb-3"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {tab.heading}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                {tab.description}
              </p>

              {/* Highlights grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tab.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-700"
                    style={{ background: tab.light, animationDelay: `${i * 60}ms`, animation: 'fadeSlide 0.4s ease forwards' }}
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs"
                      style={{ background: tab.color }}
                    >
                      ✓
                    </span>
                    {h}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                className="mt-8 px-7 py-3 rounded-xl text-sm font-black text-white transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  background: tab.color,
                  boxShadow: `0 4px 20px ${tab.color}40`,
                }}
              >
                Explore {tab.label} Courses →
              </button>
            </div>
          </div>

          {/* Right — Faculty Card */}
          <div
            className="w-full lg:w-72 xl:w-80 flex-shrink-0 rounded-3xl overflow-hidden"
            style={{
              background: '#fff',
              border: '1.5px solid #e5e7eb',
              boxShadow: '0 8px 40px rgba(0,0,0,0.07)',
            }}
          >
            {/* Card header */}
            <div
              className="px-6 py-5 flex items-center gap-3"
              style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)' }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                style={{ background: 'rgba(250,204,21,0.2)' }}
              >
                👨‍🏫
              </div>
              <div>
                <p
                  className="text-white font-black text-sm"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Expert Faculty Team
                </p>
                <p className="text-white/50 text-xs">Meet your mentors</p>
              </div>
            </div>

            {/* Faculty list */}
            <div className="px-5 py-5 flex flex-col gap-4">
              {faculty.map((f, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md cursor-pointer group"
                  style={{
                    border: '1px solid #f3f4f6',
                    animationDelay: `${i * 100}ms`,
                    animation: 'fadeSlide 0.5s ease forwards',
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: f.color, fontFamily: "'Poppins', sans-serif" }}
                  >
                    {f.avatar}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-gray-900 truncate"
                      style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {f.name}
                    </p>
                    <p className="text-xs text-gray-400">{f.role}</p>
                  </div>
                  <span
                    className="ml-auto text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `${f.color}18`, color: f.color }}
                  >
                    View
                  </span>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-5 pb-5">
              <button
                className="w-full py-3 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:opacity-90 hover:shadow-lg active:scale-95"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  background: '#0EA569',
                  boxShadow: '0 4px 16px #0EA56940',
                }}
              >
                Meet All Faculty →
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}