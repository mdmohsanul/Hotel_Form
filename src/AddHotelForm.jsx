import React from "react";
import { useState, useEffect } from "react";
import InputField from "./InputField";
import { url } from "./constants";

const AddHotelForm = () => {
  const accommodationTypes = [
    "Hotel",
    "Resort",
    "Guesthouse",
    "Hostel",
    "Boutique Hotel",
    "Motel",
    "Bed & Breakfast",
    "Lodge",
  ];
  const priceRanges = ["$50 - $100", "$100 - $200", "$200 - $300", "$300+"];
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    category: "Hotel",
    rating: "",
    website: "",
    phoneNumber: "",
    checkInTime: "",
    checkOutTime: "",
    amenities: "",
    priceRange: "$50 - $100",
    reservationsNeeded: "",
    isParkingAvailable: "",
    isWifiAvailable: "",
    isPoolAvailable: "",
    isSpaAvailable: "",
    isRestaurantAvailable: "",
    photos: "",
  });
  const [hotelData, setHotelData] = useState();
  const changehandler = (e) => {
    const { value, name } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "rating" ? parseInt(value) : value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw "Failed to submit form";
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <h1>Hotel Form</h1>

      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={changehandler}
        />
        <br />
        <br />
        <label htmlFor="category">Category</label>
        <br />
        <select name="category" onChange={changehandler}>
          {accommodationTypes.map((item, i) => (
            <option
              key={i}
              value={formData.item}
              defaultValue={i === 0 ? true : false}
            >
              {item}
            </option>
          ))}
        </select>
        <br />
        <br />
        <label htmlFor="location">Location:</label>
        <br />
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={changehandler}
        />
        <br />
        <br />
        <label htmlFor="rating">Rating:</label>
        <br />
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={changehandler}
        />
        <br />
        <br />
        <label htmlFor="website">Website:</label>
        <br />
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={changehandler}
        />
        <br />
        <br />
        <label htmlFor="phoneNumber">Phone Number:</label>
        <br />
        <input
          type="number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={changehandler}
        />
        <br />
        <br />
        <label htmlFor="checkInTime">CheckIn Time:</label>
        <br />
        <input
          type="text"
          name="checkInTime"
          value={formData.checkInTime}
          onChange={changehandler}
        />
        <br />
        <br />
        <label htmlFor="checkOutTime">CheckOut Time:</label>
        <br />
        <input
          type="text"
          name="checkOutTime"
          value={formData.checkOutTime}
          onChange={changehandler}
        />
        <br />
        <br />
        <label htmlFor="amenities">Amenities:</label>
        <br />
        <input
          type="text"
          name="amenities"
          value={formData.amenities}
          onChange={changehandler}
        />
        <br />
        <br />
        <label htmlFor="priceRange">Price Range:</label>
        <br />
        <select name="priceRange" onChange={changehandler}>
          {priceRanges.map((item, i) => (
            <option key={i} value={formData.item}>
              {item}
            </option>
          ))}
        </select>
        <br />
        <br />
        <label htmlFor="reservationsNeeded">Reservations Needed:</label>
        <br />
        <input
          type="radio"
          name="reservationsNeeded"
          value="true"
          onChange={changehandler}
        />
        Yes
        <input
          type="radio"
          name="reservationsNeeded"
          value="false"
          onChange={changehandler}
        />
        No
        <br />
        <br />
        <label htmlFor="isParkingAvailable">Parking Available:</label>
        <br />
        <input
          type="radio"
          name="isParkingAvailable"
          value="true"
          onChange={changehandler}
        />
        Yes
        <input
          type="radio"
          name="isParkingAvailable"
          value="false"
          onChange={changehandler}
        />
        No
        <br />
        <br />
        <label htmlFor="isWifiAvailable">Wifi Available:</label>
        <br />
        <input
          type="radio"
          name="isWifiAvailable"
          value="true"
          onChange={changehandler}
        />
        Yes
        <input
          type="radio"
          name="isWifiAvailable"
          value="false"
          onChange={changehandler}
        />
        No
        <br />
        <br />
        <label htmlFor="isPoolAvailable">Pool Available:</label>
        <br />
        <input
          type="radio"
          name="isPoolAvailable"
          value="true"
          onChange={changehandler}
        />
        Yes
        <input
          type="radio"
          name="isPoolAvailable"
          value="false"
          onChange={changehandler}
        />
        No
        <br />
        <br />
        <label htmlFor="isSpaAvailable">Spa Available:</label>
        <br />
        <input
          type="radio"
          name="isSpaAvailable"
          value="true"
          onChange={changehandler}
        />
        Yes
        <input
          type="radio"
          name="isSpaAvailable"
          value="false"
          onChange={changehandler}
        />
        No
        <br />
        <br />
        <label htmlFor="isRestaurantAvailable">Restaurant Available:</label>
        <br />
        <input
          type="radio"
          name="isRestaurantAvailable"
          value="true"
          onChange={changehandler}
        />
        Yes
        <input
          type="radio"
          name="isRestaurantAvailable"
          value="false"
          onChange={changehandler}
        />
        No
        <br />
        <br />
        <label htmlFor="photos">Photos</label>
        <br />
        <input
          type="text"
          name="photos"
          value={formData.photos}
          onChange={changehandler}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default AddHotelForm;
