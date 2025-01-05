import { UseContext } from "./react";
import { UserContext } from "./Context";

function User1(){
    let data=UseContext(UserContext);
    console.log(data)
    return<>
    User1<br/>
    {data}
    </>
}
export default User1();