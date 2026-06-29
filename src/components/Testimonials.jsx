import useReveal from '../hooks/useReveal.js'
import { useLang } from '../i18n/LangContext.jsx'

export default function Testimonials({ testimonials }) {
  const ref = useReveal()
  const { t, pick } = useLang()

  if (!testimonials || testimonials.length === 0) return null

  return (
    <section id="testimonials" className="section">
      <div className="container reveal" ref={ref}>
        <span className="eyebrow">{t('testi_eyebrow')}</span>
        <h2 className="section__title">{t('testi_title')}</h2>
        <p className="section__subtitle">{t('testi_sub')}</p>

        <div className="testi__grid">
          {testimonials.map((tt, i) => (
            <figure className="testi" key={i}>
              <div className="testi__quote-mark">”</div>
              <blockquote className="testi__quote">{pick(tt.quote)}</blockquote>
              <figcaption className="testi__author">
                <span className="testi__name">{tt.name}</span>
                <span className="testi__role">{pick(tt.role)}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
