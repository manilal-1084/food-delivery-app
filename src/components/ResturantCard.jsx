import { CDN_URL } from "../utils/constant";

function ResturantCard(props) {
    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla
    } = resData?.info;

    return (
        <div className="resturant-card" style ={{backgroundColor: "#f0f0f0",}}>
            <img className="resturant-img" alt="res-logo" src={ CDN_URL + cloudinaryImageId} />
            <h3> {name} </h3>
            <h4> {cuisines.join(", ")} </h4>
            <h4> {avgRating} stars </h4>
            <h4> {costForTwo} </h4>
            <h4> {sla.deliveryTime} mins</h4>
        </div>
    )
}
export default ResturantCard;  