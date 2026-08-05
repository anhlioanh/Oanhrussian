# 2. Quy trình Triển khai Tự động (CD), Môi trường và Bảo mật Vận hành

* **Trạng thái:** Accepted
* **Ngày:** 05/08/2026

## Bối cảnh
Dự án OanhRussian cần một hạ tầng triển khai tự động, cách ly các môi trường thử nghiệm và có cơ chế ứng phó sự cố khi vận hành thực tế.

## Quyết định
1. **Platform:** Chọn **Vercel** kết hợp **GitHub Edge Integration**.
2. **Cơ chế chặn Deployment không đạt chuẩn:**
   - CI trên GitHub Actions không trực tiếp gọi Vercel, mà **Branch Protection Rule** sẽ chặn việc Merge PR vào `develop`/`main` nếu job `verify` chưa pass.
   - Vercel chỉ kích hoạt Production Build sau khi code đã được merge an toàn vào `main`.
3. **Quy trình quản lý Biến môi trường (Environment Cascade):**
   - Không chỉnh sửa biến trực tiếp trên Production.
   - Mọi thay đổi cấu hình phải được cập nhật và kiểm thử theo thứ tự: **Development (.env.local) -> Preview -> Production**.
4. **Chiến lược Phục hồi Sự cố (Rollback Strategy):**
   - Tuyệt đối **không hotfix trực tiếp** trên Production.
   - Khi xảy ra lỗi rủi ro cao, lập tức sử dụng tính năng **Instant Rollback** của Vercel về bản Deployment ổn định liền trước, sau đó xử lý bug theo đúng quy trình PR -> Preview -> Main.
5. **Đánh giá qua Preview URL:**
   - Mọi PR bắt buộc phải có Vercel Preview URL. Reviewer đánh giá UI/UX trực tiếp trên bản Preview, không review qua hình ảnh chụp màn hình.
6. **Hệ thống Giám sát (Monitoring Backlog):**
   - Tích hợp Vercel Analytics, Speed Insights và Sentry (Error Tracking) ở các giai đoạn tiếp theo.