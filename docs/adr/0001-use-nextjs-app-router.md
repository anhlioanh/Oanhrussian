# 1. Sử dụng Next.js (App Router), TypeScript và Feature-First Architecture

* **Trạng thái:** Accepted
* **Ngày:** 05/08/2026

## Bối cảnh
Ứng dụng OanhRussian yêu cầu hiệu năng cao, tối ưu SEO vượt trội cho việc tiếp cận người dùng, hỗ trợ Mobile First và có khả năng mở rộng hàng trăm bài học/từ vựng mà không nợ kỹ thuật.

## Các phương án đã cân nhắc
1. **React SPA (Vite) + Express Backend:** Nhẹ, nhưng SEO kém, cấu hình SSR/SSG phức tạp.
2. **Next.js Pages Router:** Ổn định nhưng kiến trúc cũ, quản lý layout và data fetching không tối ưu bằng App Router.
3. **Next.js App Router + TypeScript + Feature-First Architecture:** Tối ưu SEO tĩnh/động, Server Components giúp tải trang cực nhanh, phân chia mã nguồn theo nghiệp vụ dễ bảo trì.

## Quyết định
Chọn **Next.js App Router** kết hợp **TypeScript** và tổ chức thư mục **Feature-First**.

## Hệ quả
- Tối ưu SEO và điểm Lighthouse vượt trội.
- Ép buộc tuân thủ Type Safety chuẩn chỉnh từ đầu.
- Codebase luôn đồng nhất nhờ tích hợp CI (GitHub Actions), Husky, Prettier và ESLint.