import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editSpot } from "../../store/spot";
// import { EditFormModal } from './EditFormModal'
import './EditSpot.css';

const EditForm = ({ spot, hideModal }) => {
  const sessionUser = useSelector((state) => state.session.user);
  const { id } = useParams();
  const dispatch = useDispatch();
  // const history = useHistory();
  // console.log('inSpot:', spot)
  const [name, setName] = useState(spot?.name);
  const [description, setDescription] = useState(spot?.description);
  const [city, setCity] = useState(spot?.city);
  const [state, setState] = useState(spot?.state);
  const [country, setCountry] = useState(spot?.country);
  const [image, setImage] = useState(spot?.Images[0]?.image);
  const [price, setPrice] = useState(spot?.price);
  const [amenities, setAmenities] = useState(spot?.amenities);
  const [spotType, setSpotType] = useState(spot?.spotType);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [errors, setErrors] = useState([]);
  const [validationErrors, setValidationErrors] = useState([])

  useEffect(() => {
    const errors = [];

    if (name.length < 1) {
      errors.push("Name cannot be left empty")
    }
    if (description.length < 1) {
      errors.push("Description cannot be left empty")
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
    if (amenities.length < 1) {
      errors.push("Amenities cannot be left empty")
    }
    if (spotType.length < 1) {
      errors.push("Spot type cannot be left empty")
    }

    // if (!Number.isNumber(price)) {
    //   errors.push("Price has to be a numeric value")
    // }
    setValidationErrors(errors);

  }, [name, description, city, state, country, price, amenities, spotType])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);
    const newSpot = {
      id: spot.id,
      name,
      description,
      city,
      state,
      country,
      price,
      image,
      amenities,
      spotType,
      userId: sessionUser.id,
    };
      console.log(newSpot);
      // console.log(spot.id);
      await dispatch(editSpot(newSpot));
      setName("");
      setDescription("");
      setPrice("");
      setCity("");
      setState("");
      setCountry(false);
      setImage("");
      setAmenities('');
      setSpotType('');
      setValidationErrors([]);
      setHasSubmitted(false);
      window.location.reload()
      hideModal();
  };

  const upload = (e) => {
    setImage(e.target.value);
  };

  return (
    <>
    <div className='update_body'>
    <div className='update_form_window'>
    <form className='update_spot_form' onSubmit={handleSubmit}>
      <h3>Update Spot</h3>
      {hasSubmitted &&
        <ul className='errors'>
          {validationErrors.map((error) => (
            <li key={error}>{error}</li>
          ))}
          </ul>
        }
      <label>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
      <textarea
          value={description}
          placeholder='description'
          onChange={(e) => setDescription(e.target.value)}
        >Description</textarea>
      </label>
      <label>
        City
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}

        />
      </label>
      <label>
        State
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}

        />
      </label>
      <label>
        Country
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}

        />
      </label>
      <label>
        Price
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}

        />
      </label>
      <textarea
          value={amenities}
          // placeholder='description'
          onChange={(e) => setAmenities(e.target.value)}
        ></textarea>
          <div className='review_body_rating'>
          <label htmlFor='spotType'>Type</label>
          <select
            name='spotType'
            id='spotType'
            value={spotType}
            placeholder=<i className="fa-regular fa-house-building"></i>
            onChange={(e) => setSpotType(e.target.value)}
          >   <option value="Full Home">Full Home</option>
              <option value="Private Room">Private Room</option>
              <option value="Apartment/Loft">Apartment/Loft</option>
              <option value="Basement">Basement</option>
              <option value="Dungeon">Dungeon</option>
              <option value="Remote Lodging">Remote Lodging</option>
              <option value="Underground Lair">Underground Lair</option>
              <option value="Secret Base">Secret Base</option>
              <option value="Cavernous Domain">Cavernous Domain</option>
              <option value="Mansion">Mansion</option>
          </select>
        </div>


        <div id='img_div'>
        <input
            type='text'
            value={image}
            multiple
            placeholder='Image'
            onChange={upload}
        />
        </div>
      <button className='submit-button' type="submit" >Update Spot</button>
    </form>
    </div>
    </div>
    </>
  );
}

export default EditForm;
