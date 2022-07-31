
import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
`;

export const Content = styled.div`
    max-width: 1440px;
    margin: 0 auto;

    padding: 1rem 5rem;

    h1 {
        font-weight: 600;
        font-size: 1.8rem;
        line-height: 2.1rem;
        color: #FFFFFF;
        margin-top: 4.5rem;
    }
`;

export const FilterForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2rem 0 0 0;

    div {
        display: flex;
        flex-direction: column;
        width: 48%;

        label {
            font-weight: 600;
            font-size: 1rem;
            line-height: 1.3rem;
            color: var(--grey-300);
        }

        input, select {
            background: var(--dark-400);
            border-radius: 8px;
            margin-top: 8px;
            border: none;
            padding: 0.7rem 1.2rem;
            color: var(--white-600);
            font-size: 1rem;

            &::placeholder {
                color: var(--white-600);
            }
        }
    }

`;