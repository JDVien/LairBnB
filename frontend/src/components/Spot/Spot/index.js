import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllSpots } from '../../store/spots';
import ProductDetail from '../SpotDetail';

const Spots = () => {
  const dispatch = useDispatch();
  const spots = useSelector((state) => Object.values(state.spot));
  console.log('spots', spots);
  useEffect(() => {
    dispatch(getAllSpots());
  }, [dispatch]);

  return (
    <div>
      <div className='spots'>
        {/* {spots?.map(({ id, image, name, price }) => ( */}
        {spots?.map(({ id, name, address, city, state, country, price }) => (
          <ProductDetail
            key={id}
            id={id}
            // image={image}
            name={name}
            address={address}
            city={city}
            state={state}
            price={price}
          />
        ))}
      </div>
    </div>
  );
};
export default Spots;
