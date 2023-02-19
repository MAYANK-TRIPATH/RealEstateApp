import React, { useState, useEffect, createContext } from 'react';
// importing data
import { housesData } from '../data';

// creating context
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);
  const [date, setDate] = useState('Date Range (Any)');
  const [dates, setDates] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setloading] = useState(false);

// return all properties
useEffect(() => {
  const allCountries = houses.map((house) => {
    return house.country;
  });
  // Removing Duplicate countries from list
 const uniqueCountries = ['Location (any)', ...
 new Set(allCountries)];
 
  setCountries(uniqueCountries);
}, []);


// return all properties
useEffect(() => {
  const allProperties = houses.map((house) => {
    return house.type;
  });
  // Removing Duplicate Properties from list
 const uniqueProperties = ['Location (any)', ...
 new Set(allProperties)];
 
  setProperties(uniqueProperties);
}, []);

const handleClick = () => { 
  // set loading
  setloading(true);

  // fxn to check if string include '(any)
  const isDefault = (str) => {
    return str.split(' ').includes('(any');
  };

  //get first value of price an parse it to number
  const minPrice =  parseInt(price.split(' ')[0]);

  // get 2nd value of price which is max price
  const maxPrice = parseInt(price.split(' ')[2]);

  const newHouses = housesData.filter((house) => {
    const housePrice = parseInt(house.price);

    // if all value are selected
    if(
      house.country === country &&
      house.type === property &&
      housePrice === minPrice &&
      housePrice === maxPrice
    ) {
      return house;
    }

    //if all values are default
    if(isDefault(country) && isDefault(property) &&
    isDefault(price)) {
      return house;
    }

    // if country is not default
    if (!isDefault(country) && isDefault(property) && 
    isDefault(price)){
      return house.couuntry === country;
    }

    // if property is not default
    if (!isDefault(property) && isDefault(country) && isDefault(price)) {
      return house.type === property;
    }

    // if price is not default
    if(!isDefault(price) && isDefault(country) &&
    isDefault(property)) {
      if (housePrice >= minPrice && housePrice <= maxPrice){
        return house;
      }
    }

    // if country and property is not default
    if(!isDefault(country) && !isDefault(property) &&
    isDefault(price)) {
      return house.country === country && house.type ===
      property;
    }

    // if country and price is not default
    if (!isDefault(country) && isDefault(property) &&
     !isDefault(price)){
      if (housePrice >= minPrice && housePrice <= maxPrice) {
        return house.country === country;
      }
    }

    // property and price is not default
    if (!isDefault(country) && !isDefault(property) && !isDefault(price)) {
      if (housePrice >= minPrice && housePrice <= maxPrice) {
        return house.type === property;
      }
    }
  });

  setTimeout(() => {
    return newHouses.length < 1 ? setHouses([]) :
    setHouses(newHouses);
    setloading(false);
  }, 1000);
 
};

  return (
    <HouseContext.Provider value = {{
      country,
      setCountry,
      countries,
      property,
      setProperty,
      properties,
      date,
      setDate,
      dates,
      price,
      setPrice,
      houses,
      loading,
      handleClick,
      loading,
    }}>
      {children}
    </HouseContext.Provider>
  ) 
};


export default HouseContextProvider;
