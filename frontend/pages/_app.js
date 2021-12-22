// import Router from "next/router";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "../lib/apollo";
import Page from "../components/Page";
import { MobileMenuStateProvider } from "../lib/mobileMenuState";
import { ReplyStateProvider } from "../lib/replyState";

// import "../components/styles/nprogress.css";
// import withData from "../lib/withData";

// Router.events.on("routeChangeStart", () => NProgress.start());
// Router.events.on("routeChangeComplete", () => NProgress.done());
// Router.events.on("routeChangeError", () => NProgress.done());

// This _app file is what will be used for the layout template for all of the other pages. The content for what goes in the template comes from the Page component
function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <ReplyStateProvider>
        <MobileMenuStateProvider>
          <Page>
            <Component {...pageProps} />
          </Page>
        </MobileMenuStateProvider>
      </ReplyStateProvider>
    </ApolloProvider>
  );
}

// more boiler plate
// MyApp.getInitialProps = async function ({ Component, ctx }) {
//   let pageProps = {};
//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx);
//   }
//   pageProps.query = ctx.query;
// };

// in order for apollo to be passed as a prop to the ApolloProvider we
// need to wrap the react component with withData()
export default MyApp;
