import { createGlobalStyle } from "styled-components"
import { Device } from "./Devices";

export const lightTheme = {
    colors: {
        primary: '#FFFFFF',
        secondary: "#FAFAFA",
        text: "#111517"
    },
};

export const darkTheme = {
    colors: {
        primary: '#2B3844',
        secondary: "#202C36",
        text: "#FFFFFF"
    },
};

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    body {
		background-color: ${(props) => props.theme.colors.secondary};
        color: ${(props) => props.theme.colors.text};
        font-family: 'Nunito Sans', sans-serif;
	}

    a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.text};
    }

    h1 {
        font-size: 1.375rem;
        font-weight: 800;

        @media ${Device.laptopL} {
            font-size: 2rem;
        }
    }

    h2 {
        font-size: 1rem;
    }

    p {
        font-size: 0.875rem;
    }
`