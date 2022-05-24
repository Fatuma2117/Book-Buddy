import { useHistory } from 'react-router-dom';
function Kid({kid}){

    const history = useHistory();

    const handleKidClick=()=>{
        localStorage.setItem('current_kid_id',kid.id)
        history.push('/BookList')
    }
// console.log(kid.id)
    return(
        <div onClick={handleKidClick}>
            <h3>{kid.name}</h3>
        </div>
    )
}
export default Kid;