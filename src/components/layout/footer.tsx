import { Logo } from './logo';
import { navigationConfig } from '@/config/navigation';

export function Footer() {
  return (
    <footer className="border-border bg-background border-t">
      <div className="layout-container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <Logo />
            <p className="text-muted-foreground text-sm">
              Nền tảng học tiếng Nga trực tuyến chất lượng cao dành cho người Việt.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Điều hướng</h4>
            <ul className="text-muted-foreground mt-4 space-y-2 text-sm">
              {navigationConfig.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-foreground">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Liên hệ</h4>
            <p className="text-muted-foreground mt-4 text-sm">Email: support@oanhrussian.com</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Mạng xã hội</h4>
            <p className="text-muted-foreground mt-4 text-sm">
              Theo dõi chúng tôi trên Facebook, YouTube để học tập mỗi ngày.
            </p>
          </div>
        </div>

        <div className="border-border/40 text-muted-foreground mt-12 border-t pt-6 text-center text-sm">
          © {new Date().getFullYear()} OanhRussian. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
