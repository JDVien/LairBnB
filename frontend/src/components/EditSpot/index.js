import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editSpot } from "../../store/spot";
// import { EditFormModal } from './EditFormModal'
import './EditSpot.css';

const EditForm = ({ spot, hideModal }) => {
  const sessionUser = useSelector((state) => state.session.user);
  // const { id } = useParams();
  const dispatch = useDispatch();
  // const history = useHistory();
  // console.log('inSpot:', spot)
  const [name, setName] = useState(spot?.name);
  const [description, setDescription] = useState(spot?.description);
  const [city, setCity] = useState(spot?.city);
  const [state, setState] = useState(spot?.state);
  const [country, setCountry] = useState(spot?.country);
  const [price, setPrice] = useState(spot?.price);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [validationErrors, setValidationErrors] = useState([])
  // const [image, setImage] = useState('');
  // const [errors, setErrors] = useState([]);

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
    // if (!Number.isNumber(price)) {
    //   errors.push("Price has to be a numeric value")
    // }
    setValidationErrors(errors);

  }, [name, description, city, state, country, price])

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
      // image,
      userId: sessionUser.id,
    };
      console.log(newSpot);
      console.log(spot.id);
      await dispatch(editSpot(newSpot));
      setName("");
      setDescription("");
      setPrice("");
      setCity("");
      setState("");
      setCountry(false);
      setValidationErrors([]);
      setHasSubmitted(false);
      hideModal();
  };

  return (
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
        Description
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
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
      <button className='submit-button' type="submit">Update Spot</button>
    </form>
    </div>
    </div>
  );
}

export default EditForm;
