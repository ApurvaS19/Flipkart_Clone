import { UseContext } from "./react";
import { UserContext } from "./Context";

function User3(){
    let App=UseContext(UserContext);
    console.log(App)
    return<>
    User3<br/>
    
    </>
}
export default User3();