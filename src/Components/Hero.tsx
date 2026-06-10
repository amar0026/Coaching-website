import { useEffect, useRef, useState } from 'react'

interface DecorBlobProps {
  color: string
  size: string
  className?: string
}

const DecorBlob = ({ color, size, className }: DecorBlobProps) => (
  <div
    className={`rounded-full absolute ${className}`}
    style={{ background: color, width: size, height: size, opacity: 0.85 }}
  />
)

const programs = [
  {
    icon: '📚',
    title: 'School Coaching',
    items: ['Classes 5–12', 'CBSE, ICSE & State Boards', 'Subject-wise preparation'],
  },
  {
    icon: '🎓',
    title: 'Competitive Exam Preparation',
    items: ['JEE', 'NEET', 'CUET', 'Olympiads'],
  },
  {
    icon: '🏆',
    title: 'Career & Skill Development',
    items: ['Spoken English', 'Computer Fundamentals', 'Personality Development', 'Interview Preparation'],
  },
]

// Typewriter hook
function useTypewriter(text: string, speed = 55, startDelay = 300) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    setDisplayed('')
    setDone(false)
    let i = 0
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, speed)
      return () => clearInterval(interval)
    }, startDelay)
    return () => clearTimeout(timeout)
  }, [text, speed, startDelay])

  return { displayed, done }
}

