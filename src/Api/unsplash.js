import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/search/photos",
  headers: {
    Authorization: "Client-ID hAQrGky7ELTyZVNGQQCCDKfn1-0dXwydpKKX3nyrQTg",
  },
});
