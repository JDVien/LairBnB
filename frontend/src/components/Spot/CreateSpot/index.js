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
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const spot = {
      // image,
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
      history.push('/');
    }
  };

  return (
    <div className='add-spot'>
      <h3>Add A Spot</h3>
      <form onSubmit={handleSubmit} className='add-spot'>
        {/* <input
          onChange={(e) => setImage(e.target.value)}
          value={image}
          placeholder='Image Url'
        /> */}
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder='Spot Name'
        />
          <input
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          placeholder='Spot Address'
        />
        <input
          onChange={(e) => setCity(e.target.value)}
          value={city}
          placeholder='Spot City'
        />
        <input
          onChange={(e) => setState(e.target.value)}
          value={state}
          placeholder='Spot State'
        />
        <input
          onChange={(e) => setCountry(e.target.value)}
          value={country}
          placeholder='Spot Country'
        />
        <input
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          placeholder='Price'
        />
        <button className='submit-button' type='submit'>
          Add Spot
        </button>
      </form>
    </div>
  );
};
export default CreateSpot;
