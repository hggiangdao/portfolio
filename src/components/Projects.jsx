import useReveal from '../hooks/useReveal.js'
import { useLang } from '../i18n/LangContext.jsx'

export default function Projects({ profile }) {
  const ref = useReveal()
  const { t, pick } = useLang()

  return (
    <section id="projects" className="section">
      <div className="reveal" ref={ref}>
        <span className="eyebrow">{t('projects_eyebrow')}</span>
        <h2 className="section__title">{t('projects_title')}</h2>
        <p className="section__subtitle">
          {t('projects_sub', { label: profile.label })}
        </p>

        <div className="hcards">
          {profile.projects.map((p, i) => {
            const Wrapper = p.link ? 'a' : 'div'
            const linkProps = p.link
              ? { href: p.link, target: '_blank', rel: 'noreferrer' }
              : {}
            return (
              <Wrapper className="hcard" key={i} {...linkProps}>
                <span className="hcard__num">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="hcard__body">
                  <h3 className="hcard__title">
                    {pick(p.name)}
                    {p.link && <span className="hcard__arrow">→</span>}
                  </h3>
                  {p.role && <span className="hcard__role">{pick(p.role)}</span>}

                  {p.bullets ? (
                    <ul className="hcard__bullets">
                      {p.bullets.map((b, k) => (
                        <li key={k}>{pick(b)}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="hcard__desc">{pick(p.description)}</p>
                  )}

                  <div className="hcard__tags">
                    {p.tags.map((tg) => (
                      <span className="tag" key={tg}>
                        {tg}
                      </span>
                    ))}
                  </div>
                </div>
              </Wrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
