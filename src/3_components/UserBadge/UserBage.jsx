import { useAuth } from "../../providers/AuthProvider";

const sliceUserAddress = (address) => {
  return `...${address.slice(-6)}`;
};

export const UserBadge = () => {
  const { user } = useAuth();

  return (
    <div className="nes-container is-rounded !p-[5px]">
      <span class="nes-text is-error">User</span>

      <span class="nes-text is-primary">{sliceUserAddress(user?.address)}</span>
    </div>
  );
};
