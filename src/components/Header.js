import React from "react";
import { useGoogleAuth } from "../common/Auth";

const LoginButton = () => {
  const { signIn } = useGoogleAuth();
  return <button onClick={signIn}>Login</button>;
};

const LogoutButton = () => {
  const { signOut } = useGoogleAuth();
  return <button onClick={signOut}>Logout</button>;
};

function Header() {
  // const [isLogin, setIsLogin] = useState(false);
  // function handleChange(e) {
  //   e.preventDefault();
  //   setIsLogin(!isLogin);
  // }
  return (
    <div className="flex justify-between">
      <div className="uppercase font-bold">logo</div>
      <div className="flex">
        {/* {isLogin ? (
          <a href="/" onClick={handleChange}>
            logout
          </a>
        ) : (
          <a href="/" onClick={handleChange}>
            login
          </a>
        )} */}
        <LoginButton />
        <LogoutButton />
      </div>
    </div>
  );
}

export default Header;
