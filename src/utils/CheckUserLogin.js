
export const isUserLoggedIn = () => {
const isLogin = localStorage.getItem("user")
return isLogin;
}