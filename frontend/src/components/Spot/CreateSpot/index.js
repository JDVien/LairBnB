import { useEffect, useState } from 'react';
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
  // const [image, setImage] = useState('');
  // const [errors, setErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [validationErrors, setValidationErrors] = useState([])
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const errors = [];

    if (name.length < 1) {
      errors.push("Name cannot be left empty")
    }
    if (address.length < 1) {
      errors.push("Address cannot be left empty")
    }
    if (city.length < 1) {
      errors.push("City cannot be left empty")
    }
    if (state.length < 1) {
      errors.push("State cannot be left empty")
    }
    if (country.length < 1) {
      errors.push("Country cannot be left empty")
    }
    if (price.length < 1) {
      errors.push("Price cannot be left empty")
    }
    setValidationErrors(errors);

  }, [name, address, city, state, country, price])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);

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
    setName("");
    setAddress("");
    setPrice("");
    setCity("");
    setState("");
    setCountry(false);
    setValidationErrors([]);
    setHasSubmitted(false);
    if (newSpot) {
      history.push(`/spots`); // update later to redirect to detail page
      window.location.reload(); // ? convert to modal to avoid this ? //
    }
  };

  return (
    <>
    <div className='add-spot'>
      <div className='add_spot_window'>
      <h3>Host a Spot!</h3>
      <form onSubmit={handleSubmit} className='add-spot-container'>
        {hasSubmitted &&
        <ul classname='errors'>
          {validationErrors.map((error) => (
            <li key={error}>{error}</li>
          ))}
          </ul>
        }
        {/* <input
          onChange={(e) => setImage(e.target.value)}
          value={image}
          placeholder='Image Url'
        /> */}
        <div id='name_div'>
        <input
          type="text"
          value={name}
          placeholder='Name your spot'
          onChange={(e) => setName(e.target.value)}
        />
        </div>
        <div id='location_div'>
          <input
          type="text"
          value={address}
          placeholder='Address'
          onChange={(e) => setAddress(e.target.value)}
        />

        <input
          type="text"
          value={city}
          placeholder='City'
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          value={state}
          placeholder='State'
          onChange={(e) => setState(e.target.value)}
        />
        <input
          type="text"
          value={country}
          placeholder='Country'
          onChange={(e) => setCountry(e.target.value)}
        />
        </div>
        <div id='price_div'>
        <input
          type="number"
          value={price}
          placeholder='Price Per Night'
          onChange={(e) => setPrice(e.target.value)}
        />
        </div>
        <div id='button_div'>
        <button className='spot-submit-button' type='submit'>
          Host a Spot!
        </button>
        </div>
      </form>

    </div>
    </div>

    </>
  );
};
export default CreateSpot;
