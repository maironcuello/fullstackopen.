/** Redux useResource*/
import React from 'react';
import axios from 'axios';

const useResource = (baseUrl, token) => {
    const [resources, setResources] = React.useState([])

    const getAll = async () => {
        const response = await axios.get(baseUrl, {
            validateStatus: (status) => status < 500,
            headers: {
                'token': token
            }
        });
        setResources(response.data);
        // return response.data;
    }

    const create = async (resource) => {
        const response = await axios.post(baseUrl, resource, {
            validateStatus: (status) => status < 500,
            headers: {
                'token': token
            }
        });
        return response.data;
    }

    getAll()
    // React.useEffect(() => {
    // }, []);

    const service = {
        create
    }

    return {
        resources, service
    }
}
export default useResource;