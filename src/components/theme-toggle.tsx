'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Laptop } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-9 w-24 rounded-md border border-border" />;
  }

  return (
    <div className="inline-flex items-center rounded-lg border border-border bg-background p-1">
      <button
        onClick={() => setTheme('light')}
        className={`rounded-md p-1.5 transition-colors ${
          theme === 'light'
            ? 'bg-accent text-accent-foreground'
            : 'text-muted-foreground hover:text-foreground'
        }`}
        aria-label="Light theme"
      >
        <Sun className="h-4 w-4" />
      </button>

      <button
        onClick={() => setTheme('dark')}
        className={`rounded-md p-1.5 transition-colors ${
          theme === 'dark'
            ? 'bg-accent text-accent-foreground'
            : 'text-muted-foreground hover:text-foreground'
        }`}
        aria-label="Dark theme"
      >
        <Moon className="h-4 w-4" />
      </button>

      <button
        onClick={() => setTheme('system')}
        className={`rounded-md p-1.5 transition-colors ${
          theme === 'system'
            ? 'bg-accent text-accent-foreground'
            : 'text-muted-foreground hover:text-foreground'
        }`}
        aria-label="System theme"
      >
        <Laptop className="h-4 w-4" />
      </button>
    </div>
  );
}
