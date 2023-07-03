import { useState } from 'react';

export const Searchbar = ({ setResults }:any) => {
    const [input, setInput] = useState("");

    const fetchData = (value:string) => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => {
                const results = json.filter((user:any) => {
                return (
                    value && 
                    user && 
                    user.name && 
                    user.name.toLowerCase().includes(value)
                );
            });
            setResults(results);
        });
};

const handleChange = (value:string) => {
    setInput(value)
    fetchData(value)
};

return (
    <ul id='nav-search'>
        <li><input type="text" name="searchbar" id="searchbar" placeholder='Buscar devs...' value={input} onChange={(e) => handleChange(e.target.value)} /></li>
    </ul>
);

};

