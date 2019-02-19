import styled from "styled-components";
export const StyledForm = styled.form`
  min-height: 150px;
  margin-bottom: 2rem;
  label {
    display: inline-block;
    width: 8rem;
  }
  button {
    height: 2rem;
    border-radius: 5px;
    width: 5rem;
  }
  .error {
    color: red;
    margin: 0.5rem 0 0.5rem 0;
  }
  input {
    margin: 0.25rem 0 0.25rem 0;
  }
`;
