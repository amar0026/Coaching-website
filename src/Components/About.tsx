import { useEffect, useRef, useState } from 'react'

function useInView(threshold = 0.25) {
    const ref = useRef<HTMLDivElement>(null)
    const [inView, setInView] = useState(false)
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect() } },
            { threshold }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [threshold])
    return { ref, inView }
}

function useTypewriter(text: string, speed = 52, active = false) {
    const [displayed, setDisplayed] = useState('')
    const [done, setDone] = useState(false)
    useEffect(() => {
        if (!active) return
        setDisplayed('')
        setDone(false)
        let i = 0
        const interval = setInterval(() => {
            i++
            setDisplayed(text.slice(0, i))
            if (i >= text.length) { clearInterval(interval); setDone(true) }
        }, speed)
        return () => clearInterval(interval)
    }, [active, text, speed])
    return { displayed, done }
}

export default function AboutSection() {
    const { ref, inView } = useInView(0.2)
    const heading = 'Building Strong Foundations for Academic Success'
    const { displayed, done } = useTypewriter(heading, 40, inView)

    return (
        <section id="about"ref={ref} className="bg-white py-16 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto">



                <div className="flex flex-col md:flex-row items-center gap-12">

                    {/* ── LEFT: Image collage ── */}
                    <div
                        className="relative flex-shrink-0 w-full md:w-[420px] h-[340px]"
                        style={{
                            opacity: inView ? 1 : 0,
                            transform: inView ? 'translateX(0)' : 'translateX(-48px)',
                            transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
                        }}
                    >
                        {/* Sparkles */}
                        <div
                            className="absolute top-2 left-6 text-orange-500 text-6xl select-none"
                            style={{
                                zIndex: 50,
                                lineHeight: 1,
                                animation: inView ? 'sparkle 2s ease infinite' : 'none'
                            }}
                        >
                            ✦
                        </div>

                        <div
                            className="absolute top-8 left-16 text-orange-400 text-5xl select-none"
                            style={{
                                zIndex: 50,
                                animation: inView ? 'sparkle 2.4s ease 0.3s infinite' : 'none'
                            }}
                        >
                            ✦
                        </div>

                        <div
                            className="absolute bottom-16 left-2 text-green-500 text-4xl select-none"
                            style={{
                                zIndex: 30,
                                animation: inView ? 'sparkle 2.8s ease 0.6s infinite' : 'none'
                            }}
                        >
                            ✦
                        </div>
                        {/* Green background card */}
                        <div
                            className="absolute left-10 top-0 w-52 h-64 rounded-2xl overflow-hidden"
                            style={{
                                background: '#22c55e',
                                opacity: inView ? 1 : 0,
                                transform: inView ? 'translateY(0) rotate(-2deg)' : 'translateY(30px) rotate(-2deg)',
                                transition: 'opacity 0.6s ease 0.25s, transform 0.6s ease 0.25s',
                            }}
                        >
                            <img
                                src="https://res.cloudinary.com/dquki4xol/image/upload/v1781087374/depositphotos_115261340-stock-photo-4-year-old-happy-little-removebg-preview_abefd5.png"
                                alt="Student 1"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>

                        {/* Dots */}
                        <div className="absolute top-6 right-28 w-5 h-5 rounded-full" style={{ background: '#5eead4' }} />
                        <div className="absolute top-12 right-20 w-3 h-3 rounded-full" style={{ background: '#93c5fd' }} />

                        {/* Yellow foreground card */}
                        <div
                            className="absolute left-50  top-24 w-44 h-48 rounded-2xl overflow-hidden shadow-xl"
                            style={{
                                background: '#facc15',
                                opacity: inView ? 1 : 0,
                                transform: inView ? 'translateY(0) rotate(2deg)' : 'translateY(40px) rotate(2deg)',
                                transition: 'opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s',
                            }}
                        >
                            <img
                                src="https://res.cloudinary.com/dquki4xol/image/upload/v1781087398/istockphoto-1306352637-612x612-removebg-preview_nukurj.png"
                                alt="Student 2"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>

                        {/* Stats floating card */}
                        <div
                            className="absolute bottom-0 left-0 bg-white rounded-xl shadow-lg px-4 py-3 w-52 border border-gray-100"
                            style={{
                                zIndex: 10,
                                opacity: inView ? 1 : 0,
                                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                                transition: 'opacity 0.6s ease 0.6s, transform 0.6s ease 0.6s',
                            }}
                        >
                            <p className="text-sm font-black text-gray-900">+80.2%</p>
                            <p className="text-xs text-gray-500 mt-0.5">Last 7days Student Growth</p>
                            <div className="mt-2 w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full rounded-full"
                                    style={{
                                        background: '#0EA569',
                                        width: inView ? '80%' : '0%',
                                        transition: 'width 1.2s ease 0.9s',
                                    }}
                                />
                            </div>
                            <p className="text-xs text-gray-400 mt-1.5">50.25% Increase From Last Week</p>
                        </div>
                    </div>

                    <div
                        className="flex-1 max-w-xl"
                        style={{
                            opacity: inView ? 1 : 0,
                            transform: inView ? 'translateX(0)' : 'translateX(48px)',
                            transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
                        }}
                    >
                        <p
                            className="text-sm font-semibold mb-3 tracking-wide uppercase"
                            style={{ color: '#0EA569' }}
                        >
                            About Us
                        </p>

                        <h2
                            className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-5 min-h-[6rem] md:min-h-[7rem]"
                            style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                            {displayed}
                            {!done && (
                                <span
                                    style={{
                                        display: 'inline-block',
                                        width: '3px',
                                        height: '1em',
                                        background: '#0EA569',
                                        marginLeft: '3px',
                                        verticalAlign: 'middle',
                                        animation: 'blink 0.75s step-end infinite',
                                    }}
                                />
                            )}
                        </h2>

                        <p
                            className="text-gray-500 text-base leading-relaxed mb-7"
                            style={{
                                opacity: done ? 1 : 0,
                                transition: 'opacity 0.6s ease 0.2s',
                            }}
                        >
                            We are committed to providing quality education in a supportive and
                            inspiring environment. Our experienced faculty, modern teaching methods,
                            and student-focused approach help learners build strong concepts,
                            confidence, and academic excellence. We believe that every student has the
                            potential to achieve success with the right guidance and dedication.
                        </p>

                      <button
  className="px-6 py-3 rounded-lg font-bold text-white text-sm bg-[#1a1a1a] transition-all duration-300 hover:bg-[#0EA569] hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
  style={{
    fontFamily: "'Poppins', sans-serif",
    opacity: done ? 1 : 0,
  }}
>
  Learn More
</button>
                        {/* About Highlight Box */}
                        <div
                            className="mt-8 flex items-start gap-4 rounded-2xl px-5 py-4 border"
                            style={{
                                background: '#f0fdf4',
                                borderColor: '#bbf7d0',
                                opacity: done ? 1 : 0,
                                transform: done ? 'translateY(0)' : 'translateY(16px)',
                                transition:
                                    'opacity 0.6s ease 0.55s, transform 0.6s ease 0.55s',
                            }}
                        >
                            <span className="text-2xl mt-0.5">🎓</span>
                            <div>
                                <p
                                    className="font-black text-gray-900 text-base"
                                    style={{ fontFamily: "'Poppins', sans-serif" }}
                                >
                                    Dedicated to Academic Excellence
                                </p>
                                <p className="text-sm text-gray-500 mt-0.5 leading-relaxed">
                                    Our mission is to empower students with knowledge, confidence, and the
                                    skills they need to excel in academics and future careers.
                                </p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0.7; transform: scale(1) rotate(0deg); }
          50%       { opacity: 1; transform: scale(1.5) rotate(20deg); }
        }
      `}</style>
        </section>
    )
}