import React, {useContext} from "react";
import UserContext from "../context/UserContext";


function Profile(){
    const {user}=useContext(UserContext);
    if(!user)
    return(
        <div>Please Login</div>
    );
    return(
        <div>
            <div><h2>Wellcom {user.username}</h2></div>
            
        </div>
    )

}
export default Profile;
