import { Inter } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';
import { GoogleTagManager } from '@next/third-parties/google';
import WhatsAppWidget from '@/components/ui/wppWidget';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'IESA',
  description: 'Bienvenido al IESA, el Instituto de Estudios Superiores Argentino. Aquí encontrarás información detallada sobre nuestros programas académicos, tecnicatures, y actividades que ofrecemos. Nuestro objetivo es formar profesionales altamente capacitados y comprometidos con la sociedad. Explora nuestras propuestas educativas, conoce a nuestro cuerpo docente, y descubre cómo podemos ayudarte a alcanzar tus metas profesionales.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head></head>
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
        <WhatsAppWidget
          phoneNumber="+543764760070"
          defaultMessage="Hola! Me gustaría recibir más información sobre *Ingresa tu consulta*. Muchas Gracias!"
        />
      </body>
      <GoogleTagManager gtmId="G-1EDZ57D5M8" />
    </html>
  );
}
