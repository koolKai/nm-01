const RestrauntCard = (props) => {
    const {resData} = props
    const {name, cuisines, avgRating, cloudinaryImageId, costForTwo, deliveryTime} = resData.data

    console.log({name, cuisines, avgRating, cloudinaryImageId})
 return (
    <div className='res-card' style={{
        backgroundColor: "lightGray"
    }}>
        <img className='res-logo' alt="res-logo" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_350,c_fill/"+ cloudinaryImageId}/>
        <h3>{name}</h3>
        <h5 >{cuisines.join(", ")}</h5>
        <h5>{avgRating}</h5>
        <h5>{costForTwo}</h5>
        <h5>{deliveryTime}</h5>
    </div>
 )
}

export default RestrauntCard