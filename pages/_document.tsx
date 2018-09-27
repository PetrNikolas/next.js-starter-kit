import * as React from 'react'
import Document, {Head, Main, NextScript} from 'next/document'
import {
  DEV, FB_TRACKING_ID, SENTRY_TRACKING_ID, SITE_DESCRIPTION, SITE_IMAGE,
  SITE_NAME, SITE_TITLE, SITE_AUTHOR
} from '../src/globals/env'

export default class extends Document {
  static async getInitialProps(...args) {
    const documentProps = await Document.getInitialProps(...args)
    const {req, renderPage} = args[0]
    const page = renderPage()

    return {...documentProps, ...page}
  }

  render() {
    return (
      <html lang="en">
      <Head>
        <title>{SITE_TITLE}</title>
        <meta name="author" content={SITE_AUTHOR} />

        <meta name="description" content={SITE_DESCRIPTION} />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, shrink-to-fit=no" />
        <meta http-equiv="Content-language" content="en" />
        <meta name="reply-to" content="" />
        <meta name="url" content={SITE_NAME} />
        <meta name="identifier-URL" content={SITE_NAME} />

        <meta property="og:url" content={SITE_NAME} />
        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content={SITE_NAME}/>
        <meta property="og:title" content={SITE_TITLE}/>
        <meta property="og:description" content={SITE_DESCRIPTION}/>
        <meta property="og:image" content={SITE_IMAGE}/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content={SITE_NAME}/>
        <meta name="twitter:title" content={SITE_TITLE}/>
        <meta name="twitter:description" content={SITE_DESCRIPTION}/>
        <meta property="twitter:image" content={SITE_IMAGE}/>
        <meta name="format-detection" content="telephone=no, address=no, email=no"/>

        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
          integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
          crossOrigin="anonymous"
        />
        <link 
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css"
          integrity="sha256-oSrCnRYXvHG31SBifqP2PM1uje7SJUyX0nTwO2RJV54="
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.9.3/antd.min.css" integrity="sha256-h38EAbRO66dS8D5tOCipHTajDADC8qrgfbadIgfGGq4=" crossOrigin="anonymous" />
        <link rel="shortcut icon" href="/static/img/favicon.ico"/>
        <link rel="stylesheet" href="/_next/static/style.css" />

        <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=default,Array.prototype.find,Array.prototype.includes,String.prototype.includes,Array.prototype.findIndex,Object.entries"></script>
        {!DEV && FB_TRACKING_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)}(window,document,'script', 'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '${FB_TRACKING_ID}');
fbq('track', 'PageView'); `
            }}
          />
        )}
        {!DEV && FB_TRACKING_ID && (
          <noscript>
            <img
              height="1"
              width="1"
              src={`//www.facebook.com/tr?id=${FB_TRACKING_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
        )}
        {!DEV && SENTRY_TRACKING_ID && (
          <>
            <script
              src="https://cdn.ravenjs.com/3.17.0/raven.min.js"
              {...{crossOrigin: 'anonymous'}}
            />
            <script dangerouslySetInnerHTML={{
              __html: `Raven.config('https://${SENTRY_TRACKING_ID}@sentry.io/156600').install()`
            }}/>
          </>
        )}
      </Head>
      <body>
        <Main/>
        <NextScript/>
      </body>
      </html>
    )
  }
}

