import Script from 'next/script';

export default function Analytics() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-BJEMVJ2WGM"
        strategy="afterInteractive"
      ></Script>
      <Script id="analytics">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-BJEMVJ2WGM');
        `}
      </Script>
    </>
  );
}
