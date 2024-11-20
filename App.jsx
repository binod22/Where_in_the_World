import React from "react";
import Header from "./components/Header";
import './App.css'
import SearchBar from "./components/SearchBar";
import SelectMenu from "./components/SelectMenu";
import CountriesList from "./components/CountriesList";

const App = () => {
  return <>
    <Header/>
    <main>
    <div className="search-filter-container">
    <SearchBar/>
    <SelectMenu/>
    </div>
    <CountriesList/>
    </main>

    
  </>
};

export default App;
