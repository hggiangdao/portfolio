// Cuộn mượt tới một section trong trang mà KHÔNG đổi hash (giữ nguyên route).
export function scrollToHash(e, hash) {
  e.preventDefault()
  if (hash === '#top' || hash === '#') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
}
