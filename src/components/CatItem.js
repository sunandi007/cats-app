import React, {useState} from "react";
import minimize from "../minimize.png"
import maximize from "../maximize.png"
const CatItem = ({ cat }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="bg-white rounded-lg shadow-lg">
            <div className="relative">
                <img className="w-full object-cover h-[14rem] rounded-lg" src={cat?.image?.url} alt={cat?.image?.id}/>
                <h3 className="font-bold text-black bg-slate-200 py-0 px-2 rounded-md absolute top-2 left-2">{cat?.name}</h3>
                <button className="bg-slate-200 rounded-md text-zinc-800 font-medium p-1 h-fit absolute bottom-2 right-2" onClick={toggleExpanded}>
                    {expanded ? <img className="w-[20px] h-[20px]" src={minimize} alt="minimize" /> : <img src={maximize} className="w-[20px] h-[20px]" alt="maximize" />}
                </button>
            </div>
            {expanded && (
                <div className="p-2 flex flex-col text-left">
                    <p>{cat.description}</p>
                    <p><strong>Origin:</strong> {cat.origin}</p>
                    <p><strong>Life Span:</strong> {cat.life_span}</p>
                    <p><strong>Temperament:</strong> {cat.temperament}</p>
                </div>
            )}
        </div>
    );
};

export default CatItem;
