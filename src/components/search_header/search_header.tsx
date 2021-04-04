import React, {  memo, useRef } from 'react';
import styles from './search_header.module.css';

type PropTypes = {
    handleSearch: (query: string) => void;
}

const Searchheader = memo(({ handleSearch }: PropTypes) => {
    const inputRef = useRef<HTMLInputElement>(null); // React.useRef can only be null, or the element object.

    const onSearch = () => {
        const value = inputRef.current!.value;
        handleSearch(value)
    }

    const onClick = () => {
        onSearch();
    }

    const onKeyPress = (e:React.KeyboardEvent) => {
        if(e.key === 'Enter') {
            onSearch();
        }
    }

    console.log('check header render!!')

    return (
        <header className={styles.header}>
            <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="" className={styles.logo} />
            <h1>Sutube</h1>
            <input ref={inputRef} type="search" placeholder="search..." className={styles.search}  onKeyPress={onKeyPress} />
            <button onClick={onClick}>search</button>
        </header>
    );
});

export default Searchheader;