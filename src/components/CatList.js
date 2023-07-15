import React, {useState, useEffect} from 'react';
import CatItem from './CartItem';
import {getCats} from '../services/catApi';

const CatList = () => {
    const [cats, setCats] = useState([]);
    const [displayedCats, setDisplayedCats] = useState(10);


    useEffect(() => {
        fetchCats();
        const handleScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop ===
                document.documentElement.offsetHeight
            ) {
                setDisplayedCats(displayedCats + 10);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };


    }, [displayedCats]);

    const fetchCats = async () => {
        try {
            const response = await getCats();
            console.log('fetching cats :', response)
            setCats(response);
        } catch (error) {
            console.error('Error fetching cats:', error);
        }
    };

    const visibleCats = cats.slice(0, displayedCats);

    return (
        <div>
            <h1 className="text-center text-3xl font-bold py-4">Daftar Kucing</h1>
            <>
                <div className="grid grid-cols-1 xl:gap-4 gap-2">
                    {visibleCats.map((cat) => (
                        <CatItem key={cat.id} cat={cat}/>
                    ))}
                </div>
            </>
        </div>
    );
};

export default CatList;
