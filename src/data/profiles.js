// =============================================================
//  THÔNG TIN CỦA BẠN — CHỈ CẦN SỬA FILE NÀY
// =============================================================
//  Web song ngữ: mỗi đoạn chữ có 2 ngôn ngữ -> { vi: '...', en: '...' }
//  Sửa CẢ HAI. Chỗ nào là tên công nghệ giống nhau (Docker, SQL...)
//  thì để 1 chuỗi bình thường cũng được.
//  Chỗ ghi "Điền..." / "Fill..." là chỗ thay bằng thông tin thật.
// =============================================================

// ---- Thông tin chung ----
export const personal = {
  name: 'Đào Hương Giang',
  // Ảnh: bỏ file vào public/ (đặt tên avatar.jpg). Trống = hiện chữ cái đầu.
  avatar: '/avatar.jpg',
  email: 'daohuonggiang389@gmail.com',
  phone: '0387478880',
  facebook: 'https://www.facebook.com/daohuonggianggg',
  github: '',
  linkedin: '',
  location: { vi: 'Thành phố Hồ Chí Minh', en: 'Ho Chi Minh City' },
  // Link CV PDF (tuỳ chọn): bỏ vào public/ rồi để '/cv.pdf'
  cvFile: '',
}

// ---- Hai hồ sơ (2 đường link riêng) ----
export const profiles = {
  tester: {
    label: 'Tester',
    role: 'Software Tester / QA Engineer',
    accent: '#b04a2f',
    accentSoft: '#f4e9e3',
    accentHover: '#9a3d25',
    tagline: {
      vi: 'Manual QA Engineer với hơn 1 năm kinh nghiệm kiểm thử Web App, Web3 Wallet và sản phẩm Fintech. Có kinh nghiệm thiết kế test case, API testing và phối hợp với đội phát triển theo Agile/Scrum.',
      en: 'Manual QA Engineer with 1+ year of experience testing Web Apps, Web3 Wallets and Fintech products. Skilled in test case design, API testing, and collaborating with dev teams in Agile/Scrum.',
    },
    summary: {
      vi: 'Sinh viên ngành Mạng máy tính & Truyền thông Dữ liệu tại UIT. Có hơn 1 năm kinh nghiệm thực tập và làm việc trong lĩnh vực Software Testing. Đã tham gia kiểm thử Web3 Wallet, Web App và Bot đầu tư; thành thạo thiết kế test case, API testing và làm việc theo Agile/Scrum. Có khả năng học nhanh, thích nghi tốt và luôn chú trọng chất lượng sản phẩm.',
      en: 'A student majoring in Computer Networks & Data Communications at UIT, with over a year of internship and hands-on experience in Software Testing. I have tested Web3 Wallets, Web Apps and an investment Bot; proficient in test case design, API testing and working in Agile/Scrum. A fast learner who adapts well and always focuses on product quality.',
    },

    stats: [
      { value: '1+', label: { vi: 'Năm kinh nghiệm kiểm thử', en: 'Years in software testing' } },
      { value: '2', label: { vi: 'Chứng chỉ Coursera', en: 'Coursera certificates' } },
      { value: '8.04', label: { vi: 'GPA / 10', en: 'GPA / 10' } },
    ],

    skills: [
      {
        group: { vi: 'Kiểm thử', en: 'Testing' },
        items: [
          'Manual Testing',
          'Functional Testing',
          'Regression Testing',
          'Smoke Testing',
          'API Testing',
          { vi: 'Thiết kế Test Case', en: 'Test Case Design' },
          { vi: 'Báo cáo lỗi (Bug Reporting)', en: 'Bug Reporting' },
        ],
      },
      {
        group: { vi: 'Công cụ', en: 'Tools' },
        items: ['Postman', 'Git/GitHub', 'Playwright'],
      },
      {
        group: { vi: 'Kỹ thuật & CSDL', en: 'Technical & Databases' },
        items: ['REST API', 'JSON', 'SQL', 'MySQL', 'MongoDB', 'Node.js (Basic)'],
      },
      {
        group: { vi: 'DevOps & Quy trình', en: 'DevOps & Process' },
        items: ['Docker', 'CI/CD', 'Linux', 'Agile/Scrum'],
      },
    ],

    experience: [
      {
        title: { vi: 'Thực tập sinh Kiểm thử (QA Intern)', en: 'QA / Software Tester Intern' },
        org: {
          vi: 'Công ty công nghệ (sản phẩm Web3 / Fintech)',
          en: 'Technology company (Web3 / Fintech products)',
        },
        period: '2024 — Hiện tại',
        bullets: [
          {
            vi: 'Kiểm thử sản phẩm ví Web3: nắm vững nghiệp vụ ví, kiểm thử các luồng giao dịch và tính năng chính.',
            en: 'Tested a Web3 wallet product: mastered wallet business logic, verified transaction flows and core features.',
          },
          {
            vi: 'Xây dựng bộ test case bài bản cho web app và bot trong lĩnh vực đầu tư.',
            en: 'Built structured test cases for an investment web app and its bot.',
          },
          {
            vi: 'Làm việc theo quy trình Scrum, phối hợp chặt với đội phát triển; dùng Git/GitHub để quản lý mã nguồn.',
            en: 'Worked in a Scrum process, collaborating closely with the dev team; used Git/GitHub for source control.',
          },
          {
            vi: 'Tận dụng công cụ AI để tăng tốc kiểm thử; học hỏi và thích ứng nhanh với sản phẩm, quy trình mới.',
            en: 'Used AI tools to speed up testing; learned and adapted quickly to new products and processes.',
          },
        ],
      },
    ],

    projects: [
      {
        name: { vi: 'Web App & Bot lĩnh vực đầu tư', en: 'Investment Web App & Bot' },
        role: 'Automation Tester',
        bullets: [
          {
            vi: 'Xây dựng và thực thi test case cho Web App và Bot trong lĩnh vực đầu tư.',
            en: 'Built and executed test cases for an investment Web App and Bot.',
          },
          {
            vi: 'Viết kịch bản kiểm thử tự động bằng Playwright cho các luồng nghiệp vụ chính.',
            en: 'Wrote automated test scripts with Playwright for the main business flows.',
          },
          {
            vi: 'Thực hiện Manual Testing để xác minh chức năng trước và sau khi tự động hoá.',
            en: 'Performed manual testing to verify features before and after automation.',
          },
          {
            vi: 'Phối hợp với đội phát triển để xác nhận lỗi và kiểm thử lại sau khi sửa.',
            en: 'Worked with the dev team to confirm bugs and re-test after fixes.',
          },
        ],
        tags: ['Playwright', 'Automation Testing', 'Manual Testing', 'Web App', 'Bot'],
        link: '',
      },
      {
        name: { vi: 'Sản phẩm ví Web3', en: 'Web3 Wallet Product' },
        role: 'Manual QA Tester',
        bullets: [
          {
            vi: 'Kiểm thử các tính năng của ví Web3 như WalletConnect, Staking, Transfer và Subscription.',
            en: 'Tested Web3 wallet features such as WalletConnect, Staking, Transfer and Subscription.',
          },
          {
            vi: 'Thiết kế và thực hiện test case cho các nghiệp vụ của sản phẩm.',
            en: "Designed and executed test cases for the product's business flows.",
          },
          {
            vi: 'Kiểm thử API bằng Postman để xác minh dữ liệu và luồng xử lý.',
            en: 'Tested APIs with Postman to verify data and processing flows.',
          },
          {
            vi: 'Phân tích yêu cầu và xác minh kết quả kiểm thử.',
            en: 'Analyzed requirements and validated test results.',
          },
        ],
        tags: ['Web3', 'Manual Testing', 'Test Case', 'API Testing', 'Postman'],
        link: '',
      },
    ],

    certificates: [
      {
        name: 'Software Testing and Automation (Specialization)',
        issuer: {
          vi: 'University of Minnesota · Coursera · 4 khoá học',
          en: 'University of Minnesota · Coursera · 4 courses',
        },
        date: '07/2025',
        link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/9DBF59Q7T0X0',
      },
      {
        name: 'Foundations of Software Testing and Validation',
        issuer: 'University of Leeds · Coursera',
        date: '07/2025',
        link: 'https://www.coursera.org/account/accomplishments/verify/8VFCJWKWGKDN',
      },
    ],
  },

  devops: {
    label: 'DevOps',
    role: 'DevOps Engineer',
    accent: '#1f6e74',
    accentSoft: '#e3eeef',
    accentHover: '#185a5f',
    tagline: {
      vi: 'Tự động hoá build, deploy và vận hành hệ thống ổn định, nhanh chóng.',
      en: 'Automating builds, deploys and operations for fast, reliable systems.',
    },
    summary: {
      vi: 'Điền 2-3 câu giới thiệu bản thân theo hướng DevOps. Ví dụ: làm đồ án tốt nghiệp về CI/CD, container hoá ứng dụng với Docker, tự động hoá quy trình triển khai...',
      en: 'Write 2-3 sentences about yourself as a DevOps engineer. For example: a graduation project on CI/CD, containerizing apps with Docker, automating deployments...',
    },

    stats: [
      { value: '5+', label: { vi: 'Dự án đã triển khai', en: 'Projects deployed' } },
      { value: '10+', label: { vi: 'Công nghệ DevOps', en: 'DevOps technologies' } },
      { value: '1', label: { vi: 'Đồ án tốt nghiệp CI/CD', en: 'CI/CD graduation project' } },
    ],

    skills: [
      {
        group: { vi: 'CI/CD & Tự động hoá', en: 'CI/CD & Automation' },
        items: ['CI/CD', 'GitHub Actions', 'Jenkins'],
      },
      {
        group: { vi: 'Container & Hạ tầng', en: 'Containers & Infrastructure' },
        items: ['Docker', { vi: 'Kubernetes (cơ bản)', en: 'Kubernetes (basic)' }, 'Linux'],
      },
      {
        group: { vi: 'Cloud & Công cụ', en: 'Cloud & Tools' },
        items: ['Cloud (AWS / GCP)', 'Git'],
      },
    ],

    experience: [
      {
        title: { vi: 'Đồ án tốt nghiệp — Hệ thống CI/CD', en: 'Graduation Project — CI/CD System' },
        org: { vi: 'Điền tên trường', en: 'Fill in your university' },
        period: '2024 — 2025',
        bullets: [
          { vi: 'Điền nội dung đồ án: ví dụ xây dựng pipeline CI/CD tự động build & deploy.', en: 'Fill in your project: e.g. built a CI/CD pipeline that auto builds & deploys.' },
          { vi: 'Container hoá ứng dụng bằng Docker, triển khai lên server/cloud.', en: 'Containerized the app with Docker, deployed to a server/cloud.' },
          { vi: 'Tự động hoá kiểm thử và phát hành, giảm thời gian deploy.', en: 'Automated testing and releases, cutting deployment time.' },
        ],
      },
    ],

    projects: [
      {
        name: { vi: 'Điền tên đồ án / dự án DevOps', en: 'Fill in a DevOps project' },
        description: {
          vi: 'Mô tả ngắn: kiến trúc, công nghệ (Docker, CI/CD, cloud...), kết quả đạt được.',
          en: 'Short description: architecture, tech (Docker, CI/CD, cloud...), and results.',
        },
        tags: ['Docker', 'CI/CD', 'Linux'],
        link: '',
      },
    ],

    certificates: [],
  },
}

// ---- Học vấn (dùng chung) ----
export const education = [
  {
    school: {
      vi: 'Trường Đại học Công nghệ Thông tin, ĐHQG-HCM',
      en: 'University of Information Technology, VNU-HCM',
    },
    major: {
      vi: 'Mạng máy tính & Truyền thông Dữ liệu',
      en: 'Computer Networks & Data Communications',
    },
    period: '2022 — 2026',
    note: { vi: 'GPA: 8.04 / 10 — Loại Giỏi', en: 'GPA: 8.04 / 10 — Very Good' },
  },
]

// ---- Đánh giá / nhận xét (dùng chung). Để [] = ẩn mục này. ----
// Muốn hiện lại thì thêm phần tử: { quote: { vi, en }, name, role: { vi, en } }
export const testimonials = []
