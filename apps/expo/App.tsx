import { HelloWorld } from '@zart/react-native/hello-world';
import { theme } from '@zart/react-native/theme';
import { DripsyProvider } from 'dripsy';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import { QueryClient, QueryClientProvider } from 'react-query';
import { transformer, trpc } from './utils/trpc';
enableScreens(true);
const { manifest } = Constants;

const localhost = `http://${manifest.debuggerHost?.split(':').shift()}:3000`;

export default function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      url: `${localhost}/api/trpc`,

      async headers() {
        return {};
      },
      transformer,
    }),
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <DripsyProvider theme={theme}>
          <SafeAreaProvider>
            <StatusBar style="dark" />
            <HelloWorld />
          </SafeAreaProvider>
        </DripsyProvider>
      </QueryClientProvider>
    </trpc.Provider>
  );
}
