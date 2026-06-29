import {
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from './icons.jsx'
import LangToggle from './LangToggle.jsx'
import { scrollToHash } from '../lib/nav.js'
import { useLang } from '../i18n/LangContext.jsx'
import { testimonials } from '../data/profiles.js'

const NAV = [
  { href: '#about', key: 'nav_about' },
  { href: '#skills', key: 'nav_skills' },
  { href: '#experience', key: 'nav_experience' },
  { href: '#projects', key: 'nav_projects' },
  { href: '#testimonials', key: 'nav_testimonials' },
  { href: '#contact', key: 'nav_contact' },
]

export default function Sidebar({ personal, profile, open, onClose }) {
  const { t } = useLang()
  const initial = personal.name?.trim()?.charAt(0)?.toUpperCase() || 'P'

  // Ẩn mục "Đánh giá" trong menu nếu không có testimonial
  const navItems = NAV.filter(
    (l) => l.href !== '#testimonials' || testimonials.length > 0,
  )

  const socials = [
    { href: personal.facebook, Icon: FacebookIcon, label: 'Facebook' },
    { href: personal.github, Icon: GithubIcon, label: 'GitHub' },
    { href: personal.linkedin, Icon: LinkedinIcon, label: 'LinkedIn' },
    {
      href: personal.email ? `mailto:${personal.email}` : '',
      Icon: MailIcon,
      label: 'Email',
    },
  ].filter((s) => s.href)

  const onNav = (e, href) => {
    scrollToHash(e, href)
    onClose()
  }

  return (
    <>
      <div
        className={`sidebar__overlay ${open ? 'is-open' : ''}`}
        onClick={onClose}
      />

      <aside className={`sidebar ${open ? 'is-open' : ''}`}>
        <div className="sidebar__top">
          <a
            href="#top"
            onClick={(e) => onNav(e, '#top')}
            className="sidebar__avatar"
          >
            {personal.avatar ? (
              <img src={personal.avatar} alt={personal.name} />
            ) : (
              <span className="sidebar__avatar-fallback">{initial}</span>
            )}
          </a>

          <h1 className="sidebar__name">{personal.name}</h1>
          <p className="sidebar__role">{profile.role}</p>

          <LangToggle className="sidebar__lang" />
        </div>

        <nav className="sidebar__nav">
          {navItems.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => onNav(e, l.href)}>
              {t(l.key)}
            </a>
          ))}
        </nav>

        {socials.length > 0 && (
          <div className="sidebar__social">
            {socials.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                title={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                <Icon />
              </a>
            ))}
          </div>
        )}
      </aside>
    </>
  )
}
