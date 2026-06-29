import useReveal from '../hooks/useReveal.js'
import { useLang } from '../i18n/LangContext.jsx'

export default function Education({ education }) {
  const ref = useReveal()
  const { t, pick } = useLang()

  return (
    <section id="education" className="section">
      <div className="container reveal" ref={ref}>
        <span className="eyebrow">{t('edu_eyebrow')}</span>
        <h2 className="section__title">{t('edu_title')}</h2>

        <div className="edu__list">
          {education.map((e, i) => (
            <div className="edu__item" key={i}>
              <div className="edu__main">
                <h3 className="edu__school">{pick(e.school)}</h3>
                <p className="edu__major">{pick(e.major)}</p>
                {e.note && <p className="edu__note">{pick(e.note)}</p>}
              </div>
              <span className="edu__period">{e.period}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
