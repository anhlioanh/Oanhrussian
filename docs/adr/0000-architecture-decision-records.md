# 0. Quy trình quản lý Quyết định Kiến trúc (ADR)

* **Trạng thái:** Accepted
* **Ngày:** 05/08/2026

## Bối cảnh
Dự án OanhRussian cần một cơ chế ghi chép lại toàn bộ các quyết định kỹ thuật quan trọng nhằm tránh "mất trí nhớ kiến trúc" khi quy mô dự án mở rộng.

## Quyết định
Mỗi quyết định kiến trúc lớn (chọn framework, CSDL, cơ chế Auth, cấu trúc thư mục...) đều phải được lưu trữ dưới dạng một file Markdown trong `docs/adr/` theo định dạng chuẩn:
1. Tiêu đề & Mã định danh (000X)
2. Trạng thái (Proposed / Accepted / Rejected / Deprecated)
3. Bối cảnh
4. Quyết định
5. Hệ quả & Đánh giá

## Hệ quả
- **Tích cực:** Minh bạch lịch sử kỹ thuật, giúp thành viên mới dễ dàng nắm bắt lý do đằng sau các quyết định.
- **Tiêu tốn:** Cần bổ sung bước viết ADR trong quy trình nghiệm thu mỗi giai đoạn.