import "../styles.css";

function WrapperModal({ onClick, children }) {
  return (
    <div id="wrapperModal" className="wrapperModal" onClick={onClick}>
      {children}
    </div>
  );
}

export default WrapperModal;
