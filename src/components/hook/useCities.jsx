import { useState, useEffect } from 'react';

const useCities = (search) => {
    const [prompts, setPrompts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCities = async () => {
            if (search) {
                try {
                    const response = await fetch(
                        `https://autocomplete.travelpayouts.com/places2?locale=ru&types[]=airport&types[]=city&term=${search}`
                    );
                    const data = await response.json();
                    setPrompts(data.slice(0, 4));
                    setError(null);
                } catch (error) {
                    console.error(error);
                    setError(error);
                }
            } else {
                setPrompts([]);
                setError(null);
            }
        };

        const debounceTimer = setTimeout(() => {
            fetchCities();
        }, 700);

        return () => clearTimeout(debounceTimer);
    }, [search]);

    return { prompts, error };
};

export default useCities;
