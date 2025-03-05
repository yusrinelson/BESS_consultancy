import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";

export default function Alert({ message, onClose }) {
  return (
    <div className="fixed top-16 right-4 bg-green-100 border border-green-400 text-green-800 px-4 py-3 rounded shadow-lg flex items-center z-50">
      <span className="flex-grow">{message}</span>
      <button
        onClick={onClose}
        className="ml-4 text-green-800 hover:text-green-600"
      >
        <FaTimes className="text-xl" />
      </button>
    </div>
  );
}

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
