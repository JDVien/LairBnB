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
             <SpotCard src='https://media.wired.com/photos/5933b12d714b881cb296bd67/master/w_2560%2Cc_limit/colombo2_f.jpg'
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
