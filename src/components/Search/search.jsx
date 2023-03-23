import React, { useState } from 'react';
import styles from './Form.module.css';

const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState('');
    const [prompts, setPrompts] = useState([]);
    const [showprompts, setShowPromts] = useState(false);

    const handleOnChange = (e) => {
        const value = e.target.value;
        setSearch(value);

        fetch(
            `https://autocomplete.travelpayouts.com/places2?locale=ru&types[]=airport&types[]=city&term=${value}`
        )
            .then((response) => response.json())
            .then((data) => setPrompts(data.slice(0, 4)))
            .catch((error) => console.log(error));
    };

    const handlePromptsClick = (value) => {
        setSearch(value);
        setPrompts([]);
    };

    return (
        <div className={styles.inputContainer}>
            <input
                placeholder="Найти город"
                aria-label="search"
                required
                value={search}
                onChange={handleOnChange}
                className={`${styles.input} form-control`}
                onFocus={() => setShowPromts(true)}
                onBlur={() => setShowPromts(false)}
            />
            {prompts.length > 0 && (
                <ul className={styles.list}>
                    {prompts.map((prompt) => (
                        <li
                            key={prompt.id}
                            onClick={() => handlePromptsClick(prompt.name)}
                            className={styles.city}
                        >
                            {prompt.name}
                        </li>
                    ))}
                </ul>
            )}
            <button type="submit" onClick={() => onSearchChange(search)} className={styles.button}>
                НАЙТИ
            </button>
        </div>
    );
};

export default Search;
