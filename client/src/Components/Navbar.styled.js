import styled from "styled-components";
import { Device } from "../Devices";

export const NavContainer = styled.header`
    display: flex;
    justify-content: space-between;
    height: 80px;
    padding: 0 16px;
    align-items: center;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);

    @media ${Device.laptopL} {
        padding: 0 81px;
    }

    a {
        font-size: 0.875rem;
        font-weight: 800;

        @media ${Device.laptopL} {
            font-size: 1.5rem;
        }
    }
` 