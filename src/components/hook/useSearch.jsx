import { useState } from 'react';

export const useSearch = () => {
    const [search, setSearch] = useState('');

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    return [search, handleSearchChange, setSearch];
};

export default useSearch;
