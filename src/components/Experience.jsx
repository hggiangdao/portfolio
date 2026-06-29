import useReveal from '../hooks/useReveal.js'
import { useLang } from '../i18n/LangContext.jsx'

export default function Experience({ profile }) {
  const ref = useReveal()
  const { t, pick } = useLang()

  return (
    <section id="experience" className="section">
      <div className="container reveal" ref={ref}>
        <span className="eyebrow">{t('exp_eyebrow')}</span>
        <h2 className="section__title">{t('exp_title')}</h2>
        <p className="section__subtitle">
          {t('exp_sub', { label: profile.label })}
        </p>

        <div className="timeline">
          {profile.experience.map((exp, i) => (
            <div className="timeline__item" key={i}>
              <div className="timeline__dot" />
              <div className="timeline__card">
                <div className="timeline__top">
                  <h3 className="timeline__title">{pick(exp.title)}</h3>
                  <span className="timeline__period">{exp.period}</span>
                </div>
                <p className="timeline__org">{pick(exp.org)}</p>
                <ul className="timeline__bullets">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{pick(b)}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
