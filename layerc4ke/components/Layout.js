import Header from "./Header";
import GlobalStyles from "../styles/global";
import { LayoutDiv } from "../styles/Layout.styled";

export default function Layout({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <LayoutDiv className="layout">{children}</LayoutDiv>
    </div>
  );
}
