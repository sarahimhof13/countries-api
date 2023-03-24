import { HomeContainer, HomeFieldContainer } from "./Home.styled";
import HomeCard from "./HomeCard";

const Home = () => {
    return (
        <HomeContainer>
            <HomeFieldContainer>
                <input placeholder="Search for a country..." />
            </HomeFieldContainer>
                <HomeCard />
        </HomeContainer>
    );
}

export default Home;