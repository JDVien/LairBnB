import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addSpot } from '../../../store/spot';
import './CreateSpot.css';


const CreateSpot = () => {
  // const [image, setImage] = useState('');
  const sessionUser = useSelector((state) => state.session.user)
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const spot = {
      name,
      address,
      city,
      state,
      country,
      price,
      userId: sessionUser.id,
    };
    let newSpot = await dispatch(addSpot(spot));
    if (newSpot) {
      history.push('/spots');
    }
  };

  return (
    <div className='add-spot'>
      <h3>Host a Spot!</h3>
      <form onSubmit={handleSubmit} className='add-spot'>
        {/* <input
          onChange={(e) => setImage(e.target.value)}
          value={image}
          placeholder='Image Url'
        /> */}
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder='Name your spot'
        />
          <input
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          placeholder='Address'
        />
        <input
          onChange={(e) => setCity(e.target.value)}
          value={city}
          placeholder='City'
        />
        <input
          onChange={(e) => setState(e.target.value)}
          value={state}
          placeholder='State'
        />
        <input
          onChange={(e) => setCountry(e.target.value)}
          value={country}
          placeholder='Country'
        />
        <input
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          placeholder='Price Per Night'
        />
        <button className='submit-button' type='submit'>
          Host a Spot!
        </button>
      </form>
    </div>
  );
};
export default CreateSpot;
