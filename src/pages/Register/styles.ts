import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 70rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--color-grey-4);
`;

export const DivRegister = styled.div`
  width: 18.125rem;
  max-height: 4rem;

  @media screen and (min-width: 425px) {
    width: 23.125rem;
    max-height: 4rem;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;

  button {
    width: 4.218rem;
    height: 2.507rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 16.2426px;
    gap: 10.15px;

    background-color: var(--color-grey-3);
    border-radius: 4px;

    font-weight: 600;
    font-size: 12px;
    line-height: 28px;
    color: var(--color-grey-0);

    cursor: pointer;

    transition: 0.4s;
  }

  button:hover {
    background-color: var(--color-grey-2);
  }
`;

export const StyledForm = styled.form`
  width: 18.125rem;
  max-height: 64rem;

  @media screen and (min-width: 425px) {
    width: 23.125rem;
    max-height: 64rem;
  }

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 28px 22px;

  background-color: var(--color-grey-3);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  div {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  h1 {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: var(--color-grey-0);
  }

  span {
    margin-bottom: 2rem;

    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;
    color: var(--color-grey-0);
  }

  input {
    width: 15.5rem;
    min-height: 3rem;

    @media screen and (min-width: 425px) {
      width: 20.621rem;
      min-height: 3rem;
    }

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16.2426px;
    gap: 10.15px;

    background-color: var(--color-grey-2);

    border: 1.2182px solid var(--color-grey-2);
    border-radius: 4px;

    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;
    color: var(--color-grey-1);
  }

  button {
    width: 15.5rem;
    min-height: 3rem;

    @media screen and (min-width: 425px) {
      width: 20.375rem;
      min-height: 3rem;
    }

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;
    gap: 10.15px;

    background-color: var(--color-primary);
    border: 1.2182px solid var(--color-primary);
    border-radius: 4px;

    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: var(--color-grey-0);

    cursor: pointer;

    transition: 0.4s;
  }

  button:hover {
    background-color: var(--color-primary-negative);
    border: 1.2182px solid var(--color-primary-negative);
  }
`;

export const Error = styled.p`
  margin-bottom: 1rem;

  font-weight: 400;
  font-size: 12.182px;
  line-height: 22px;
  color: var(--color-negative);
`;

export const Title = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  color: var(--color-grey-1);
`;
