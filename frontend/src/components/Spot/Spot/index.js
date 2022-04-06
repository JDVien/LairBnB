import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route } from 'react-router-dom';
import { getAllSpots } from '../../../store/spot';
// import SpotDetail from '../SpotDetail';
import SpotCard from '../../SpotCard/SpotCard';
import SpotDetail from '../SpotDetail/'
import './Spot.css';

const Spots = () => {
  const dispatch = useDispatch();
  // const { spotId } = useParams();
  const spots = useSelector((state) => Object.values(state.spots));

    useEffect(() => {
    dispatch(getAllSpots());
  }, [dispatch]);

  if (!spots) return null;

  return (
    <main>
      <div className='spots_card_body'>
        {spots?.map(spot => {
          return (
          <NavLink to={`/${spot?.id}`} >
             <SpotCard src='https://seattlerefined.com/resources/media/05b9d5de-4f6f-4f13-aa4a-67e709981102-large16x9_a.JPG?1575572677165'
                 className="spot" key={spot?.id}
                 name={spot?.name}
                 city={spot?.city}
                 state={spot?.state}
                price={spot?.price}
              ></SpotCard>
          </NavLink>
          )
        })}
        </div>
          <Route path='/spots/:spotId'>
            <SpotDetail
              spots={spots}
            />
          </Route>
        </main>
  )


}

export default Spots;
