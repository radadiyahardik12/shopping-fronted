import axios from 'axios';

export const apiProduct = async (endPoint, data) => {
    try {
        const headers = {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem('authToken')}` // Added space after Bearer
            }
        };

        const response = await axios.post(endPoint, data, headers); // Wrap headers inside an object
        console.log("response", response);
        
        return response.data.data;
    } catch (error) {
        console.error("Error in API call:", error.response ? error.response.data : error.message);
        throw error;
    }
};
