import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Route } from "react-router-dom";
import { getAllSpots } from "../../../store/spot";
// import SpotDetail from '../SpotDetail';
import SpotCard from "../../SpotCard/SpotCard";
import SpotDetail from "../SpotDetail/";
import "./Spot.css";

const Spots = () => {
  const dispatch = useDispatch();

  const spots = useSelector((state) => state.spots);
  const spotsArr = Object.values(spots);
  // window.onbeforunload = function () {
  //   window.scrollTo(0, 0);
  // }
  useEffect(() => {
    dispatch(getAllSpots());
  }, [dispatch]);

  if (!spots) return null;

  return (
    <div className='spotsPage'>
      <div className='spotsPage_info'>
        <p>{spots.length} stays · April 11 to 20 · 2 guest </p>
        <h1>Stays nearby</h1>
                <button variant="outlined">Cancellation Flexibility</button>
                <button variant="outlined">Type of place</button>
                <button variant="outlined">Price</button>
                <button variant="outlined">Rooms and beds</button>
                <button variant="outlined">More filters</button>
        </div>
      <div className="spots_card_body">
        {spotsArr?.map((spot) => {
          return (
            <div className="spot" key={spot?.id}>
            <div className="spot-image">
            <NavLink className="spot-image" to={`/${spot?.id}`}>
              <SpotCard
                src={spot?.Images[0]?.image}
                alt="spot"
                key={spot?.Images[0]?.id}
                name={spot?.name}
                city={spot?.city}
                state={spot?.state}
                price={spot?.price}
                amenities={spot?.amenities}
                spotType={spot?.spotType}
              ></SpotCard>
            </NavLink>
            </div>
            </div>
          );
        })}
      </div>
      <Route path="/spots/:spotId">
        <SpotDetail spots={spots} />
      </Route>
    </div>
  );
};

export default Spots;
