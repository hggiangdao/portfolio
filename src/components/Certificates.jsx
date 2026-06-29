import useReveal from '../hooks/useReveal.js'
import { useLang } from '../i18n/LangContext.jsx'

export default function Certificates({ certificates }) {
  const ref = useReveal()
  const { t, pick } = useLang()

  if (!certificates || certificates.length === 0) return null

  return (
    <section id="certificates" className="section">
      <div className="container reveal" ref={ref}>
        <span className="eyebrow">{t('cert_eyebrow')}</span>
        <h2 className="section__title">{t('cert_title')}</h2>

        <div className="edu__list">
          {certificates.map((c, i) => (
            <div className="edu__item" key={i}>
              <div className="edu__main">
                <h3 className="edu__school">{pick(c.name)}</h3>
                <p className="edu__major">{pick(c.issuer)}</p>
                {c.link && (
                  <a
                    className="cert__link"
                    href={c.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t('cert_verify')}
                  </a>
                )}
              </div>
              <span className="edu__period">{c.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
