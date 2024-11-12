import React from "react";
import { useState, useEffect } from "react";
import { url } from "./constants";

const HotelList = () => {
  const [hotelList, setHotelList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchHotel();
  }, [hotelList]);
  async function fetchHotel() {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setHotelList(data))
      .catch((error) => setTimeout(error.message))
      .finally(() => setLoading(false));
  }
  const deleteHandler = async (id) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw "Failed to delete";
      }
      const data = await response.json();
      console.log("Movie deleted successfully ", data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        {hotelList.map((item) => (
          <li key={item._id}>
            {item.name}{" "}
            <button onClick={() => deleteHandler(item._id)}>Delete</button>
          </li>
        ))}
      </div>
    </>
  );
};

export default HotelList;
