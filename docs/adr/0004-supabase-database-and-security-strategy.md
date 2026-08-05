# 4. Kiến trúc Cơ sở dữ liệu Supabase, Phân quyền RLS và Audit Logging

* **Trạng thái:** Accepted
* **Ngày:** 05/08/2026

## Bối cảnh
Dự án OanhRussian cần một hệ thống cơ sở dữ liệu quan hệ bảo mật cao, phân quyền người dùng chặt chẽ và tự động theo dõi lịch sử biến động dữ liệu.

## Quyết định
1. **Database Platform:** Chọn **Supabase (PostgreSQL)**.
2. **User Profile Mapping:** Tạo bảng `public.profiles` tham chiếu 1-1 tới `auth.users` qua Trigger tự động `on_auth_user_created`.
3. **Role-Based Access Control (RBAC):** Định nghĩa 3 vai trò qua ENUM `user_role`: `student`, `teacher`, `admin`.
4. **Row Level Security (RLS):** Bật RLS 100% trên tất cả các bảng. Chặn mọi quyền truy cập mặc định ngoại trừ các Policy được định nghĩa rõ ràng.
5. **Audit Logging:** Thiết lập bảng `public.audit_logs` phục vụ việc truy vết dữ liệu thay đổi trên hệ thống.
6. **Healthcheck Connection Verification:** Sử dụng bảng `public.healthcheck` cho API `/api/health`.

## Hệ quả
- Dữ liệu người dùng được cách ly an toàn ở tầng Database (RLS).
- Đồng bộ thông tin tài khoản tự động khi Auth Signup.