import { useLang } from '../i18n/LangContext.jsx'

export default function LangToggle({ className = '' }) {
  const { lang, setLang } = useLang()

  return (
    <div className={`langtoggle ${className}`} role="group" aria-label="Language">
      <button
        className={lang === 'vi' ? 'is-active' : ''}
        aria-pressed={lang === 'vi'}
        onClick={() => setLang('vi')}
      >
        VI
      </button>
      <button
        className={lang === 'en' ? 'is-active' : ''}
        aria-pressed={lang === 'en'}
        onClick={() => setLang('en')}
      >
        EN
      </button>
    </div>
  )
}
