import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'6c87e0cda7da4bfba3a79e4a44a241e4'
    }
})