import axios from "axios";

const baseURL = "https://my-json-server.typicode.com/LejoA95/spaceFlix-api";

const apiRequest = async (path, method, data) => {
  try {
    const response = await axios({
      method: method,
      url: `${baseURL}${path}`,
      data: data,
    });

    // console.log(response);
    return {
      data: response.data,
      message: response.data.message,
      status: response.status,
    };
  } catch (error) {
    return error;
  }
};

export { apiRequest };
