import '../sass/application.scss';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configurateStore';
import JssProvider from 'react-jss/lib/JssProvider';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import getPageContext from '../getPageContext';
import App, {Container} from 'next/app';
import Head from 'next/head';
import withRedux from 'next-redux-wrapper';

class MyApp extends App {
  constructor() {
    super();
    this.pageContext = getPageContext();
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  static async getInitialProps({Component, ctx}) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return {pageProps};
}
  render() {
    const {Component, pageProps, store} = this.props;
    return (
      <Container>
        <Head>
          <title>Sign the #letterfromhumanity</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta
            name="theme-color"
            content={this.pageContext ? this.pageContext.theme.palette.primary.main : null}
          />
          <link
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,400,400i,600,700"
            rel="stylesheet"
          />
        </Head>
        <JssProvider
          registry={this.pageContext.sheetsRegistry}
          generateClassName={this.pageContext.generateClassName}
        >
          {/* MuiThemeProvider makes the theme available down the React
              tree thanks to React context. */}
          <MuiThemeProvider
            theme={this.pageContext.theme}
            sheetsManager={this.pageContext.sheetsManager}
          >
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {/* Pass pageContext to the _document though the renderPage enhancer
                to render collected styles on server-side. */}
            <Provider store={store}>
              <Component pageContext={this.pageContext} {...pageProps} />
            </Provider>
          </MuiThemeProvider>
        </JssProvider>
      </Container>
    )
  }
}

export default withRedux(configureStore)(MyApp);
