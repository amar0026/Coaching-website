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
        cardBg: '#FACC15',
        cardAccent: '#b45309',
        dotColor: '#92400e',
        textColor: '#1a1a1a',
        subTextColor: '#374151',
        btnColor: '#92400e',
    },
    {
        icon: '🎓',
        title: 'Competitive Exam Preparation',
        items: ['JEE', 'NEET', 'CUET', 'Olympiads'],
        cardBg: '#0EA569',
        cardAccent: '#fff',
        dotColor: '#d1fae5',
        textColor: '#ffffff',
        subTextColor: '#d1fae5',
        btnColor: '#d1fae5',
    },
    {
        icon: '🏆',
        title: 'Career & Skill Development',
        items: ['Spoken English', 'Computer Fundamentals', 'Personality Development', 'Interview Preparation'],
        cardBg: '#60A5FA',
        cardAccent: '#1e40af',
        dotColor: '#dbeafe',
        textColor: '#1e3a5f',
        subTextColor: '#1e3a8a',
        btnColor: '#1e3a8a',
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

    const students = [
        {
            bg: "#FACC15",
            delay: "0s",
            img: "https://res.cloudinary.com/dquki4xol/image/upload/v1781091901/college-student-YCNL3GU-1-ptib3cymvqexaw01pv2ajt0xkogtxflro86oam5oha_dk7lis.png",
            size: 'small', // left
        },
        {
            bg: "#0EA569",
            delay: "0.15s",
            img: "https://res.cloudinary.com/dquki4xol/image/upload/v1781086088/45694a86c735b2e1b40d6a970152d7b7b1f8506b_yab6gd.png",
            size: 'large', // center
        },
        {
            bg: "#17ADDF",
            delay: "0s",
            img: "https://res.cloudinary.com/dquki4xol/image/upload/v1781159882/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTExL3Jhd3BpeGVsX29mZmljZV8zMF9waG90b19vZl95b3VuZ19zb3V0aF9hc2lhbl9naXJsX2hvbGRpbmdfc3R1ZF8xOTQyYTRkYi01YjA5LTQ2NDItYjc0YS04YjU4MjdiYjhjMjgucG5n-removebg-previe_ygo6pt.png",
            size: 'small', // right
        },
    ]

    return (
        <>
            {/* ── HERO SECTION ── */}
            <section className="relative bg-white overflow-hidden flex flex-col">

                {/* Decorations */}
                <div className="absolute top-6 right-16 w-14 h-8 rounded-full z-10"
                    style={{ background: 'linear-gradient(135deg, #a855f7 0%, #6d28d9 100%)' }}>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-7 h-4 rounded-full"
                        style={{ background: '#86efac' }} />
                </div>
                <div className="absolute top-20 right-10 w-5 h-5 rounded-full" style={{ background: '#86efac' }} />
                <DecorBlob color="#f9a8d4" size="56px" className="left-10 top-[44%]" />

                {/* Curved arrow */}
                <div ref={arrowRef} className="absolute left-8 top-24 w-20 h-20 pointer-events-none">
                    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <path d="M20 65 Q10 30 45 15" stroke="#222" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                        <path d="M40 10 L50 18 L40 22" stroke="#222" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                {/* Text content */}
                <div className="relative z-10 flex flex-col items-center pt-10 pb-0 px-6 text-center">
                    <h1
                        className="font-black text-4xl md:text-5xl text-gray-900 leading-tight max-w-2xl min-h-[4rem] md:min-h-[6rem]"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                        <span>{tw1.displayed}</span>
                        {tw1.done && (
                            <>
                                {' '}
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
                </div>

                {/* Students Row with Yellow Arch Background */}
                <div className="relative z-10 flex justify-center items-end mt-6" style={{ minHeight: '280px' }}>

                    {/* Big Yellow Arch behind all students */}
                    <div
                        className="absolute bottom-0 left-1/2 -translate-x-1/2"
                        style={{
                            width: '520px',
                            height: '260px',
                            background: '#EEFFD9',
                            borderRadius: '260px 260px 0 0',
                            zIndex: 0,
                        }}
                    />

                    {/* Students */}
                    <div className="relative z-10 flex justify-center items-end gap-2">
                        {students.map((s, i) => {
                            const isCenter = s.size === 'large'
                            const circleSize = isCenter ? '200px' : '140px'
                            const imgWidth = isCenter ? '220px' : '160px'
                            const containerH = isCenter ? '290px' : '220px'
                            const containerW = isCenter ? '200px' : '148px'

                            return (
                                <div
                                    key={i}
                                    className="relative flex justify-center items-end"
                                    style={{
                                        width: containerW,
                                        height: containerH,
                                        animation: `floatUp 0.6s ease ${s.delay} both`,
                                    }}
                                >
                                    {/* Colored circle per student */}
                                    <div
                                        className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full"
                                        style={{
                                            width: circleSize,
                                            height: `calc(${circleSize} / 2)`,
                                            background: s.bg,
                                            borderRadius: `${circleSize} ${circleSize} 0 0`,
                                            zIndex: 1,
                                        }}
                                    />

                                    {/* Student Image */}
                                    <img
                                        src={s.img}
                                        alt={`Student ${i + 1}`}
                                        draggable={false}
                                        className="absolute bottom-0 left-1/2 -translate-x-1/2 object-contain z-10"
                                        style={{ width: imgWidth, height: 'auto' }}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ── PROGRAMS SECTION ── */}
            <section className="relative overflow-hidden" style={{ background: '#008D78' }}>
                {/* BG circles */}
                <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full opacity-10"
                    style={{ background: '#0EA569', transform: 'translate(-30%, 30%)' }} />
                <div className="absolute bottom-4 right-8 w-20 h-20 rounded-full opacity-15"
                    style={{ background: '#FACC15' }} />

                <div className="relative z-10 max-w-6xl mx-auto px-6 py-5">
                    <div className="flex flex-col md:flex-row gap-6 items-start">

                        {/* Left: title block */}
                        <div className="md:w-56 flex-shrink-0">
                            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#86efac' }}>
                                What We Offer
                            </p>
                            <h2
                                className="text-2xl font-black text-white leading-tight min-h-[3.5rem]"
                                style={{ fontFamily: "'Poppins', sans-serif" }}
                            >
                                {twProg.displayed}
                                {!twProg.done && (
                                    <span style={{ animation: 'blink 0.75s step-end infinite', borderRight: '3px solid #FACC15', marginLeft: '2px' }} />
                                )}
                            </h2>
                            <div className="mt-2 w-10 h-1 rounded-full" style={{ background: '#FACC15' }} />
                            <p className="mt-3 text-xs leading-relaxed" style={{ color: '#a7f3d0' }}>
                                Choose the right learning path based on your academic goals.
                            </p>
                            <div className="hidden md:block mt-6 w-px h-24"
                                style={{ background: 'rgba(255,255,255,0.2)' }} />
                        </div>

                        {/* Right: colored cards */}
                        <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {programs.map((prog, i) => {
                                const isHovered = hoveredCard === i
                                return (
                                    <div
                                        key={i}
                                        className="rounded-2xl p-4 cursor-pointer"
                                        style={{
                                            background: prog.cardBg,
                                            transform: isHovered ? 'translateY(-6px) scale(1.02)' : 'translateY(0) scale(1)',
                                            boxShadow: isHovered ? '0 16px 40px rgba(0,0,0,0.25)' : '0 4px 12px rgba(0,0,0,0.15)',
                                            transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
                                        }}
                                        onMouseEnter={() => setHoveredCard(i)}
                                        onMouseLeave={() => setHoveredCard(null)}
                                    >
                                        <div
                                            className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-3"
                                            style={{ background: 'rgba(0,0,0,0.1)' }}
                                        >
                                            {prog.icon}
                                        </div>

                                        <h3
                                            className="font-bold text-sm leading-snug mb-2"
                                            style={{ fontFamily: "'Poppins', sans-serif", color: prog.textColor }}
                                        >
                                            {prog.title}
                                        </h3>

                                        <ul className="space-y-1">
                                            {prog.items.map((item, j) => (
                                                <li
                                                    key={j}
                                                    className="flex items-center gap-2 text-xs"
                                                    style={{ color: prog.subTextColor }}
                                                >
                                                    <span
                                                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                                        style={{ background: prog.dotColor }}
                                                    />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>

                                        <button
                                            className="mt-3 text-xs font-bold flex items-center gap-1"
                                            style={{ color: prog.btnColor }}
                                        >
                                            Learn More <span className="text-sm">→</span>
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