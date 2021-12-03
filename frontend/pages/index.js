import Head from "next/head";
import Logo from "../components/Logo";
import MainMenu from "../components/MainMenu";
import SuggestionCard from "../components/SuggestionCard";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Product Feedback</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Logo />
        <MainMenu />
      </header>

      <main>
        <SuggestionCard />
      </main>
    </div>
  );
}
