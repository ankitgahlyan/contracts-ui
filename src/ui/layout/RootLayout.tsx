// Copyright 2022-2024 use-ink/contracts-ui authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { HTMLAttributes } from 'react';
import { classes } from 'lib/util';

export function RootLayout({ accessory, heading, help, children, aside }: PageProps) {
  return (
    <section
      className={classes(
        'w-full overflow-y-auto p-4 sm:p-6 md:p-10',
        aside && 'grid grid-cols-1 gap-6 md:grid-cols-[1fr_400px] md:gap-10',
      )}
    >
      <main className="min-w-0">
        <header className="mb-6 space-y-1 border-b border-gray-200 pb-4 dark:border-gray-800 sm:mb-8 sm:pb-5 md:mb-10 md:pb-6">
          {accessory && <div className="float-right">{accessory}</div>}
          <h1 className="text-lg capitalize sm:text-xl md:text-2.5xl">{heading}</h1>
          <p className="text-xs text-gray-500 dark:text-gray-400 sm:text-sm">{help}</p>
        </header>
        <div className="flex h-full flex-col">{children}</div>
      </main>
      {aside && <aside className="mt-8 flex flex-col md:mt-0">{aside}</aside>}
    </section>
  );
}

interface PageProps extends HTMLAttributes<HTMLDivElement> {
  accessory?: React.ReactNode;
  heading: React.ReactNode;
  help?: React.ReactNode;
  aside?: React.ReactNode;
}
