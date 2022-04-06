import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { deleteSpot } from '../../../store/spot';
// import { getAllSpots } from '../../../store/spot';
// import { getSpot } from '../../../store/spot';
// import { Modal } from '../../../context/Modal';
// import EditSpot from '../../EditSpot/EditSpot';
import EditFormModal from '../../EditSpot/EditFormModal';
import './SpotDetail.css';

const SpotDetail = ( { id, name, address, city, state, country, price, userId }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const { spotId } = useParams();
  // spots = { id, name, address, city, state, country, price}
  const spot = useSelector(state => state.spots[spotId])
  const history = useHistory();
  console.log('==============================++++++++++++++++++++++')
  console.log(spot)
  // useEffect(() => {
  //   dispatch(getSpot(spotId));
  // }, [dispatch, spotId]);

  const handleDelete = (spotId) => {
    dispatch(deleteSpot(spotId));
    history.push('/')
  };

  if (!spot) return null;
  let content = (
    <div className="spot-detail-lists">
    <div>
      <h2>{spot?.name}</h2>
      <ul>
        <li>
          <b>address</b> {spot?.address}
        </li>
        <li>
          <b>City</b> {spot?.city}
        </li>
        <li>
          <b>State</b> {spot?.state}
        </li>
        <li>
          <b>Price</b> {spot?.price}
        </li>
        </ul>
        </div>
        </div>
  )

  return (
    <div className='spot_detail'>
      {/* <img src={image} alt={name} /> */}
      {/* {spots.map((spot) => ( */}
        {content}
        { sessionUser && sessionUser?.id === spot?.userId &&
        <div className='button-row'>
          <button onClick={() => handleDelete(spotId)} className='delete-button'>
            Delete {console.log('000000000000000000000000000000000000')}
          </button>
          {/* <button className='update-button'>Update</button> */}
            <EditFormModal user={{...sessionUser}}
              spot={{ id, name, address, city, state, country, price, userId }} />
              {console.log(spot)}
        </div>
        }
    </div>
  );
};

export default SpotDetail;
