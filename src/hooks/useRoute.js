import { useEffect, useState } from 'react'

// Đọc route theo đường dẫn (path) — KHÔNG dùng #.
//   /            -> null  (trang home chọn hồ sơ)
//   /tester      -> tester
//   /devops      -> devops
function getRoute() {
  const p = window.location.pathname.replace(/\/+$/, '').toLowerCase()
  if (p === '/tester') return 'tester'
  if (p === '/devops') return 'devops'
  return null
}

export default function useRoute() {
  const [route, setRoute] = useState(getRoute())

  useEffect(() => {
    const onPop = () => setRoute(getRoute())
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  return route
}
