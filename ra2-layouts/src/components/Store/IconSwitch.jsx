const IconSwitch = ({ icon, onSwitch }) => (
  <div className="iconswitch-button" onClick={onSwitch}>
    <span className="material-icons">{icon}</span>
  </div>
);

export default IconSwitch;
