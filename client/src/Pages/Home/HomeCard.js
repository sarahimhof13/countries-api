import { HomeCardContainer, HomeCardText } from "./Home.styled";

const HomeCard = ({ flags, name, population, region, capital }) => {
    return (
        <HomeCardContainer>
            <div>
                {flags && <img src={flags.svg} alt="country flag"></img>}
                <HomeCardText>
                    <a href="/">{name}</a>
                    <p><span>Population: </span>{population}</p>
                    <p><span>Region: </span>{region}</p>
                    <p><span>Capital: </span>{capital}</p>
                </HomeCardText>
            </div>
        </HomeCardContainer>
    );
}

export default HomeCard;