export default function HeroSection() {
  const arrowRef = useRef<HTMLDivElement>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const line1 = 'Unlock Your Academic'
  const line2 = 'Excellence'
  const line3 = 'with Expert Guidance'

  const tw1 = useTypewriter(line1, 50, 200)
  const tw2 = useTypewriter(line2, 60, tw1.done ? 100 : 99999)
  const tw3 = useTypewriter(line3, 50, tw2.done ? 100 : 99999)

  // Programs section heading
  const progHeading = 'Our Learning Programs'
  const twProg = useTypewriter(progHeading, 55, 600)

  useEffect(() => {
    const el = arrowRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateX(-20px)'
    setTimeout(() => {
      el.style.transition = 'all 0.7s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateX(0)'
    }, 300)
  }, [])

  return (
    <>
      {/* ── HERO SECTION ── */}
      <section className="relative bg-white overflow-hidden min-h-[580px] flex flex-col">

        {/* Decorations */}
        <div className="absolute top-6 right-16 w-14 h-8 rounded-full z-10"
          style={{ background: 'linear-gradient(135deg, #a855f7 0%, #6d28d9 100%)' }}>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-7 h-4 rounded-full"
            style={{ background: '#86efac' }} />
        </div>
        <div className="absolute top-20 right-10 w-5 h-5 rounded-full" style={{ background: '#86efac' }} />
        <DecorBlob color="#f9a8d4" size="56px" className="left-10 top-[44%]" />
        <div className="absolute right-20 top-[35%] text-2xl">⭐</div>
        <div className="absolute right-16 top-[48%] text-xl opacity-60">G</div>

        {/* Curved arrow */}
        <div ref={arrowRef} className="absolute left-8 top-24 w-20 h-20 pointer-events-none">
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M20 65 Q10 30 45 15" stroke="#222" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            <path d="M40 10 L50 18 L40 22" stroke="#222" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Text content */}
        <div className="relative z-10 flex flex-col items-center pt-10 pb-0 px-6 text-center">
          <h1
            className="font-black text-4xl md:text-5xl text-gray-900 leading-tight max-w-2xl min-h-[4rem] md:min-h-[6rem]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {/* Line 1 */}
            <span>{tw1.displayed}</span>
            {tw1.done && (
              <>
                {' '}
                {/* Line 2 — highlighted word */}
                <span className="relative inline-block">
                  <span className="relative z-10">{tw2.displayed}</span>
                  {tw2.done && (
                    <span
                      className="absolute bottom-1 left-0 w-full h-3 -z-0 rounded"
                      style={{ background: '#FACC15', opacity: 0.5, animation: 'expandBar 0.4s ease forwards' }}
                    />
                  )}
                </span>
              </>
            )}
            {tw2.done && (
              <>
                {' '}
                <span>{tw3.displayed}</span>
              </>
            )}
            {/* Blinking cursor */}
            {!tw3.done && (
              <span style={{ animation: 'blink 0.75s step-end infinite', borderRight: '3px solid #0EA569', marginLeft: '2px' }} />
            )}
          </h1>

          <p className="mt-4 text-gray-500 text-base md:text-lg max-w-xl leading-relaxed"
            style={{ opacity: tw3.done ? 1 : 0, transition: 'opacity 0.6s ease', transitionDelay: '0.2s' }}>
            Personalized coaching programs designed to help students achieve outstanding results
            in school, college, and competitive examinations.
          </p>

          <p className="mt-3 text-gray-400 text-sm md:text-base max-w-lg leading-relaxed"
            style={{ opacity: tw3.done ? 1 : 0, transition: 'opacity 0.6s ease', transitionDelay: '0.45s' }}>
            Our experienced educators provide interactive learning, individual attention, and proven
            teaching methods that empower students to reach their full potential and build confidence
            in every subject.
          </p>

          {/* CTA Buttons */}
          <div
            className="mt-7 flex flex-wrap gap-4 justify-center"
            style={{ opacity: tw3.done ? 1 : 0, transition: 'opacity 0.6s ease', transitionDelay: '0.65s' }}
          >
            <button
              className="px-7 py-3 rounded-full font-bold text-white text-base shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 active:translate-y-0"
              style={{ background: 'linear-gradient(135deg, #0EA569 0%, #0B7A4F 100%)', fontFamily: "'Poppins', sans-serif" }}
            >
              Enroll Now
            </button>
            <button
              className="px-7 py-3 rounded-full font-bold text-base border-2 transition-all hover:-translate-y-0.5 active:translate-y-0"
              style={{ borderColor: '#0EA569', color: '#0EA569', fontFamily: "'Poppins', sans-serif" }}
            >
              Book Free Demo Class
            </button>
          </div>
        </div>

        {/* Students row */}
        <div className="relative z-10 flex justify-center items-end mt-8 gap-0 px-4">
          {[
            { bg: '#FACC15', delay: '0s', emoji: '👩‍🎓' },
            { bg: '#0EA569', delay: '0.15s', emoji: '👨‍🎓' },
            { bg: '#60A5FA', delay: '0.3s', emoji: '👩‍💻' },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center relative"
              style={{ animation: `floatUp 0.6s ease ${s.delay} both` }}>
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-full flex items-end justify-center overflow-hidden mx-2"
                style={{ background: s.bg }}>
                <div className="text-6xl md:text-7xl select-none" style={{ marginBottom: '-4px' }}>
                  {s.emoji}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROGRAMS SECTION ── */}
      <section className="relative overflow-hidden" style={{ background: '#0B7A4F' }}>

        {/* Wave top */}
        <div className="absolute top-0 left-0 w-full" style={{ height: '50px' }}>
          <svg viewBox="0 0 1200 50" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,0 Q300,50 600,25 Q900,0 1200,35 L1200,0 Z" fill="white"/>
          </svg>
        </div>

        {/* BG circles */}
        <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full opacity-10"
          style={{ background: '#0EA569', transform: 'translate(-30%, 30%)' }} />
        <div className="absolute bottom-8 right-8 w-24 h-24 rounded-full opacity-15"
          style={{ background: '#FACC15' }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-14">
          <div className="flex flex-col md:flex-row gap-10 items-start">

            {/* Left: title block */}
            <div className="md:w-64 flex-shrink-0">
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#86efac' }}>
                What We Offer
              </p>
              <h2
                className="text-3xl font-black text-white leading-tight min-h-[4.5rem]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {twProg.displayed}
                {!twProg.done && (
                  <span style={{ animation: 'blink 0.75s step-end infinite', borderRight: '3px solid #FACC15', marginLeft: '2px' }} />
                )}
              </h2>
              <div className="mt-3 w-12 h-1 rounded-full" style={{ background: '#FACC15' }} />
              <p className="mt-4 text-sm leading-relaxed" style={{ color: '#a7f3d0' }}>
                Choose the right learning path based on your academic goals and educational level.
              </p>
              <div className="hidden md:block mt-8 w-px h-32"
                style={{ background: 'rgba(255,255,255,0.2)' }} />
            </div>

            {/* Right: cards */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {programs.map((prog, i) => {
                const isHovered = hoveredCard === i
                return (
                  <div
                    key={i}
                    className="rounded-2xl p-5 cursor-pointer group"
                    style={{
                      background: isHovered ? '#FACC15' : 'rgba(255,255,255,0.08)',
                      border: isHovered ? 'none' : '1px solid rgba(255,255,255,0.15)',
                      backdropFilter: 'blur(10px)',
                      transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                      boxShadow: isHovered ? '0 16px 40px rgba(0,0,0,0.25)' : 'none',
                      transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
                    }}
                    onMouseEnter={() => setHoveredCard(i)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: isHovered ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)' }}
                    >
                      {prog.icon}
                    </div>

                    <h3
                      className="font-bold text-base leading-snug mb-3 transition-colors duration-300"
                      style={{ fontFamily: "'Poppins', sans-serif", color: isHovered ? '#1a1a1a' : 'white' }}
                    >
                      {prog.title}
                    </h3>

                    <ul className="space-y-1.5">
                      {prog.items.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-center gap-2 text-sm transition-colors duration-300"
                          style={{ color: isHovered ? '#374151' : '#d1fae5' }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-300"
                            style={{ background: isHovered ? '#0EA569' : '#86efac' }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <button
                      className="mt-4 text-xs font-bold flex items-center gap-1 transition-all duration-300"
                      style={{
                        color: isHovered ? '#0B7A4F' : '#86efac',
                        gap: isHovered ? '8px' : '4px',
                      }}
                    >
                      Learn More <span className="text-base">→</span>
                    </button>
                  </div>
                )
              })}
            </div>

          </div>
        </div>
      </section>

      <style>{`
        @keyframes floatUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes expandBar {
          from { transform: scaleX(0); transform-origin: left; }
          to   { transform: scaleX(1); transform-origin: left; }
        }
      `}</style>
    </>
  )
}