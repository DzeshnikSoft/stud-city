import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';

const container = document.getElementById('root');
import './i18n';
import Spinner from './components/Spinner';
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<Suspense fallback={<Spinner />}>
			<Provider store={store}>
				<App />
			</Provider>
		</Suspense>
	</React.StrictMode>
);
