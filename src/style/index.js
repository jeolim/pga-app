import styled, { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    height: 100%;
    min-height: 100%;
    font-size: 16px;
  }

  button {
    height: 100%;
    margin-right: .5rem;
    border-radius: 5px;
    &:focus {
      outline: none;
    }
    &.highlight {
      background: azure;
    }
  }

  table {
    background: white;
    border-spacing: 0;
    border-collapse: collapse;
  }
  table,
  th,
  td {
    border: 1px solid black;
    margin: 0;
    padding: .25rem;
    height: 30px;
  }
  thead {
    text-align: left;
  }
  th {
    height: 30px;
  }
  tr.highlight {
    background: yellow;
  }

  label {
    font-size: 1.25rem;
  }
  input {
    width: 125px;
    height: 22px;
    border-radius: 2px;
    &.editing {
      background: yellow;
    }
  }

`;

const RootWrapper = styled.div.attrs({
  id: "app",
  className: "app"
})`
  background: #2e3c4d;
`;

export { GlobalStyle, RootWrapper as StyleWrapper };
