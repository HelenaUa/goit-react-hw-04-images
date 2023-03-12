import PropTypes from 'prop-types';
import { useState } from 'react';
import { HeaderSearchbar, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from "./Searchbar.styled";


export const Searchbar = ({ onSubmit }) => {

    const [name, setName] = useState('');
    

    const handleChange = (event) => {
        setName(event.currentTarget.value)
    };

    const formSubmit = (event) => {
        event.preventDefault();

        if (name.trim() === '') {
            alert('Please enter name');
            return;
        };

        onSubmit(name);
        setName('');
    };

    return (
        <HeaderSearchbar>
            <SearchForm onSubmit={formSubmit} >
                <SearchFormButton type="submit" >
                    <SearchFormButtonLabel></SearchFormButtonLabel>
                </SearchFormButton>

                <SearchFormInput
                    type="text"
                    // name="name"
                    autocomplete="off"
                    // autofocus
                    placeholder="Search images and photos"
                    value={name}
                    onChange={handleChange}
                />
            </SearchForm>
        </HeaderSearchbar>
    )
     
};

Searchbar.propTypes = {
    onSubmit: PropTypes.func,
};