function GlobalStyle() {
  return (
    <style global jsx>
      {`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }

        body {
          font-family: 'Open Sans', sans-serif;
        }

        /*Fit app height to display*/
        html,
        body,
        #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }

        #__next {
          flex: 1;
        }

        #__next > * {
          flex: 1;
        }
        /* ./Fit app height to display*/
      `}
    </style>
  );
}

export default function myApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
