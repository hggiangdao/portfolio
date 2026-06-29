import { personal, profiles } from '../data/profiles.js'
import { useLang } from '../i18n/LangContext.jsx'
import LangToggle from './LangToggle.jsx'

export default function Landing() {
  const { t, pick } = useLang()
  const initial = personal.name?.trim()?.charAt(0)?.toUpperCase() || 'P'
  const cards = [
    { key: 'tester', ...profiles.tester },
    { key: 'devops', ...profiles.devops },
  ]

  return (
    <div className="landing">
      <LangToggle className="landing__lang" />

      <div className="landing__inner">
        <div className="landing__avatar">
          {personal.avatar ? (
            <img src={personal.avatar} alt={personal.name} />
          ) : (
            <span className="landing__avatar-fallback">{initial}</span>
          )}
        </div>

        <h1 className="landing__name">{personal.name}</h1>
        <p className="landing__sub">{t('landing_sub')}</p>

        <div className="landing__cards">
          {cards.map((c) => (
            <a
              key={c.key}
              className="lcard"
              href={`/${c.key}`}
              style={{ '--accent': c.accent, '--accent-soft': c.accentSoft }}
            >
              <span className="lcard__label">{c.label}</span>
              <span className="lcard__role">{c.role}</span>
              <span className="lcard__tag">{pick(c.tagline)}</span>
              <span className="lcard__cta">{t('landing_cta')}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
