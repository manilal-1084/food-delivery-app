import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

function Body() {
    const [listOfResturants,setListOfResturants] = useState([]);
    const [filteredResturant, setFilteredResturant ] = useState([]);
    const [searchText, setSearchText] = useState("");
    useEffect( () => {
        fetchData();
    }, [])

    async function fetchData() {
        const getData = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await getData.json();
        //Optional Chaining
        const fetchedList = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfResturants(fetchedList);
        setFilteredResturant(fetchedList);
    }
    
    //Conditional Rendering using Ternary Operator
    return listOfResturants.length === 0 ? ( <Shimmer /> ): (
        <div className="body">
            <div className="filter">
                <div className="search"> 
                    <input type="text" value = {searchText} onChange={ (e) => setSearchText(e.target.value) } />
                    <button onClick={ () => {
                        const filteredList = listOfResturants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredResturant(filteredList);
                    }}> Search</button>
                </div>
                <button className="filter-btn" onClick={() =>{
                    const filteredList = listOfResturants.filter(
                        (res) => res.info.avgRating > 4.5
                    );
                    setFilteredResturant(filteredList);
                }}>Top Rated Resturant</button>
            </div>
            <div className="resturant-container">
                {filteredResturant.map((resturant) => (
                    <ResturantCard key={ resturant.info.id } resData={resturant} />
                ))}
            </div>

        </div>
    )
}

export default Body;


