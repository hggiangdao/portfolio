import useReveal from '../hooks/useReveal.js'
import { useLang } from '../i18n/LangContext.jsx'

export default function About({ profile }) {
  const ref = useReveal()
  const { t, pick } = useLang()

  return (
    <section id="about" className="section">
      <div className="container reveal" ref={ref}>
        <span className="eyebrow">{t('about_eyebrow')}</span>
        <h2 className="section__title">{t('about_title')}</h2>
        <p className="about__text">{pick(profile.summary)}</p>

        {profile.stats?.length > 0 && (
          <div className="stats">
            {profile.stats.map((s, i) => (
              <div className="stat" key={i}>
                <span className="stat__value">{s.value}</span>
                <span className="stat__label">{pick(s.label)}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
