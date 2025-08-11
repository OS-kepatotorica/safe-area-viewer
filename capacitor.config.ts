import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.safeareaviewer',
  appName: 'SafeAreaViewer',
  webDir: 'dist',
  android: {
    webContentsDebuggingEnabled: true,
    allowMixedContent: true
  },
  server: {
    androidScheme: 'https'
  }
};

export default config;
