const testimonials = [
  {
    review: 'The teachers explain concepts in a very simple way. My grades improved significantly within a few months.',
    name: 'Ananya Roy',
    role: 'Class 10 Student',
    avatar: 'AR',
    color: '#0EA569',
  },
  {
    review: 'Excellent coaching for competitive exams. The mock tests and guidance were extremely helpful.',
    name: 'Rohan Kumar',
    role: 'JEE Aspirant',
    avatar: 'RK',
    color: '#06b6d4',
  },
  {
    review: 'Best learning environment with supportive teachers and regular doubt-solving sessions.',
    name: 'Sneha Das',
    role: 'NEET Aspirant',
    avatar: 'SD',
    color: '#a855f7',
  },
  {
    review: 'The structured curriculum and dedicated faculty helped me crack my board exams with flying colors.',
    name: 'Priya Sharma',
    role: 'Class 12 Student',
    avatar: 'PS',
    color: '#f59e0b',
  },
  {
    review: 'Regular assessments and personalized feedback made a huge difference in my preparation.',
    name: 'Arjun Singh',
    role: 'JEE Aspirant',
    avatar: 'AS',
    color: '#ef4444',
  },
]

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24"
    fill="#FACC15" stroke="#FACC15" strokeWidth="1">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)

const QuoteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 opacity-20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
  </svg>
)

const doubled = [...testimonials, ...testimonials]

export default function Testimonials() {
  return (
    <section   id="project" className="py-16" style={{ background: '#f8fafc' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2"
            style={{ color: '#0EA569' }}>
            Student Reviews
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900"
            style={{ fontFamily: "'Poppins', sans-serif" }}>
            What Our Students Say
          </h2>
          <div className="mt-3 w-16 h-1 rounded-full mx-auto" style={{ background: '#FACC15' }} />
        </div>

      </div>

      {/* Slider */}
      <div className="relative overflow-hidden">

        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #f8fafc, transparent)' }}
        />
        <div
          className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #f8fafc, transparent)' }}
        />

        {/* Track */}
        <div
          className="flex gap-6 w-max"
          style={{
            animation: 'slide 28s linear infinite',
          }}
          onMouseEnter={e => (e.currentTarget.style.animationPlayState = 'paused')}
          onMouseLeave={e => (e.currentTarget.style.animationPlayState = 'running')}
        >
          {doubled.map((t, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl p-6 border border-gray-100 flex flex-col gap-4 group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ width: '300px', flexShrink: 0 }}
            >
              {/* Quote icon */}
              <div style={{ color: t.color }}>
                <QuoteIcon />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, s) => <StarIcon key={s} />)}
              </div>

              {/* Review text */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                {t.review}
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-gray-100" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0"
                  style={{ background: t.color, fontFamily: "'Poppins', sans-serif" }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900"
                    style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>

              {/* Bottom color bar on hover */}
              <div
                className="absolute bottom-0 left-0 w-0 h-1 rounded-b-2xl transition-all duration-500 group-hover:w-full"
                style={{ background: t.color }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Keyframe style */}
      <style>{`
        @keyframes slide {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}