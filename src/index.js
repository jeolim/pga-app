import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/Header";
import { MainPage as MainContent } from "./Page/Main";
import { GlobalStyle, StyleWrapper } from "../src/style";
import {
  PGACenterLogo,
  OverlayContent
} from "./Page/components/Table/style.index";

const withLayout = ({ Content }) =>
  class Example extends React.Component {
    render() {
      return (
        <StyleWrapper>
          <GlobalStyle />
          <Header>{this.props.title}</Header>
          <Content />
        </StyleWrapper>
      );
    }
  };

const App = withLayout({
  Content: () => (
    <OverlayContent>
      <PGACenterLogo />
      <MainContent />
    </OverlayContent>
  )
});

ReactDOM.render(
  <App title="PGA Scoreboard" />,
  document.getElementById("root")
);
