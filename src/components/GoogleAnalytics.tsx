'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { API_BASE_URL } from '@/lib/api';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (command: string, targetId: string | Date, config?: Record<string, unknown>) => void;
  }
}

interface GoogleAnalyticsProps {
  measurementId?: string | null;
  anonymizeIp?: boolean;
}

export default function GoogleAnalytics({
  measurementId,
  anonymizeIp = true,
}: GoogleAnalyticsProps) {
  useEffect(() => {
    // Send anonymous live heartbeat ping to Zurvix Admin Realtime Telemetry
    try {
      fetch(`${API_BASE_URL}/api/analytics/ping`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          path: window.location.pathname,
          title: document.title,
        }),
      }).catch(() => {});
    } catch {}

    // Optional client listener to track WhatsApp inquiries
    const handleWhatsAppClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (target && target.href && target.href.includes('wa.me')) {
        if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
          window.gtag('event', 'whatsapp_inquiry', {
            event_category: 'engagement',
            event_label: 'WhatsApp Consultation Click',
          });
        }
      }
    };

    document.addEventListener('click', handleWhatsAppClick);
    return () => document.removeEventListener('click', handleWhatsAppClick);
  }, []);

  const finalId = measurementId && measurementId.startsWith('G-') ? measurementId : 'G-QFENNN1F14';

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${finalId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${finalId}', {
              page_path: window.location.pathname,
              ${anonymizeIp ? "'anonymize_ip': true," : ''}
            });
          `,
        }}
      />
    </>
  );
}
