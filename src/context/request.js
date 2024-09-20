import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3/';

const apiRequest = async (path, method = 'GET', data = null) => {
  const apiKey = 'f9ee8d8a9a43c84a7d77b437d346ff52';  // Tu API Key
  const token = window.localStorage.getItem('token') || 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOWVlOGQ4YTlhNDNjODRhN2Q3N2I0MzdkMzQ2ZmY1MiIsIm5iZiI6MTcyNjc5MTcxOC40NjQ3MTEsInN1YiI6IjY2ZWNiZWYxY2RkMTA4ZWQ5MzIyOWM5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UIifBcNshjNlRIgc8U0zdE8Fh07mNi-jb0AySpCZK3Y';

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    },
    params: {
      api_key: apiKey
    }
  };

  try {
    const response = await axios({
      method: method,
      url: `${baseURL}${path}`,
      data: data,
      ...config // Agrega el config con headers y params
    });

    console.log(response);
    return { data: response.data, status: response.status };
  } catch (error) {
    console.error('Error en la solicitud:', error);
    return { message: error.message, status: error.response?.status || 500 };
  }
};

export { apiRequest };





// import axios from "axios";

// const baseURL = "https://my-json-server.typicode.com/LejoA95/spaceFlix-api";

// const apiRequest = async (path, method, data) => {
//   try {
//     const response = await axios({
//       method: method,
//       url: `${baseURL}${path}`,
//       data: data,
//     });

//     // console.log(response);
//     return {
//       data: response.data,
//       message: response.data.message,
//       status: response.status,
//     };
//   } catch (error) {
//     return error;
//   }
// };

// export { apiRequest };
