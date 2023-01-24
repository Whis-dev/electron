/**@jsxRuntime classic */
/**@jsx jsx */
import { Global, jsx } from '@emotion/react';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import { GlobalContextProvider } from 'context/global';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Suspense>
			<GlobalContextProvider>
				<Global
					styles={{
						'*': {
							margin: 0,
							padding: 0,
							color: 'white',
							background: '#0c0f13',
						},

						'html, body, body > div, main': {
							width: '100%',
							height: '100%',
						},

						li: {
							listStyleType: 'none',
						},
					}}
				/>
				<App />
			</GlobalContextProvider>
		</Suspense>
	</React.StrictMode>
);
