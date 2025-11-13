export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

export const pageview = (url: string) => {
  if (typeof window !== "undefined" && GA_MEASUREMENT_ID) {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

type GtagEvent = {
  action: string;
  params?: Record<string, any>;
};

export const event = ({ action, params }: GtagEvent) => {
  if (typeof window !== "undefined") {
    window.gtag("event", action, params);
  }
};

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}