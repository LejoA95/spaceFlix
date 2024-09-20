"use client";
import { createContext, useState  } from "react";
import { apiRequest } from "./request";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [apiData, setApiData] = useState(null);

  // const createVideo = async (path, method, data) => {
  //   const response = await apiRequest(path, method, data);
  //   if (response.status !== 200) {
  //     // console.log(response);
  //   }
  //   setApiData(response.data);
  //   return response;
  // };

  const getMovies = async (path, method) => {
    const response = await apiRequest(path, method);
    console.log(response);
    return response;
  };

  const getGenres = async (path, method) => {
    const response = await apiRequest(path, method);
    console.log(response);
    return response;
  };


  return (
    <ApiContext.Provider
      value={{
        apiData,
        // createVideo,
        getMovies,
        getGenres,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export { ApiContext, ApiProvider };
