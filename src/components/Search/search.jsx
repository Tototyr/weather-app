import React, { useState } from 'react';
import styles from './Form.module.css';
import useSearch from '../hook/useSearch';
import useCities from '../hook/useCities';

const Search = ({ onSearchChange }) => {
    const [search, handleSearchChange, setSearch] = useSearch();
    const { prompts, error } = useCities(search);
    const [isPromptOpen, setIsPromptOpen] = useState(false);

    const handlePromptsClick = (value) => {
        setSearch(value);
        setIsPromptOpen(false);
    };

    const handleInputClick = () => {
        setIsPromptOpen(!isPromptOpen);
    };

    return (
        <div className={styles.inputContainer}>
            <input
                placeholder="Найти город"
                aria-label="search"
                required
                value={search}
                onChange={handleSearchChange}
                onClick={handleInputClick}
                className={`${styles.input} form-control`}
            />

            {isPromptOpen && prompts.length > 0 && (
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

            {error && <p className={styles.error}>Не удалось найти город.</p>}

            <button type="submit" onClick={() => onSearchChange(search)} className={styles.button}>
                НАЙТИ
            </button>
        </div>
    );
};

export default Search;
