import { UseContext } from "./react";
import { UserContext } from "./Context";
function User2(){
    let Result=UseContext(UserContext);
    console.log(Result)
    return<>
    User2<br/>
    
    </>
}
export default User2();