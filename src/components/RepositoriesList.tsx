import { useState } from "react";
import { useAction } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";
const RepositoriesList:React.FC=()=>{
    const [term,setTerm] =useState('');
    const { searchRepositories } = useAction();
    const {data, error, loading} = useTypedSelector((state)=>state.repositories);
console.log(data)
    const onSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        searchRepositories(term)
    }
    return(
         <div>
        <form onSubmit={onSubmit}>
            <input value={term} onChange={e=>setTerm(e.target.value)} />
            <button>Search</button>
        </form> 
        {error && <h3>{error}</h3>}
        {loading && <h3>Loading...</h3>}
        {!error && !loading && data.map((name)=>
         <div id={name}>{name}</div>
        )}
    </div>
    );
}

export default RepositoriesList;      