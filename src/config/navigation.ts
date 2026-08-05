export interface NavItem {
  title: string;
  href: string;
}

export const navigationConfig: NavItem[] = [
  { title: 'Trang chủ', href: '/' },
  { title: 'Khóa học', href: '/courses' },
  { title: 'Từ vựng', href: '/vocabulary' },
  { title: 'Ngữ pháp', href: '/grammar' },
  { title: 'Liên hệ', href: '/contact' },
];
