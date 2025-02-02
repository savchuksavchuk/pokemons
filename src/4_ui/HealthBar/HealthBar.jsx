export const HealthBar = ({ maxHealth, currentHealth }) => {
  return (
    <progress
      className="nes-progress is-success"
      value={String(currentHealth)}
      max={String(maxHealth)}
    ></progress>
  );
};
