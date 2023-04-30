import App from "./App";
import { createRoot } from 'react-dom/client';
import { CounterProvider } from "./Context";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<CounterProvider><App /></CounterProvider>);
