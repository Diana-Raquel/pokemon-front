import { QueryClient } from '@tanstack/react-query';

export const BASE_API = process.env.NEXT_PUBLIC_API_URL;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: 'always', // Default behavior for better user experience
      refetchOnReconnect: 'always', // Ensures data integrity when the network reconnects
      refetchOnMount: false, // Skip unnecessary refetches
      staleTime: 5 * 60 * 1000, // 5 minutes, based on assumed data volatility
      retry: (failureCount: number, error: Error | any) => {
        if (error?.response?.status === 404) return false; // Do not retry 404 errors
        return failureCount < 3; // Retry up to 3 times
      },
      retryDelay: (attemptIndex: number) =>
        Math.min(1000 * 2 ** attemptIndex, 30000), // Exponential backoff capped at 30 seconds
    },
  },
});
