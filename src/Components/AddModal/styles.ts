import styled from "styled-components";

export const StyledAddModal = styled.form`
  width: 23.063rem;
  height: 25rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: absolute;
  top: 250px;

  background-color: var(--color-grey-3);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  div {
    width: 100%;
    height: 3.125rem;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 12px 20px;
    gap: 10px;
    margin-bottom: 2rem;

    background-color: var(--color-grey-2);
    border-radius: 4px 4px 0px 0px;

    h3 {
      font-weight: 700;
      font-size: 14px;
      line-height: 24px;
      color: var(--color-grey-0);
    }

    button {
      width: 0.688rem;
      height: 1.625rem;

      background-color: var(--color-grey-2);

      font-weight: 600;
      font-size: 16px;
      line-height: 26px;
      color: var(--color-grey-1);
    }

    button:hover {
      color: var(--color-grey-0);
    }
  }

  span {
    margin-left: 22px;
    margin-bottom: 2rem;

    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;
    color: var(--color-grey-0);
  }

  input {
    width: 20.625rem;
    height: 3rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16.2426px;
    margin-left: 22px;
    margin-bottom: 0.5rem;
    gap: 10.15px;

    background-color: var(--color-grey-2);
    border: 1.2182px solid var(--color-grey-0);
    border-radius: 4px;

    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;
    color: var(--color-grey-0);
  }

  select {
    width: 20.625rem;
    height: 3rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 22px;
    margin-bottom: 0.5rem;
    padding: 0px 16.2426px;
    gap: 10.15px;

    background-color: var(--color-grey-2);
    border: 1.2182px solid var(--color-grey-0);
    border-radius: 4px;

    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;
    color: var(--color-grey-0);
  }
`;

export const CreateBtn = styled.button`
  width: 20.625rem;
  height: 3rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 22px;
  padding: 0px 22.3336px;
  gap: 10.15px;

  background: var(--color-primary);
  border: 1.2182px solid var(--color-primary);
  border-radius: 4px;

  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: var(--color-grey-0);

  cursor: pointer;

  transition: 0.4s;

  :hover {
    background: var(--color-negative);
    border: 1.2182px solid var(--color-negative);
  }
`;

export const Error = styled.p`
  margin-left: 22px;
  margin-bottom: 1rem;

  font-weight: 400;
  font-size: 12.182px;
  line-height: 22px;
  color: var(--color-negative);
`;
