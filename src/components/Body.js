import RestrauntCard from "./RestaurantsCards"
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
             { resList.map((res, i) =>  <RestrauntCard key={res.data.id} resData={res} />)}
            </div>
        </div>
    )
}

export default Body;