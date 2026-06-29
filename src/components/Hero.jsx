import { scrollToHash } from '../lib/nav.js'
import { useLang } from '../i18n/LangContext.jsx'

export default function Hero({ personal, profile }) {
  const { t, pick } = useLang()

  return (
    <section className="hero">
      <span className="eyebrow">{profile.role}</span>
      <h1 className="hero__title">
        {t('hero_im')} <em className="hero__name">{personal.name}</em>
      </h1>
      <p className="hero__tagline">{pick(profile.tagline)}</p>

      <div className="hero__actions">
        <a
          href="#contact"
          className="btn btn--primary"
          onClick={(e) => scrollToHash(e, '#contact')}
        >
          {t('hero_contact')}
        </a>
        {personal.cvFile ? (
          <a
            href={personal.cvFile}
            className="btn btn--ghost"
            target="_blank"
            rel="noreferrer"
          >
            {t('hero_cv')}
          </a>
        ) : (
          <a
            href="#projects"
            className="btn btn--ghost"
            onClick={(e) => scrollToHash(e, '#projects')}
          >
            {t('hero_projects')}
          </a>
        )}
      </div>
    </section>
  )
}
