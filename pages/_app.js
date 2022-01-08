import Link from "next/link";
import { ContextWrapper } from "../components/ContextWrapper.js";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ContextWrapper>
      <header>
        <Link href="/">
          <a>Dashboard</a>
        </Link>
        <Link href="/count/add-count">
          <a>Add count</a>
        </Link>
      </header>
      <Component {...pageProps} />
    </ContextWrapper>
  );
}

export default MyApp;
