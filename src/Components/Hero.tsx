import { useEffect, useRef, useState } from 'react'





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

    const line1 = 'Online '
    const line2 = 'Tutoring'
    const line3 = ' Can Provide'
    const line4 = 'You with '
    const line5 = 'High-Quality'
    const line6 = ' Tutoring.'

    const tw1 = useTypewriter(line1, 50, 200)
    const tw2 = useTypewriter(line2, 60, tw1.done ? 100 : 99999)
    const tw3 = useTypewriter(line3, 50, tw2.done ? 100 : 99999)
    const tw4 = useTypewriter(line4, 50, tw3.done ? 100 : 99999)
    const tw5 = useTypewriter(line5, 60, tw4.done ? 100 : 99999)
    const tw6 = useTypewriter(line6, 50, tw5.done ? 100 : 99999)

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
            <section
                className="relative overflow-hidden pt-5 flex flex-col items-center "
                style={{
                    minHeight: "600px",
                    backgroundImage:
                        "url(https://res.cloudinary.com/dquki4xol/image/upload/v1781174455/Group_85_khaenf.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >

                {/* Text content */}
                <div className="relative z-10 -mt-5 mx-auto max-w-4xl text-center flex flex-col">
                    <h1
                        className="font-black text-2xl md:text-5xl text-gray-900 leading-tight min-h-[4rem] md:min-h-[6rem]"
    
                    >
                        {/* "Online " */}
                        <span>{tw1.displayed}</span>

                        {/* "Tutoring" — yellow underline */}
                        {tw1.done && (
                            <span className="relative inline-block">
                                <span className="relative z-10">{tw2.displayed}</span>
                                {tw2.done && (
                                    <span
                                        className="absolute left-0 w-full rounded"
                                        style={{
                                            bottom: '2px',
                                            height: '10px',
                                            background: '#FACC15',
                                            opacity: 0.6,
                                            zIndex: 0,
                                            animation: 'expandBar 0.4s ease forwards',
                                        }}
                                    />
                                )}
                            </span>
                        )}

                        {/* " Can Provide" */}
                        {tw2.done && <span>{tw3.displayed}</span>}

                        {/* Line break */}
                        {tw3.done && <br />}

                        {/* "You with " */}
                        {tw3.done && <span>{tw4.displayed}</span>}

                        {/* "High-Quality" — yellow underline */}
                        {tw4.done && (
                            <span className="relative inline-block">
                                <span className="relative z-10">{tw5.displayed}</span>
                                {tw5.done && (
                                    <span
                                        className="absolute left-0 w-full rounded"
                                        style={{
                                            bottom: '2px',
                                            height: '10px',
                                            background: '#FACC15',
                                            opacity: 0.6,
                                            zIndex: 0,
                                            animation: 'expandBar 0.4s ease forwards',
                                        }}
                                    />
                                )}
                            </span>
                        )}

                        {/* " Tutoring." */}
                        {tw5.done && <span>{tw6.displayed}</span>}

                        {/* Blinking cursor */}
                        {!tw6.done && (
                            <span
                                style={{
                                    animation: 'blink 0.75s step-end infinite',
                                    borderRight: '3px solid #0EA569',
                                    marginLeft: '2px',
                                }}
                            />
                        )}
                    </h1>
                    <p
                        className="text-gray-500  text-sm max-w-2xl mx-auto text-center leading-relaxed"
                        style={{
                            opacity: tw3.done ? 1 : 0,
                            transition: 'opacity 0.6s ease',
                            transitionDelay: '0.2s',
                        }}
                    >
                       Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    </p>
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
            <style>{`
        @keyframes expandBar {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
        </>
    )
}