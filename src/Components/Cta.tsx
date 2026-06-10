import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 5000, suffix: '+', label: 'Students Trained' },
  { value: 150, suffix: '+', label: 'Expert Teachers' },
  { value: 95, suffix: '%', label: 'Success Rate' },
  { value: 10, suffix: '+', label: 'Years Teaching Excellence' },
]

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) { setCount(0); return }
    let startTime: number | null = null
    let raf: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [start, target, duration])

  return count
}

function StatCard({ value, suffix, label, delay, started }: {
  value: number
  suffix: string
  label: string
  delay: number
  started: boolean
}) {
  const [active, setActive] = useState(false)
  const count = useCountUp(value, 2000, active)

  useEffect(() => {
    if (!started) { setActive(false); return }
    const t = setTimeout(() => setActive(true), delay)
    return () => clearTimeout(t)
  }, [started, delay])

  return (
    <div className="flex flex-col items-center justify-center bg-white/15 backdrop-blur-sm rounded-2xl px-6 py-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 group">
      <div
        className="text-4xl md:text-5xl font-black text-white mb-2 tabular-nums transition-all duration-300 group-hover:scale-105"
        style={{ fontFamily: "'Poppins', sans-serif", textShadow: '0 2px 12px rgba(0,0,0,0.15)' }}
      >
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm font-semibold text-white/80 text-center tracking-wide">
        {label}
      </div>
      <div className="mt-3 w-8 h-0.5 rounded-full bg-yellow-300/60 transition-all duration-500 group-hover:w-14" />
    </div>
  )
}

export default function CTAStats() {
  const statsRef = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)
  const viewCountRef = useRef(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          viewCountRef.current += 1
          if (viewCountRef.current === 1 || viewCountRef.current % 5 === 0) {
            setStarted(false)
            setTimeout(() => setStarted(true), 50)
          }
        }
      },
      { threshold: 0.3 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div>
      {/* CTA Section */}
      <section className="py-20 px-6" style={{ background: '#f8fafc' }}>
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden px-10 py-14 md:py-16 flex flex-col md:flex-row items-center justify-between gap-10"
            style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)' }}>

            {/* Decorative circles */}
            <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full opacity-10"
              style={{ background: '#FACC15' }} />
            <div className="absolute -bottom-12 -right-8 w-64 h-64 rounded-full opacity-10"
              style={{ background: '#0EA569' }} />

            {/* Text */}
            <div className="relative z-10 max-w-xl">
              <span className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
                style={{ background: 'rgba(250,204,21,0.15)', color: '#FACC15' }}>
                Limited Seats Available
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight"
                style={{ fontFamily: "'Poppins', sans-serif" }}>
                Ready to Transform Your<br />
                <span style={{ color: '#FACC15' }}>Learning Journey?</span>
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                Join hundreds of successful students who have improved their performance through our expert guidance and structured learning programs.
              </p>
            </div>

            {/* Arrow + Button */}
            <div className="relative z-10 flex flex-col items-center gap-4 flex-shrink-0">
              <svg className="w-16 h-12 -mb-2 rotate-12 hidden md:block" viewBox="0 0 80 60" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M10 50 C20 10, 60 10, 68 28" stroke="#FACC15" strokeWidth="2.5"
                  strokeLinecap="round" fill="none" strokeDasharray="120" strokeDashoffset="0"
                  style={{ animation: 'drawArrow 1.2s ease forwards' }} />
                <path d="M62 22 L70 30 L60 34" stroke="#FACC15" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <button
                className="relative overflow-hidden px-8 py-4 rounded-2xl font-black text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  background: '#FACC15',
                  color: '#1a1a2e',
                  boxShadow: '0 8px 32px rgba(250,204,21,0.35)',
                }}
              >
                <span className="relative z-10">Get Started Today →</span>
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'rgba(255,255,255,0.15)' }} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className="py-16 px-6 relative overflow-hidden"
        style={{ background: '#0EA569' }}
      >
        {/* Background texture circles */}
        <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full opacity-10 -translate-y-1/2"
          style={{ background: '#fff' }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10 translate-y-1/2"
          style={{ background: '#fff' }} />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">Our Impact</p>
            <h3 className="text-2xl md:text-3xl font-black text-white"
              style={{ fontFamily: "'Poppins', sans-serif" }}>
              Numbers That Speak
            </h3>
            <div className="mt-2 w-10 h-1 rounded-full mx-auto bg-yellow-300" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <StatCard
                key={i}
                value={s.value}
                suffix={s.suffix}
                label={s.label}
                delay={i * 150}
                started={started}
              />
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes drawArrow {
          from { stroke-dashoffset: 120; }
          to   { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  )
}