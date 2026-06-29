# Portfolio — Tester & DevOps

Trang portfolio cá nhân thay thế CV, làm bằng **React + Vite**.
Có **2 hồ sơ độc lập** dùng 2 đường link riêng để ứng tuyển 2 nơi khác nhau:

| Hồ sơ | Đường link | Màu nhấn |
|-------|-----------|----------|
| Tester | `…/#tester` | terracotta |
| DevOps | `…/#devops` | teal (xanh) |
| Trang chọn hồ sơ | `…/` (gốc) | — |

Ví dụ sau khi đưa lên mạng: `https://ten-cua-ban.vercel.app/#tester` gửi cho
chỗ tuyển Tester, `…/#devops` gửi cho chỗ tuyển DevOps. Người nhận chỉ thấy
đúng hồ sơ đó, không thấy hồ sơ kia.

## Chạy thử trên máy

```bash
npm install      # cài thư viện (chỉ làm lần đầu)
npm run dev      # chạy ở chế độ phát triển -> mở http://localhost:5173
```

## Build để đưa lên mạng

```bash
npm run build    # tạo thư mục dist/ chứa web tĩnh
npm run preview  # xem thử bản build
```

## Song ngữ Việt / Anh

Web có nút **VI / EN** (góc sidebar, thanh trên mobile, trang chọn hồ sơ).
Mỗi đoạn chữ trong [`src/data/profiles.js`](src/data/profiles.js) có 2 ngôn ngữ:

```js
tagline: { vi: 'Câu tiếng Việt...', en: 'English sentence...' }
```

→ **Sửa cả `vi` lẫn `en`.** Tên công nghệ giống nhau (Docker, SQL...) thì để 1 chuỗi.
Chữ giao diện (menu, nút...) nằm ở [`src/i18n/ui.js`](src/i18n/ui.js).

## Sửa thông tin cá nhân

👉 **Chủ yếu sửa 1 file:** [`src/data/profiles.js`](src/data/profiles.js)

- `personal` — tên, email, SĐT, GitHub, LinkedIn, ảnh, link CV.
- `profiles.tester` — nội dung tab Tester (giới thiệu, kỹ năng, kinh nghiệm, dự án).
- `profiles.devops` — nội dung tab DevOps.
- `education` — học vấn (dùng chung cả 2 tab).

Chỗ nào ghi "Điền..." là chỗ thay bằng thông tin thật của bạn.

### Thêm ảnh đại diện
Bỏ ảnh vào thư mục `public/` (vd `public/avatar.jpg`), rồi trong
`profiles.js` đặt `avatar: '/avatar.jpg'`.

### Thêm file CV PDF
Bỏ file vào `public/` (vd `public/cv.pdf`), rồi đặt `cvFile: '/cv.pdf'`.

## Đổi màu sắc
Mở [`src/index.css`](src/index.css), sửa biến `--accent` ở đầu file.

## Đưa web lên Internet (miễn phí)
- **Netlify / Vercel:** kéo thả thư mục `dist/` hoặc kết nối GitHub.
- **GitHub Pages:** dùng `npm run build` rồi đẩy thư mục `dist/`.
