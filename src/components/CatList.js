import React, {useState, useEffect} from 'react';
import CatItem from './CatItem';
import {getCats} from '../services/catApi';
import loading from "../global-loading.gif"

const CatList = () => {
    const [cats, setCats] = useState([]);
    const [limit, setLimit] = useState(10);
    const [onLoad, setOnLoad] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCats, setFilteredCats] = useState([]);


    useEffect(() => {
        fetchCats(limit)
        const handleScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop ===
                document.documentElement.offsetHeight
            ) {
                if (limit < 70) {
                    setOnLoad(true)
                    setLimit(limit + 10);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [limit]);

    const fetchCats = async (limit) => {
        try {
            const response = await getCats(limit);
            setCats(response);
            setOnLoad(false)
        } catch (error) {
            console.error('Error fetching cats:', error);
        }
    };

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        const filtered = cats.filter((cat) =>
            cat.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredCats(filtered);
    };

    return (
        <>
            <h1 className="text-center text-3xl font-bold py-4">Cats List</h1>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Cari kucing..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            {filteredCats.length > 0 && (
                <div className="grid grid-cols-1 xl:gap-4 gap-2">
                    {filteredCats.map((cat) => (
                        <CatItem key={cat.id} cat={cat}/>
                    ))}
                </div>
            )}
            {!filteredCats.length > 0 && (
                <div className="grid grid-cols-1 xl:gap-4 gap-2">
                    {cats.map((cat) => (
                        <CatItem key={cat.id} cat={cat}/>
                    ))}
                </div>
            )}
            {onLoad && (
                <img className="w-[15rem] h-[10rem] mx-auto" src={loading} alt="loading"/>
            )}
        </>
    );
};

export default CatList;
