import { NavContainer } from "./Navbar.styled";
import { SwitchContainer, SwitchLabel, SwitchInput, SwitchSlider } from "./Switch.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ isDarkMode, toggleTheme }) => {
    return (
        <NavContainer>
            <a href="/">Where in the world?</a>
            <SwitchContainer>
                <FontAwesomeIcon icon={faSun} />
                <SwitchLabel>
                    <SwitchInput
                        type="checkbox"
                        checked={isDarkMode}
                        onChange={toggleTheme}
                    />
                    <SwitchSlider />
                </SwitchLabel>
                <FontAwesomeIcon icon={faMoon} />
            </SwitchContainer>
        </NavContainer>
    );
}

export default Navbar;