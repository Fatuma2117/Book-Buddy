import {useSelector } from 'react-redux';
function ProfileList(){
    const user = useSelector(store => store.user);
    return(
        <h1> {user.username} - List of all the profiles :</h1>
    )
};

export default ProfileList;