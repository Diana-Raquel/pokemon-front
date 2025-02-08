import React from 'react';
import { Toaster } from '../components/ui/toaster';
import { GoogleAdsenseProvider } from './google-adsence';
import { GoogleAnalyticsProvider } from './google-analytics';
import { QueryProvider } from './query';
import { TeamProvider } from './team-provider';
import { ThemeProvider } from './theme';

interface Props {
  children: React.ReactNode;
}

export default function Providers({ children }: Props) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <QueryProvider>
        <GoogleAnalyticsProvider>
          <GoogleAdsenseProvider>
            <TeamProvider>{children}</TeamProvider>
          </GoogleAdsenseProvider>
        </GoogleAnalyticsProvider>
      </QueryProvider>
      <Toaster />
    </ThemeProvider>
  );
}
