"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import Script from "next/script";

const AnalyticsListener = dynamic(() => import("@/components/AnalyticsListener"), {
  ssr: false,
});

export default function GoogleAnalyticsWrapper() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  if (!GA_ID) {
    console.warn("⚠️ Missing NEXT_PUBLIC_GA_ID in environment");
    return null;
  }

  return (
    <main>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Suspense fallback={null}>
        <AnalyticsListener />
      </Suspense>
    </main>
  );
}
