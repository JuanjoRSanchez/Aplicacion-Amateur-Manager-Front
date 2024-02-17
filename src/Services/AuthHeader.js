export default function authHeader(){
    const user = JSON.parse(localStorage.getItem("user"));

    if(user && user.accesToken){
        return { "x-auth-token": user.accesToken};
    }else{
        return {};
    }
}