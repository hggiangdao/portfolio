import useReveal from '../hooks/useReveal.js'
import { useLang } from '../i18n/LangContext.jsx'
import { MailIcon, PhoneIcon, FacebookIcon } from './icons.jsx'

// Bỏ "https://", "www." để hiển thị gọn
const clean = (url) => url.replace(/^https?:\/\//, '').replace(/^www\./, '')

export default function Contact({ personal }) {
  const ref = useReveal()
  const { t } = useLang()

  const items = [
    {
      label: t('contact_email'),
      value: personal.email,
      display: personal.email,
      href: `mailto:${personal.email}`,
      Icon: MailIcon,
    },
    {
      label: t('contact_phone'),
      value: personal.phone,
      display: personal.phone,
      href: `tel:${personal.phone}`,
      Icon: PhoneIcon,
    },
    {
      label: t('contact_facebook'),
      value: personal.facebook,
      display: personal.facebook ? clean(personal.facebook) : '',
      href: personal.facebook,
      Icon: FacebookIcon,
    },
  ].filter((i) => i.value)

  return (
    <section id="contact" className="section">
      <div className="reveal" ref={ref}>
        <span className="eyebrow">{t('contact_eyebrow')}</span>
        <h2 className="section__title">{t('contact_title')}</h2>
        <p className="section__subtitle">{t('contact_sub')}</p>

        <ul className="contact__list">
          {items.map(({ label, display, href, Icon }) => (
            <li key={label}>
              <a
                className="contact__row"
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                <span className="contact__row-icon">
                  <Icon />
                </span>
                <span className="contact__row-text">
                  <span className="contact__row-label">{label}</span>
                  <span className="contact__row-value">{display}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
