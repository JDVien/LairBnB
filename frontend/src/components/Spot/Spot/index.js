import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllSpots } from '../../../store/spot';
import SpotDetail from '../SpotDetail';
import SpotCard from '../../SpotCard/SpotCard';
import './Spot.css';

const Spots = () => {
  const dispatch = useDispatch();
  const spots = useSelector((state) => Object.values(state.spots));

  console.log('spots===========================<><><><><>', spots);

  useEffect(() => {
    dispatch(getAllSpots());
  }, [dispatch]);

  if (!spots) return null;
  return (
      <div className='spots'>
        {/* {spots?.map(({ id, image, name, price }) => ( */}
        <div className='spots_card_body'>
        {spots.map((spot) => (
            <SpotCard src='https://seattlerefined.com/resources/media/05b9d5de-4f6f-4f13-aa4a-67e709981102-large16x9_a.JPG?1575572677165'
                className="spot" key={spot.id}
                name={spot.name}
                city={spot.city}
                state={spot.state}
                price={spot.price}
            ></SpotCard>
        ))}
    </div>

      </div>

  );
};
{/* <div className="spot" key={spot.id}>
<div className='spot-content'>
<h3>{spot.name}</h3>
<p>{spot.address}</p>
<p>${spot.price} per night</p>
<p>{spot.city}</p>
</div> */}
export default Spots;
