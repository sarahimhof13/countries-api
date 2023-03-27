import styled from "styled-components";

export const HomeContainer = styled.section`

`
export const HomeFieldContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 24px 16px 32px 16px;

    & input {
        width: 100%;
        height: 48px;
        margin-bottom: 40px;
        background-color: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.text};
        border: none;
        border-radius: 5px;
    }

    & select {
        width: 200px;
        height: 48px;
        padding: 14px 24px;
        background-color: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.text};
        border: none;
        border-radius: 5px;
    }
`

export const HomeCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;

    & > div {
        border-radius: 5px;
        background-color: ${(props) => props.theme.colors.primary};
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384);
        word-wrap: break-word;
        width: 264px;
    }

    & img {
        max-width: 264px;
        border-radius: 5px 5px 0 0;
    }
`

export const HomeCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;
`

export const HomeCardText = styled.div`
    padding: 24px 24px 46px 24px;


    & a {
        font-weight: 800;
        font-size: 1.125rem;
        margin-bottom: 16px;
    }

    & p {
        margin-bottom: 8px;

         :first-of-type {
            margin-top: 16px;
        }
    }

    & span {
        font-weight: 600;
    }
`