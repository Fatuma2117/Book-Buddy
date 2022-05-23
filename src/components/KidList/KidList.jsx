import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Kid from '../Kid/Kid';

function KidList(){
    const dispatch = useDispatch();
    const kids = useSelector(store => store.kids);
    useEffect(() => {
        dispatch({
            type:'FETCH_KIDS'
        })
    },[])

    return(
        <div>
    <h1>Kid List</h1>
    {kids.map(kid => {
                    return (
                        <Kid key={kid.id} kid={kid} />
                    );
                })}

        </div>

    )
};

export default KidList;