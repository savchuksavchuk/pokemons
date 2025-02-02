import { useNavigate } from "react-router";
import { useAuth } from "../../providers/AuthProvider";

export const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    await login();

    navigate("/game");
  };

  return (
    <div className="w-full h-screen bg-[#FFA500] flex items-center justify-center">
      <div className="nes-container with-title is-centered is-rounded bg-white max-w-[300px] md:max-w-[400px]">
        <p className="title bg-transparent">Login</p>
        <p>
          Welcome to the Pokemon battle. Please login using Metamask to play.
        </p>

        <button
          type="button"
          className="nes-btn is-primary"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};
