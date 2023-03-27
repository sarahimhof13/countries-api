import { HomeContainer, HomeFieldContainer, HomeCards } from "./Home.styled";
import HomeCard from "./HomeCard";
import { useState, useMemo, useEffect } from "react";
import data from "../../data.json"

const Home = () => {
    const [countryList, setCountryList] = useState([]);

    const [selectedRegion, setSelectedRegion] = useState();

    useEffect(() => {
        setCountryList(data);
    }, []);

    let filteredList = useMemo(getFilteredList, [selectedRegion, countryList]);

    function getFilteredList() {
        if (!selectedRegion) {
            return countryList;
        }
        return countryList.filter((item) => item.region === selectedRegion);
    }

    function handleCategoryChange(event) {
        setSelectedRegion(event.target.value);
    }

    return (
        <HomeContainer>
            <HomeFieldContainer>
                <input placeholder="Search for a country..." />
                <select onChange={handleCategoryChange}>
                    <option value="">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </HomeFieldContainer>
            <HomeCards>
                {filteredList.map((element, index) => (
                    <HomeCard {...element} key={index} />
                ))}
            </HomeCards>
        </HomeContainer>
    );
}

export default Home;