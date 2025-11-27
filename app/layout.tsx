
import { StackProvider, StackTheme } from '@stackframe/stack';
import { stackServerApp } from '../stack/server';

import "./globals.css";

import Provider from './provider';
export const metadata = {
  title: 'AI Coaching Voice Agent',
  description: 'An AI-powered voice agent for coaching and personal development.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <StackProvider app={stackServerApp}>
          <StackTheme>
            <Provider>
              {children}
            </Provider>
          </StackTheme>
        </StackProvider>
      </body>
    </html>
  );
}