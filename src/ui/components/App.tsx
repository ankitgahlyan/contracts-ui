// Copyright 2022-2024 use-ink/contracts-ui authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { Outlet } from 'react-router';
import { AwaitApis, CheckBrowserSupport } from 'ui/components';
import {
  ApiContextProvider,
  DatabaseContextProvider,
  ThemeContextProvider,
  TransactionsContextProvider,
} from 'ui/contexts';
import { Sidebar } from 'ui/layout/sidebar';

export default function App() {
  return (
    <ThemeContextProvider>
      <ApiContextProvider>
        <DatabaseContextProvider>
          <TransactionsContextProvider>
            {/* Responsive layout: flex-col on mobile, flex-row on md+ */}
            <div className="relative inset-0 flex min-h-screen flex-col text-black dark:bg-gray-900 dark:text-white md:flex-row">
              <Sidebar />
              <CheckBrowserSupport>
                <AwaitApis>
                  <Outlet />
                </AwaitApis>
              </CheckBrowserSupport>
            </div>
          </TransactionsContextProvider>
        </DatabaseContextProvider>
      </ApiContextProvider>
    </ThemeContextProvider>
  );
}
