/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from '@emotion/react';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

interface IRouterButtonProps {
	isOn?: boolean;
	to: string;
	children: ReactElement;
}

const RouterButton = ({ isOn = false, to, children }: IRouterButtonProps) => {
	return (
		<Link
			to={to}
			css={{
				position: 'relative',
				display: 'flex',
				width: '60px',
				height: '60px',
				marginBottom: '16px',
				justifyContent: 'center',
				alignItems: 'center',

				background: 'transparent',

				'& > svg': {
					fill: isOn ? '#6e61ff' : '#535a69',
					background: 'transparent',
				},

				'&:after': {
					position: 'absolute',
					width: '4px',
					height: '24px',
					top: '18px',
					right: 0,
					borderRadius: '8px',
					background: isOn ? '6c61ff' : 'transparent',
				},
			}}
		>
			{children}
		</Link>
	);
};

export default RouterButton;
