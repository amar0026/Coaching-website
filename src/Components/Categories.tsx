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
    <section
      id="programs"
      style={{
        background: '#fff',
        fontFamily: "'Inter', 'Poppins', sans-serif",
        padding: '72px 48px',
        minHeight: '560px',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* ── TWO-COLUMN LAYOUT ── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '60px',
            flexWrap: 'wrap',
          }}
        >

          {/* ── LEFT COLUMN ── */}
          <div style={{ flex: '1 1 420px', minWidth: 0 }}>

            {/* Eyebrow */}
            <p
              style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#0EA569',
                marginBottom: '12px',
                margin: '0 0 12px',
              }}
            >
              Our Programs
            </p>

            {/* Headline */}
            <h2
              style={{
                fontSize: '36px',
                fontWeight: 700,
                lineHeight: 1.22,
                color: '#111',
                margin: '0 0 14px',
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Programs for Every Learner
            </h2>

            {/* Subtitle */}
            <p
              style={{
                fontSize: '14px',
                color: '#6b7280',
                lineHeight: 1.75,
                maxWidth: '420px',
                margin: '0 0 10px',
              }}
            >
              Whether you're preparing for school exams, college academics, or competitive
              tests, we have specialized courses tailored to your needs.
            </p>

            {/* Yellow accent bar */}
            <div
              style={{
                width: '48px',
                height: '4px',
                borderRadius: '99px',
                background: '#FACC15',
                margin: '0 0 32px',
              }}
            />

            {/* Tab Buttons */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '28px', flexWrap: 'wrap' }}>
              {tabs.map((t, i) => {
                const isActive = active === i
                return (
                  <button
                    key={t.key}
                    onClick={() => setActive(i)}
                    style={{
                      padding: '9px 22px',
                      borderRadius: '8px',
                      border: isActive ? `1.5px solid ${t.color}` : '1px solid #d1d5db',
                      background: isActive ? t.color : '#fff',
                      color: isActive ? '#fff' : '#6b7280',
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.18s',
                      fontFamily: "'Poppins', sans-serif",
                      boxShadow: isActive ? `0 4px 14px ${t.color}35` : 'none',
                      transform: isActive ? 'translateY(-1px)' : 'translateY(0)',
                    }}
                  >
                    <span style={{ marginRight: '6px' }}>{t.icon}</span>
                    {t.label}
                  </button>
                )
              })}
            </div>

            {/* Tab description (below tabs, like image) */}
            <p
              style={{
                fontSize: '13px',
                color: '#6b7280',
                lineHeight: 1.75,
                maxWidth: '400px',
                margin: 0,
              }}
            >
              {tab.description}
            </p>
          </div>

          {/* ── RIGHT COLUMN ── Visual area */}
          <div
            style={{
              flex: '1 1 320px',
              position: 'relative',
              minHeight: '360px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Blue decorative card */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '230px',
                height: '230px',
                background: tab.color,
                borderRadius: '20px',
                transition: 'background 0.4s',
              }}
            />

            {/* Decorative dots */}
            <div
              style={{
                position: 'absolute',
                top: '14px',
                right: '248px',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: '#a3e635',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '2px',
                right: '24px',
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: '#d946ef',
              }}
            />

            {/* Stat card — Highlights count */}
            <div
              style={{
                position: 'absolute',
                bottom: '40px',
                left: 0,
                background: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '14px',
                padding: '14px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                zIndex: 2,
                minWidth: '160px',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: tab.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'background 0.4s',
                }}
              >
                <div
                  style={{
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.7)',
                  }}
                />
              </div>
              <div>
                <div
                  style={{
                    fontSize: '16px',
                    fontWeight: 700,
                    color: '#111',
                    lineHeight: 1.2,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  54.3K
                </div>
                <div style={{ fontSize: '11px', color: '#9ca3af', marginTop: '2px' }}>
                  Reach &nbsp;4.5%
                </div>
              </div>
            </div>

            {/* Faculty card */}
            <div
              style={{
                position: 'absolute',
                top: '158px',
                right: '-8px',
                background: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '14px',
                overflow: 'hidden',
                minWidth: '200px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                zIndex: 2,
              }}
            >
              {/* Card header — dark gradient */}
              <div
                style={{
                  background: 'linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)',
                  padding: '12px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(250,204,21,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px',
                    flexShrink: 0,
                  }}
                >
                  👨‍🏫
                </div>
                <div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: '12px',
                      fontWeight: 700,
                      color: '#fff',
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    Expert teachers
                  </p>
                  <p style={{ margin: 0, fontSize: '10px', color: 'rgba(255,255,255,0.5)' }}>
                    Meet your mentors
                  </p>
                </div>
                <span
                  style={{
                    marginLeft: 'auto',
                    fontSize: '10px',
                    color: 'rgba(255,255,255,0.4)',
                    cursor: 'pointer',
                  }}
                >
                  more
                </span>
              </div>

              {/* Faculty rows */}
              <div style={{ padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {faculty.map((f) => (
                  <div
                    key={f.avatar}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      cursor: 'pointer',
                    }}
                  >
                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: f.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '9px',
                        fontWeight: 700,
                        color: '#fff',
                        flexShrink: 0,
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      {f.avatar}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: '12px',
                          fontWeight: 600,
                          color: '#111',
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        {f.name}
                      </div>
                      <div
                        style={{
                          height: '3px',
                          width: '60px',
                          background: f.color,
                          borderRadius: '2px',
                          marginTop: '3px',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer button */}
              <div style={{ padding: '0 14px 12px' }}>
                <button
                  style={{
                    width: '100%',
                    padding: '8px',
                    borderRadius: '8px',
                    border: 'none',
                    background: '#0EA569',
                    color: '#fff',
                    fontSize: '11px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    fontFamily: "'Poppins', sans-serif",
                    boxShadow: '0 2px 10px #0EA56935',
                  }}
                >
                  Meet All Faculty →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM: Content card + highlights (below hero row) ── */}
        <div style={{ marginTop: '52px' }}>
          <div
            key={tab.key}
            style={{
              background: '#fff',
              border: `1.5px solid ${tab.color}30`,
              borderRadius: '24px',
              padding: '40px',
              boxShadow: `0 8px 40px ${tab.color}15`,
              animation: 'fadeSlide 0.35s ease forwards',
            }}
          >
            {/* Accent badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 16px',
                borderRadius: '99px',
                background: tab.light,
                color: tab.color,
                fontSize: '12px',
                fontWeight: 700,
                marginBottom: '18px',
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              <span>{tab.icon}</span> {tab.label} Program
            </div>

            <h3
              style={{
                fontSize: '22px',
                fontWeight: 700,
                color: '#111',
                margin: '0 0 10px',
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              {tab.heading}
            </h3>

            {/* Highlights grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '12px',
                marginTop: '20px',
              }}
            >
              {tab.highlights.map((h, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    background: tab.light,
                    fontSize: '13px',
                    fontWeight: 500,
                    color: '#374151',
                    animation: 'fadeSlide 0.4s ease forwards',
                    animationDelay: `${i * 60}ms`,
                  }}
                >
                  <span
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: tab.color,
                      color: '#fff',
                      fontSize: '11px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </span>
                  {h}
                </div>
              ))}
            </div>

        <button
  style={{
    marginTop: '28px',
    padding: '12px 28px',
    borderRadius: '12px',
    border: 'none',
    background: tab.color,
    color: '#fff',
    fontSize: '13px',
    fontWeight: 700,
    cursor: 'pointer',
    fontFamily: "'Poppins', sans-serif",
    boxShadow: `0 4px 20px ${tab.color}40`,
    transition: 'transform 0.2s, box-shadow 0.2s',
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'scale(1.04)'
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'scale(1)'
  }}
>
  Explore {tab.label} Courses →
</button>
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