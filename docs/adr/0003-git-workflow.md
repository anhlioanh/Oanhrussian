# 3. Quy trình Quản lý Mã nguồn (Git Workflow) và Tiêu chuẩn Commit

* **Trạng thái:** Accepted
* **Ngày:** 05/08/2026

## Bối cảnh
Cần chuẩn hóa quy trình làm việc với Git để đảm bảo lịch sử commit sạch đẹp, quản lý tính năng minh bạch và hỗ trợ kiểm thử tự động.

## Quyết định
1. **Nhánh cố định (Long-lived Branches):**
   - `main`: Chứa mã nguồn Production chính thức.
   - `develop`: Nhánh tích hợp cho quá trình phát triển và kiểm thử.
2. **Nhánh tính năng (Short-lived Branches):**
   - Định dạng: `feat/<ten-tinh-nang>`, `fix/<ten-bug>`, `refactor/<noi-dung>`.
   - Luôn rẽ nhánh từ `develop` và tạo PR quay về `develop`.
3. **Commit Convention (Conventional Commits):**
   - `feat:` Thêm tính năng mới.
   - `fix:` Sửa lỗi code.
   - `docs:` Thay đổi tài liệu, ADR.
   - `style:` Format code (không ảnh hưởng logic).
   - `refactor:` Tái cấu trúc code.
   - `test:` Bổ sung hoặc sửa test cases.
   - `ci:` Cấu hình pipeline CI/CD.
4. **Merge Policy:**
   - Bắt buộc đi qua Pull Request.
   - Bắt buộc Pass 100% kiểm tra CI (`npm run format:check`, `lint`, `type-check`, `build`).
   - Sử dụng **Squash and Merge** để giữ lịch sử commit trên `main`/`develop` gọn gàng.