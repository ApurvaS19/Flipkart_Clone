import User1 from "./User1"
import { UserContext } from "./Context";

function User(){
    let name="Apurva"
    return<>SUser<br/>
       <UserContext.Provider value={name}>
        <User1/>
       </UserContext.Provider>
    </>
}
export default User();