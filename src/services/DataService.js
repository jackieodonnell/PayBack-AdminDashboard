import axios from "axios";

export default {

    async getData(){
        return await axios.get("http://localhost:3002/api/v1/data/admin", { 
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            }
    });
    }
}