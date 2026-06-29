import { useLang } from '../i18n/LangContext.jsx'

export default function Footer({ personal }) {
  const { t } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>
          © {year} {personal.name}. {t('footer')}
        </span>
        <div className="footer__links">
          {personal.facebook && (
            <a href={personal.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
          )}
          {personal.github && (
            <a href={personal.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
          {personal.linkedin && (
            <a href={personal.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}
