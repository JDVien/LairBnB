import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addSpot } from "../../../store/spot";
import "./CreateSpot.css";

const CreateSpot = () => {
  // const [image, setImage] = useState('');
  const sessionUser = useSelector((state) => state.session.user);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState([]);
  const [amenities, setAmenities] = useState(
    "1 guest · 1 bedroom · 1 bed · 1 bathrooms · Wifi · Kitchen · Free parking · Washing Machine"
  );
  const [spotType, setSpotType] = useState("");
  const [errors, setErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [validationErrors, setValidationErrors] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const errors = [];

    if (name.length < 1) {
      errors.push("Name cannot be left empty");
    }
    if (description.length < 1) {
      errors.push("description cannot be left empty");
    }
    if (city.length < 1) {
      errors.push("City cannot be left empty");
    }
    if (state.length < 1) {
      errors.push("State cannot be left empty");
    }
    if (country.length < 1) {
      errors.push("Country cannot be left empty");
    }
    if (price.length < 1) {
      errors.push("Price cannot be left empty");
    }
    if (amenities.length < 1) {
      errors.push("Amenities cannot be left empty");
    }
    if (spotType.length < 1) {
      errors.push("Spot type cannot be left empty");
    }
    setValidationErrors(errors);
  }, [name, description, city, state, country, price, amenities, spotType]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);

    const spot = {
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
    let newSpot = await dispatch(addSpot(spot));
    setName("");
    setDescription("");
    setPrice("");
    setCity("");
    setImage("");
    setState("");
    setCountry(false);
    setAmenities(
      "1 guest · 1 bedroom · 1 bed · 1 bathrooms · Wifi · Kitchen · Free parking · Washing Machine"
    );
    setSpotType("");
    setValidationErrors([]);
    setHasSubmitted(false);
    if (newSpot) {
      history.push(`/spots`); // update later to redirect to detail page
      window.location.reload(); // ? convert to modal to avoid this ? //
    }
  };

  const upload = (e) => {
    setImage(e.target.value);
  };

  return (
    <>
      <div className="add-spot">
        <div className="add_spot_window">
          <h3>Host a Spot!</h3>
          <form onSubmit={handleSubmit} className="add-spot-container">
            {hasSubmitted && (
              <ul className="errors">
                {validationErrors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            )}
            <div id="name_div">
              <input
                type="text"
                value={name}
                placeholder="Name your spot"
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="number"
                value={price}
                placeholder="Price Per Night"
                onChange={(e) => setPrice(e.target.value)}
              />

              <label htmlFor="spotType">Type</label>
              <select
                name="spotType"
                id="spotType"
                value={spotType}
                placeholder=<i className="fa-regular fa-house-building"></i>
                onChange={(e) => setSpotType(e.target.value)}
              >
                {" "}
                <option value="Full Home">Full Home</option>
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
            <h3>Description & Amenities</h3>
            <div className="textboxes_div">
              <div id="description_div">
                <textarea
                  className="create_textbox"
                  value={description}
                  placeholder="Tell us more about your spot!"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="amenities_div">
                <textarea
                  className="create_textbox"
                  value={amenities}
                  // placeholder='description'
                  onChange={(e) => setAmenities(e.target.value)}
                ></textarea>
              </div>
            </div>

            <div className="location_container">
              <input
                type="text"
                value={city}
                placeholder="City"
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                type="text"
                value={state}
                placeholder="State"
                onChange={(e) => setState(e.target.value)}
              />

              <input
                type="text"
                value={country}
                placeholder={"Country"}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>

            <i in="house_icon" className="fa-regular fa-house-building"></i>
            <div id="img_div">
              <input
                type="text"
                value={image}
                placeholder="Image"
                onChange={upload}
              />
            </div>
            <div id="button_div">
              <button className="spot-submit-button" type="submit">
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
