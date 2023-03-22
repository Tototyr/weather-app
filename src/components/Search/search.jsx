import React, { useState } from 'react';
import styles from './Form.module.css';

const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);

    const handleOnChange = (e) => {
        e.preventDefault();
        onSearchChange(search);
    };

    return (
        <div>
            <input
                placeholder="Найти город"
                aria-label="search"
                required
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={`${styles.input} form-control`}
            />
            <button type="subnit" onClick={handleOnChange} className={styles.button}>
                НАЙТИ
            </button>
        </div>
    );
};

export default Search;
