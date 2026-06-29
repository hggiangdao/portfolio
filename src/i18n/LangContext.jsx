import { createContext, useContext, useEffect, useState } from 'react'
import { ui } from './ui.js'

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState(
    () => localStorage.getItem('lang') || 'vi',
  )

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  // Chữ giao diện. Thay {label} nếu có truyền vào.
  const t = (key, vars) => {
    let str = (ui[lang] && ui[lang][key]) ?? ui.vi[key] ?? key
    if (vars) {
      for (const k of Object.keys(vars)) {
        str = str.replace(`{${k}}`, vars[k])
      }
    }
    return str
  }

  // Chọn ngôn ngữ cho 1 giá trị nội dung: { vi, en } -> chuỗi.
  // Chuỗi thường (vd "Docker") thì trả về nguyên.
  const pick = (val) =>
    val && typeof val === 'object' && !Array.isArray(val)
      ? val[lang] ?? val.vi
      : val

  const toggle = () => setLang((l) => (l === 'vi' ? 'en' : 'vi'))

  return (
    <LangContext.Provider value={{ lang, setLang, toggle, t, pick }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
