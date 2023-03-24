import styled from "styled-components";

export const HomeContainer = styled.section`

`
export const HomeFieldContainer = styled.div`

`

export const HomeCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;


    & > div {
        border-radius: 5px;
        background-color: ${(props) => props.theme.colors.primary};
        max-width: 264px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384);
    }

    & img {
        max-width: 264px;
        border-radius: 5px 5px 0 0;
    }
`

export const HomeImgContainer = styled.div`

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