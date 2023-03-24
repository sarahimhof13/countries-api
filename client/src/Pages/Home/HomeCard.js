import { HomeCardContainer, HomeCardText, HomeImgContainer } from "./Home.styled";
import data from "../../data.json"

const HomeCard = () => {
    return (
        <HomeCardContainer>
            {data.map((item) => (
                <div key={item.name}>
                    <img src={item.flags.svg} alt="country flag"></img>
                    <HomeCardText>
                        <a href="/">{item.name}</a>
                        <p><span>Population: </span>{item.population}</p>
                        <p><span>Region: </span>{item.region}</p>
                        <p><span>Capital: </span>{item.capital}</p>
                    </HomeCardText>
                </div>
            ))}
        </HomeCardContainer>
    );
}

export default HomeCard;