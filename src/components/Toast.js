import toast, { toastConfig } from 'react-simple-toasts';
// import 'react-simple-toasts/dist/style.css';
import 'react-simple-toasts/dist/theme/dark.css';

toastConfig({ theme: 'dark' });

function Toast() {
  return <button onClick={() => toast('Your toast is ready! 🍞')}>Show Toast</button>;
}

export default Toast