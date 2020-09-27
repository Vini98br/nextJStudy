import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document'
import React from 'react'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="pt">
        <Head>



          <meta charSet="utf-8" />
          <meta name='keywords' content='Keywords' />
          <meta http-equiv='X-UA-Compatible' content='IE=edge' />
          <meta name="theme-color" content="#081A23" />
          <meta name='application-name' content='Next Study' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content='Next Study' />
          <meta name='description' content='Best Next Study in the world' />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='msapplication-config' content='/static/icons/browserconfig.xml' />
          <meta name='msapplication-TileColor' content='#081A23' />
          <meta name='msapplication-tap-highlight' content='no' />
          <title>NextJStudy</title>
          <link rel="manifest" href="/manifest.json" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap" rel="stylesheet" />
          <link rel="icon" href="/icons/favicon-32x32.png" />
          <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
          <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
          <link rel="apple-touch-icon" href="/apple-icon.png"></link>
          <link rel='apple-touch-icon' sizes='512x512' href='/favicon-512x512.png' />
          <link rel='apple-touch-icon' sizes='384x384' href='/favicon-384x384.png' />
          <link rel='apple-touch-icon' sizes='192x192' href='/favicon-192x192.png' />
          <link rel='apple-touch-icon' sizes='144x144' href='/favicon-144x144.png' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}