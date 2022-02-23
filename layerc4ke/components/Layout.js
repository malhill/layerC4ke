import Header from "./Header";
import GlobalStyles from "../styles/global";

export default function Layout({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <div>{children}</div>
    </div>
  );
}
