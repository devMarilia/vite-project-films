import axios from "axios";

export default axios.create({
    baseURL: "https://api-filmes-1.herokuapp.com/filmes/",
    headers: {
        "Content-Type": "application/json",
    }
});
