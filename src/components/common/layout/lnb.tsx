/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from '@emotion/react';
import { useEffect } from 'react';

import { useGlobalState } from 'context/global';

import { LogoLOL24X24, LogoValorant24x24, LogoOPGG48x48 } from 'assets/logo';

import RouterButton from '../router/router-button';

const menus = [
	{
		key: 'home',
		to: 'https://op.gg',
		children: <LogoOPGG48x48 />,
	},
	{
		key: 'lol',
		to: '/league-of-legends',
		children: <LogoLOL24X24 />,
	},
];

const LNB = () => {
	const { platform } = useGlobalState();

	useEffect(() => {
		const isWindows = platform === 'win32';

		isWindows &&
			menus.push({
				key: 'valorant',
				to: '/valorant',
				children: <LogoValorant24x24 />,
			});
	}, [platform]);

	return (
		<nav css={{ height: '100%' }}>
			<ul>
				{menus.map(({ key, ...props }) =>
					key === 'home' ? (
						<li key={key}>
							<a
								href={props.to}
								target='_blank'
								css={{
									display: 'flex',
									width: '60px',
									height: '60px',
									marginBottom: '25px',
									justifyContent: 'center',
									alignItems: 'center',

									background: '#6e61ff',

									'& > svg': {
										background: 'transparent',
									},
								}}
							>
								{props.children}
							</a>
						</li>
					) : (
						<li key={key}>
							<RouterButton {...props} />
						</li>
					)
				)}
			</ul>
		</nav>
	);
};

export default LNB;
