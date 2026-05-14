import { useEffect } from 'react';

function Toast({ message, show }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
      }, 2800);
      return () => clearTimeout(timer);
    }
  }, [show]);

  return (
    <div id="toast" className={show ? "show" : ""}>
      {message}
    </div>
  );
}

export default Toast;