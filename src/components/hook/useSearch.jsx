import { useState } from 'react';

const useSearch = () => {
    const [search, setSearch] = useState('');

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    return [search, handleSearchChange, setSearch];
};

export default useSearch;
