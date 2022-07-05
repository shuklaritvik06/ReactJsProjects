import React, { useContext, createContext, useState } from "react";

const ResultContext = createContext();
const BASE_URL = 'https://google-search3.p.rapidapi.com/api/v1';

export const ContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("elon");
  const getResults = async (url) => {
    setLoading(true);
    try{
      const data = await fetch(`${BASE_URL}${url}`,{
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '4837259725msh50d7a79cda0eddcp1c81f0jsnaeecd844589d',
          'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
        }
      });
      const responseJSON = await data.json();
      setResults(responseJSON);
      setLoading(false);
    }catch(e){
      console.log(e);
    }
  };
  return (
    <ResultContext.Provider value={{getResults,search,setSearch,results,loading}}>
        {children}
   </ResultContext.Provider>     
  );
};

export const useResults = () => useContext(ResultContext);