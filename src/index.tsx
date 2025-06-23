/// <reference types="fbtee/ReactTypes.d.ts" />

import { RelayEnvironmentProvider } from 'react-relay';
import { Environment, FetchFunction, Network } from 'relay-runtime';
import App from './App.tsx';
import './App.css';
import { LocaleContext } from 'fbtee';
import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import AvailableLanguages from './AvailableLanguages.tsx';
import env from './lib/env.tsx';

const clientLocales = [navigator.language, ...navigator.languages];

const loadLocale = async (locale: string) => {
  if (locale === 'ja_JP') {
    return (await import('./translations/ja_JP.json')).default.ja_JP;
  }

  return {};
};

const fetchGraphQL: FetchFunction = async (request, variables) => {
  const response = await fetch(`${env('SERVER_URL')}/graphql`, {
    body: JSON.stringify({ query: request.text, variables }),
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
  });

  if (!response.ok) {
    throw new Error('Response failed.');
  }

  return await response.json();
};

const environment = new Environment({
  network: Network.create(fetchGraphQL),
});

createRoot(document.getElementById('root')!).render(
  <LocaleContext
    availableLanguages={AvailableLanguages}
    clientLocales={clientLocales}
    loadLocale={loadLocale}
  >
    <StrictMode>
      <RelayEnvironmentProvider environment={environment}>
        <Suspense>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Suspense>
      </RelayEnvironmentProvider>
    </StrictMode>
  </LocaleContext>,
);
