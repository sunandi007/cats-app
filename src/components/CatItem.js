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
                <img className="w-full object-contain h-[14rem] rounded-lg" src={cat?.image?.url} alt={cat?.image?.id}/>
                <h3 className="font-bold text-black bg-slate-200 py-0 px-2 rounded-md absolute top-2 left-2">{cat?.name}</h3>
                <button className="bg-slate-200 rounded-md text-zinc-800 font-medium p-1 h-fit absolute bottom-2 right-2" onClick={toggleExpanded}>
                    {expanded ? <img className="w-[20px] h-[20px]" src={minimize} alt="minimize" /> : <img src={maximize} className="w-[20px] h-[20px]" alt="maximize" />}
                </button>
            </div>
            {expanded && (
                <div className="p-2 flex flex-col text-left">
                    <p className="bg-slate-200 rounded-full font-semibold px-2 w-fit">{cat.origin}</p>
                    <p>{cat.description}</p>
                    <p><strong>Life Span:</strong> {cat.life_span}</p>
                    ---
                    <p className="italic"> {cat.temperament}</p>
                    <a href={cat?.wikipedia_url} target="_blank" rel="noreferrer" className="font-semibold text-amber-600 italic">Wikipedia</a>
                </div>
            )}
        </div>
    );
};

export default CatItem;
