
import axios from 'axios';

export const auth = async (endPoint, data) => {
    try {
        const headers = {
            'Content-Type': 'multipart/form-data',
        };
        
        const response = await axios.post(endPoint, data, { headers });
        console.log("response", response);
        
        return response.data.data
    } catch (error) {
        console.error("Error in API call:", error);
        throw error; 
    }
};
