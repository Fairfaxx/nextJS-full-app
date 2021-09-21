import Head from "next/head";
import { useRouter } from "next/router";
import Header from "./Header";
import Showcase from "./Showcase";
import Footer from "./Footer";
import styles from "@/styles/Layout.module.css";

const Layout = ({ title, keywords, children, description }) => {
  const router = useRouter();
  console.log(router.pathname)
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="{description}" />
        <meta name="keywords" content="{keywords}" />
      </Head>

      <Header />
      {router.pathname === "/" && <Showcase />}
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "DJ Events | Find the hottest parties",
  description: "Find the latest Dj and musical events",
  keywords: "dj, events, party",
};

export default Layout;
