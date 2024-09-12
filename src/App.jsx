


// import axios from 'axios';
// import React, { useEffect } from 'react'
// import { useState } from 'react'


// function App() {
//   const [country, setCountry] = useState("");
//   const [countryData, setCountryData] =useState({});
//   const [searchTerm, setSearchTerm] = useState("India");

//   const getCovidData = async (searchTerm) => {
//     try{
//       const response = await axios.get(`https://disease.sh/v3/covid-19/countries/${searchTerm}`);
//       setCountryData(response.data);
//     } catch (error) {
//       console.log("Error fetcching data",error);
//     }
//   };

//   useEffect(() => {
//     getCovidData(searchTerm);
//   },[searchTerm])

//   const handleSearch = (e) => {
//     setCountry(e.target.value);
//   };

//   const searchCountry = () => {
//     setSearchTerm(country);
//   };

//   return (
//     <div>
//       <h1>COVID-19 CASES</h1>
//       <div>
//         <input 
//           type='text'
//           placeholder='Search country'
//           value={country}
//           onChange={handleSearch}
//         /> 
//         <button onClick={searchCountry}>Search </button>
//       </div>

//       {countryData.country && (
//         <div>
//           <h2>Country Name: {countryData.country}</h2>
//           <p>Cases: {countryData.cases.toLocalString()}</p>
//           <p>Deaths: {countryData.deaths.toLocalString()}</p>
//           <p>Recovered: {countryData.recovered.toLocalString()}</p>
//           <p>Cases Today: {countryData.todayCases.toLocalString()}</p>
//           <p>Deadths Today: {countryData.Deaths.toLocalString()}</p>
//           <p>Recovered Today: {countryData.todayRecovered.toLocalString()}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;







import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [country, setCountry] = useState("");
  const [countryData, setCountryData] = useState({});
  const [searchTerm, setSearchTerm] = useState("India");

  // Function to fetch COVID data
  const getCovidData = async (searchTerm) => {
    try {
      const response = await axios.get(`https://disease.sh/v3/covid-19/countries/${searchTerm}`);
      setCountryData(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  // Fetch data when component mounts and when search term changes
  useEffect(() => {
    getCovidData(searchTerm);
  }, [searchTerm]);

  // Handler for the input field
  const handleSearch = (e) => {
    setCountry(e.target.value);
  };

  // Function to search when 'Search' button is clicked
  const searchCountry = () => {
    setSearchTerm(country);
  };

  return (
    <div className="App">
      <h1>COVID-19 CASES</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search country"
          value={country}
          onChange={handleSearch}
        />
        <button onClick={searchCountry}>Search</button>
      </div>

      {countryData.country && (
        <div className="country-info">
          <h2>Country Name: {countryData.country}</h2>
          <p>Cases: {countryData.cases.toLocaleString()}</p>
          <p>Deaths: {countryData.deaths.toLocaleString()}</p>
          <p>Recovered: {countryData.recovered.toLocaleString()}</p>
          <p>Cases Today: {countryData.todayCases.toLocaleString()}</p>
          <p>Deaths Today: {countryData.todayDeaths.toLocaleString()}</p>
          <p>Recovered Today: {countryData.todayRecovered.toLocaleString()}</p>
        </div>
      )}
    </div>
  );
}

export default App;