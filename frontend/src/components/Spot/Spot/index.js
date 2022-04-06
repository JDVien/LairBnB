import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import { getAllSpots } from '../../../store/spot';
// import SpotDetail from '../SpotDetail';
import SpotCard from '../../SpotCard/SpotCard';
import SpotDetail from '../SpotDetail/'
import './Spot.css';

const Spots = () => {
  const dispatch = useDispatch();
  const { spotId } = useParams();
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





























// {/*
// // const Spots = ({id}) => { */}
//   const dispatch = useDispatch();
//   const { spotId } = useParams(id);
//   const spots = useSelector((state) => Object.values(state.spots));


//   useEffect(() => {
//     dispatch(getAllSpots());
//   }, [dispatch]);

//   if (!spots) return null;

//   return (
//     <nav>
//       <div className='spots'>
//         {/* {spots?.map(({ id, image, name, price }) => ( */}

//         {spots.map((spot) => (
//                   // <div className='spots_card_body' onClick={(e) => window.location.href=`/${spot.id}`}>
//                   <NavLink key={spot.name} to={`/spots/${spot.id}`}/>
//             <SpotCard src='https://seattlerefined.com/resources/media/05b9d5de-4f6f-4f13-aa4a-67e709981102-large16x9_a.JPG?1575572677165'
//                 className="spot" key={spot.id}
//                 name={spot.name}
//                 city={spot.city}
//                 state={spot.state}
//                 price={spot.price}
//             ></SpotCard>
//             </div>
//         )
//       )}
//     </div>
//     </nav>
//   );
// };
{/* <div className="spot" key={spot.id}>
<div className='spot-content'>
<h3>{spot.name}</h3>
<p>{spot.address}</p>
<p>${spot.price} per night</p>
<p>{spot.city}</p>
</div> */}


// (
//   <SpotDetail
//   key={spot.id}
//   id={spot.id}
//   name={spot.name}
//   address={spot.address}
//   city={spot.city}
//   state={spot.state}
//   country={spot.country}
//   price={spot.price}
// ></SpotDetail>
// )
