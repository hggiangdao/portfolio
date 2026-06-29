import useReveal from '../hooks/useReveal.js'
import { useLang } from '../i18n/LangContext.jsx'

export default function Skills({ profile }) {
  const ref = useReveal()
  const { t, pick } = useLang()

  return (
    <section id="skills" className="section section--alt">
      <div className="container reveal" ref={ref}>
        <span className="eyebrow">{t('skills_eyebrow')}</span>
        <h2 className="section__title">{t('skills_title')}</h2>
        <p className="section__subtitle">
          {t('skills_sub', { label: profile.label })}
        </p>

        <div className="skill-groups">
          {profile.skills.map((g, i) => (
            <div className="skill-group" key={i}>
              <h3 className="skill-group__title">{pick(g.group)}</h3>
              <div className="chips">
                {g.items.map((s, j) => (
                  <span className="chip" key={j}>
                    {pick(s)}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
