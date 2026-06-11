const quickLinks = ['Home', 'About Us', 'Courses', 'Faculty', 'Contact']

const courses = [
  'School Coaching',
  'JEE Preparation',
  'NEET Preparation',
  'Spoken English',
]

const contactInfo = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    text: 'Durgapur, West Bengal, India',
    hoverColor: '#f97316',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    text: '+91 98765 43210',
    hoverColor: '#22c55e',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    text: 'info@yourcoachingcenter.com',
    hoverColor: '#06b6d4',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    text: 'www.yourcoachingcenter.com',
    hoverColor: '#a855f7',
  },
]

export default function Footer() {
  return (
    <footer   id="contact" style={{ background: '#0a1628' }}>

    

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* ── Col 1: Brand ── */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="mb-4">
              <img
                src="https://res.cloudinary.com/dquki4xol/image/upload/v1781085670/Onlite-logo_bdpcjy.png"
                alt="Logo"
                className="h-12 w-auto object-contain"
              />
            </div>

            <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>
              Providing quality education and personalized guidance to help students achieve
              academic excellence and career success.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {/* Facebook */}
              <a href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:!bg-blue-600"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="#94a3b8" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:!bg-pink-600"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:!bg-red-600"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="#94a3b8" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0a1628"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:!bg-blue-700"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="#94a3b8" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* ── Col 2: Quick Links ── */}
          <div>
            <h4 className="text-white font-bold text-base mb-5"
              >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#"
                    className="text-sm transition-colors hover:text-white flex items-center gap-2 group"
                    style={{ color: '#94a3b8' }}>
                    <span className="w-1 h-1 rounded-full flex-shrink-0 transition-all group-hover:w-2"
                      style={{ background: '#06b6d4' }} />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Courses ── */}
          <div>
            <h4 className="text-white font-bold text-base mb-5"
              >
              Courses
            </h4>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course}>
                  <a href="#"
                    className="text-sm transition-colors hover:text-white flex items-center gap-2 group"
                    style={{ color: '#94a3b8' }}>
                    <span className="w-1 h-1 rounded-full flex-shrink-0 transition-all group-hover:w-2"
                      style={{ background: '#06b6d4' }} />
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Contact Info ── */}
          <div>
            <h4 className="text-white font-bold text-base mb-5"
           >
              Contact Info
            </h4>
            <ul className="space-y-3">
              {contactInfo.map((item, i) => (
                <li key={i}>
                  <a href="#"
                    className="flex items-center gap-3 text-sm group transition-all"
                    style={{ color: '#94a3b8' }}>
                    <span
                      className="flex-shrink-0 transition-all duration-300 group-hover:scale-125"
                      style={{ color: '#94a3b8' }}
                      onMouseEnter={e => (e.currentTarget.style.color = item.hoverColor)}
                      onMouseLeave={e => (e.currentTarget.style.color = '#94a3b8')}
                    >
                      {item.icon}
                    </span>
                    <span className="leading-relaxed transition-colors duration-300 group-hover:text-white">
                      {item.text}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-6xl mx-auto px-6 py-4 text-center">
          <p className="text-sm" style={{ color: '#64748b' }}>
            © 2026 Your Coaching Center. All Rights Reserved.
          </p>
        </div>
      </div>

    </footer>
  )
}