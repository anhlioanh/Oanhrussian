# 2. Quy trình Triển khai Tự động (CD) và Phân tách Môi trường trên Vercel

* **Trạng thái:** Accepted
* **Ngày:** 05/08/2026

## Bối cảnh
Dự án OanhRussian cần một hạ tầng triển khai nhanh chóng, tự động hóa toàn bộ luồng phát triển và ngăn chặn các lỗi phát sinh ảnh hưởng đến người dùng cuối trên trang chính thức.

## Quyết định
1. **Platform:** Chọn **Vercel** làm hạ tầng triển khai nhờ khả năng tối ưu mặc định cho Next.js App Router (Edge Network, Incremental Static Regeneration, Serverless Functions).
2. **Chiến lược môi trường (Environment Isolation):**
   - **Production (`main` branch):** Môi trường chính thức tại `oanhrussian.vercel.app`. Chỉ deploy khi CI trên GitHub Actions kiểm tra thành công.
   - **Preview (`develop` branch & Pull Requests):** Tự động sinh ra một URL riêng biệt cho mỗi PR để thực hiện Review UI/UX trước khi merge.
   - **Development (Local):** Chạy lệnh `npm run dev` với file `.env.local`.
3. **Quy trình kiểm soát Build:** Tích hợp kiểm tra tự động trước deployment, chặn deploy nếu build hoặc kiểm tra TypeScript/ESLint thất bại.

## Hệ quả
- **Tích cực:** Tối ưu hiệu năng tải trang nhờ Vercel Edge Network; hỗ trợ bản xem trước (Preview Deployment) giúp việc kiểm thử trực quan và an toàn.
- **Tiêu tốn:** Cần đồng bộ và quản lý biến môi trường chặt chẽ trên 3 không gian thiết lập của Vercel.