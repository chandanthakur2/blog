// create a custom hook
const useIsLoggedIn = () => {
  const token = localStorage.getItem('token');
  return token ? true : false;
}

export default useIsLoggedIn;