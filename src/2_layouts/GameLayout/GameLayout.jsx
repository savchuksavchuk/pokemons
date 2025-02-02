import { Outlet } from "react-router";
import { useAuth } from "../../providers/AuthProvider";
import { UserBadge } from "../../3_components/UserBadge";

export const GameLayout = () => {
  const { user } = useAuth();

  return (
    <div className="w-full min-h-screen bg-[#FFA500] py-[100px] px-[50px]">
      {Boolean(user) && (
        <div className="absolute top-0 right-0 p-[10px]">
          <UserBadge />
        </div>
      )}

      <Outlet />
    </div>
  );
};
