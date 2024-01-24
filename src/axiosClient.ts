import axios from "axios";

const axiosClient = axios.create({
  baseURL : "https://rimac-front-end-challenge.netlify.app/api"
})

export default axiosClient