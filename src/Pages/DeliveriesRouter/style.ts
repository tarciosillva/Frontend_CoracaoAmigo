import styled from "styled-components";

export const DeliveryContent=styled.div`
  background-color: aliceblue;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  border-radius: 0.3rem;
  border-left: 0.2rem solid var(--primaryGreen);
  margin-bottom: 1rem;

  .status{
      color: #268fbe;
  }

  select{
      margin-left: 0.5rem;
      border: none;
      padding: 0.2rem;
      border-radius: 0.3rem;
      cursor: pointer;
  }
`