import { useEffect, useState } from 'react'

// Đọc route từ hash URL: #tester / #devops. Khác đi -> null (trang chọn hồ sơ)
function getRoute() {
  const h = window.location.hash.replace(/^#\/?/, '')
  return h === 'tester' || h === 'devops' ? h : null
}

export default function useRoute() {
  const [route, setRoute] = useState(getRoute())

  useEffect(() => {
    const onHash = () => setRoute(getRoute())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  return route
}
