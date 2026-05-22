import type { Metadata } from 'next'
import { Inter, Playfair_Display, Montserrat, Poppins, Source_Sans_3, Raleway, Work_Sans, DM_Sans, Rubik, Lora, PT_Sans, Karla, Manrope, Merriweather, Oswald } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

// ========================================
// REPLACE THESE WITH YOUR REAL IDS
// Leave empty ("") to disable a tracker
// ========================================
const FB_PIXEL_ID = "1914339426035373"
const GHL_TRACKING_ID = ""

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", weight: ["700", "800", "900"] });
const poppins = Poppins({ subsets: ["latin"], variable: "--font-poppins", weight: ["400", "500", "600", "700", "800"] });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const sourceSans3 = Source_Sans_3({ subsets: ["latin"], variable: "--font-source-sans-3" });
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-work-sans" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const ptSans = PT_Sans({ subsets: ["latin"], variable: "--font-pt-sans", weight: ["400", "700"] });
const karla = Karla({ subsets: ["latin"], variable: "--font-karla" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const merriweather = Merriweather({ subsets: ["latin"], variable: "--font-merriweather", weight: ["400", "700"] });

export const metadata: Metadata = {
  title: 'AZ Sun Covers LLC - Custom Patio Covers',
  description: 'Transform your outdoors with custom patio covers designed to impress. Handcrafted patio covers that turn ordinary backyards into luxury retreats.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Facebook Pixel - only loads when a real Pixel ID is set */}
        {FB_PIXEL_ID && (
          <Script id="fb-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${FB_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
        {FB_PIXEL_ID && (
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        )}

        {/* GoHighLevel Tracking - only loads when a real tracking ID is set */}
        {GHL_TRACKING_ID && (
          <Script
            id="ghl-tracking"
            strategy="afterInteractive"
            src="https://widgets.leadconnectorhq.com/loader.js"
            data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
            data-widget-id={GHL_TRACKING_ID}
          />
        )}
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${montserrat.variable} ${poppins.variable} ${sourceSans3.variable} ${raleway.variable} ${workSans.variable} ${dmSans.variable} ${rubik.variable} ${lora.variable} ${ptSans.variable} ${karla.variable} ${manrope.variable} ${merriweather.variable} ${oswald.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
