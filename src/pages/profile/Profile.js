import Navbar from "../../components/Navbar";
import {useSelector} from "react-redux";
import {selectUser} from "../../features/userSlice";
import {auth} from "../../firebase";
import Plans from "../plans/Plans";

const Profile = () => {
    const user = useSelector(selectUser)
    return (
        <div className="profile">
            <Navbar/>
            <div className="profile_body">
                <h1>Edit Profile</h1>
                <div className="profile_info">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt=""/>
                    <div className="profile_details">
                        <h2>{user.email}</h2>
                        <div className="profile_plans">
                            <h3>Plans</h3>
                            <Plans/>

                            <button className="profile_signOut" onClick={() => auth.signOut()}>Sign Out</button>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )

}

export default Profile