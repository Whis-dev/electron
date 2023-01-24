/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from '@emotion/react';
import { lazy, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import { useGlobalActions } from 'context/global';

import LNB from 'components/common/layout/lnb';

const Home = lazy(() => import('components/home'));
const LeagueOfLegends = lazy(() => import('components/league-of-legends'));
const Valorant = lazy(() => import('components/valorant'));

const App = () => {
	const { initialize } = useGlobalActions();

	useEffect(() => {
		initialize();

		// eslint-disabled-next-line
	}, []);

	return (
		<main css={{ display: 'flex' }}>
			<HashRouter basename='/'>
				<LNB />

				<Routes>
					<Route path='/' element={<Home />} />

					<Route path='/league-of-legends' element={<LeagueOfLegends />} />

					<Route path='/valorant' element={<Valorant />} />
				</Routes>
			</HashRouter>
		</main>
	);
};

export default App;
