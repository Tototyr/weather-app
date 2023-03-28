import { useState, useEffect, useCallback } from 'react';

const useCities = (search) => {
    const [prompts, setPrompts] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchCities = useCallback(async () => {
        setLoading(true);

        try {
            const response = await fetch(
                `https://autocomplete.travelpayouts.com/places2?locale=ru&types[]=airport&types[]=city&term=${search}`
            );
            const data = await response.json();
            setPrompts(data.slice(0, 4));
            setError(null);
        } catch (error) {
            console.log(error);
            setError('Ошибка');
        }

        setLoading(false);
    }, [search]);

    useEffect(() => {
        if (search) {
            fetchCities();
        }

        return;
    }, [search, fetchCities]);

    return { prompts, isLoading, error, setPrompts };
};

export default useCities;
