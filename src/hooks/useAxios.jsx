import axios from 'axios';
import { useEffect, useState } from 'react';

export const useAxios = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get(url)
            .then((res) => {
                setData(res.data);
                setError(null);
                setLoading(true);
            })
            .catch((error) => {
                setData([]);
                setError('주소 못찾음');
                setData(false);
            });
    }, [url]);
    return { data, loading, error };
};
