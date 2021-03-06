// import Router from "next/router";
import { useState, useEffect } from "react";
import { ApolloProvider } from "@apollo/client";
import apolloClient, { useApollo } from "../lib/apollo";
import Router from "next/router";
import Page from "../components/Page";
import { MobileMenuStateProvider } from "../lib/hooks/context/mobileMenuState";
import { SortFilterStateProvider } from "../lib/hooks/context/sortFilter";
import { ToastStateProvider } from "../lib/hooks/context/showToast";

// import "../components/styles/nprogress.css";
// import withData from "../lib/withData";

// Router.events.on("routeChangeStart", () => NProgress.start());
// Router.events.on("routeChangeComplete", () => NProgress.done());
// Router.events.on("routeChangeError", () => NProgress.done());

// This _app file is what will be used for the layout template for all of the other pages. The content for what goes in the template comes from the Page component
function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <ToastStateProvider>
        <SortFilterStateProvider>
          <MobileMenuStateProvider>
            <Page>
              <Component {...pageProps} />
            </Page>
          </MobileMenuStateProvider>
        </SortFilterStateProvider>
      </ToastStateProvider>
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
