# 3. Quy trình Quản lý Mã nguồn (Git Workflow) và Tiêu chuẩn Commit

* **Trạng thái:** Accepted
* **Ngày:** 05/08/2026

## Bối cảnh
Cần chuẩn hóa quy trình làm việc với Git, tiêu chuẩn Scoped Commit và đánh dấu cột mốc phiên bản (Release Tags).

## Quyết định
1. **Scoped Commit Convention:**
   - Định dạng bắt buộc: `type(scope): description`
   - **Ví dụ:**
     - `feat(auth): add login with google`
     - `fix(quiz): fix score calculation bug`
     - `docs(adr): update adr-0003 git workflow`
     - `refactor(ui): simplify navbar responsiveness`

2. **Quy trình Đánh dấu Phiên bản (Release Tagging):**
   - Sử dụng **Semantic Versioning (`vMAJOR.MINOR.PATCH`)**:
     - `MAJOR`: Thay đổi kiến trúc lớn hoặc phá vỡ tính tương thích cũ.
     - `MINOR`: Nghiệm thu hoàn thành một Giai đoạn / Feature lớn.
     - `PATCH`: Sửa lỗi khẩn cấp hoặc cập nhật nhỏ.
   - Khi một Giai đoạn được nghiệm thu, thực hiện gắn tag trực tiếp trên `main`:
     ```bash
     git tag -a v0.3.0 -m "Release v0.3.0: Complete Vercel CD & Repository Governance"
     git push origin v0.3.0
     ```