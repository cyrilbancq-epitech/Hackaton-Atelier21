import '../styles/globals.css';

// IMPORT STYLES
import "../styles/index.scss";
import "../styles/header.scss";
import "../styles/footer.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
