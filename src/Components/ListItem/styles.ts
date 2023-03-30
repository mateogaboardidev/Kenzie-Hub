import styled from "styled-components";

export const StyledLi = styled.li`
  width: 100%;
  height: 3rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12.182px;
  gap: 12.18px;

  background: var(--color-grey-4);
  border-radius: 4px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  h3 {
    font-weight: 700;
    font-size: 14.2123px;
    line-height: 24px;
    color: var(--color-grey-0);
  }

  p {
    font-weight: 400;
    font-size: 12.182px;
    line-height: 22px;
    color: var(--color-grey-1);
  }

  button {
    width: 4rem;
    height: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--color-grey-3);
    border-radius: 4px;

    cursor: pointer;

    transition: 0.4s;

    font-weight: 700;
    font-size: 14.2123px;
    line-height: 24px;
    color: var(--color-grey-0);
  }

  button:hover {
    background-color: var(--color-grey-2);
  }
`;
