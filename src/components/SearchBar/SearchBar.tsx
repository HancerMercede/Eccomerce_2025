import React, { useState } from 'react';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  onSearch, 
  placeholder = "Search products...", 
  className = "" 
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  const handleClear = () => {
    setSearchQuery('');
    if (onSearch) {
      onSearch('');
    }
  };

  return (
    <div className={`${styles.searchContainer} ${className}`}>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder={placeholder}
            className={styles.searchInput}
          />
          {searchQuery && (
            <button
              type="button"
              onClick={handleClear}
              className={styles.clearButton}
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>
        <button type="submit" className={styles.searchButton}>
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <span className={styles.buttonText}>Search</span>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
