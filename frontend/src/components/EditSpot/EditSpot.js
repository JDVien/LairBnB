import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
// import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import { editSpot } from '../../store/spot';
import './EditSpot.css';


function EditSpot({ hideModal, spot, user }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [name, setName] = useState(spot?.name);
    const [address, setAddress] = useState(spot?.address);
    const [city, setCity] = useState(spot?.city);
    const [state, setState] = useState(spot?.state);
    const [country, setCountry] = useState(spot?.country);
    const [price, setPrice] = useState(spot?.price);
    // const [image, setImage] = useState('');
    const [errors, setErrors] = useState([]);


    const handleSubmit = async (e) => {
      e.preventDefault();
      if (name && address && price) {
        setErrors([]);
        await dispatch(editSpot({ id: spot.id , name, address, city, state, country, price, userId: user.id }))
        history.push('/spots');
        hideModal();

      // } else {
      //   return setErrors(['Make sure all fields are filled.'])
      }
    };

    return (
      <form onSubmit={handleSubmit}>
        <h3>Update Spot</h3>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Address
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>
        <label>
          City
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </label>
        <label>
          State
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </label>
        <label>
          Country
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </label>
        <label>
          Price
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>

        <button type="submit">Update Spot</button>
      </form>
    );
}

export default EditSpot;
