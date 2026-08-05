# 4. Kiến trúc CSDL Supabase CLI Migration, Strict RLS và Phân tách Schema

* **Trạng thái:** Accepted
* **Ngày:** 05/08/2026

## Bối cảnh
Cần thiết lập CSDL sản xuất không dư thừa dữ liệu, bảo mật RLS mặc định và quản lý lịch sử thay đổi hoàn toàn qua Supabase CLI Migrations.

## Quyết định
1. **Zero Data Redundancy:** Loại bỏ cột `email` khỏi `public.profiles`. Thông tin Email chỉ lưu duy nhất tại `auth.users`.
2. **Stateless Healthcheck:** API `/api/health` dùng truy vấn hệ thống lightweight, loại bỏ hoàn toàn bảng `healthcheck`.
3. **Strict RLS Policy:** Áp dụng `auth.uid() = id` cho `profiles`. Người dùng chỉ đọc/sửa được dữ liệu của chính mình.
4. **Role Scalability Strategy:** Sử dụng `ENUM` cho 3 roles hiện tại (`student`, `teacher`, `admin`). Nếu quy mô vượt quá 5 roles sẽ refactor sang RBAC Table (`roles`, `user_roles`).
5. **Deferred Audit Triggers:** Khởi tạo bảng `audit_logs` trước; hệ thống Triggers ghi log tự động sẽ triển khai chi tiết ở Phase sau.
6. **Supabase CLI Workflow:** Phân tách hoàn toàn `migrations/` và `seed.sql`. Tuyệt đối không thao tác SQL thủ công trên UI Production.

## Hệ quả
- Dữ liệu đồng nhất, tuyệt đối không bị lệch Email khi user cập nhật Auth.
- Codebase chứa trọn vẹn lịch sử Migrations, hỗ trợ CI/CD deployment đồng bộ.