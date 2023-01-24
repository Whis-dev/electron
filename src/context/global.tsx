import { createContext, useReducer, useContext, Dispatch } from 'react';
// import { ipcRenderer } from 'electron';

const GlobalStateContext = createContext<IGlobalState | undefined>(undefined);
const GlobalDispatchContext = createContext<
	Dispatch<IGlobalAction> | undefined
>(undefined);

interface IGlobalState {
	platform: string;
	games: Array<string>;
}

type ActionType = 'INIT';

interface IGlobalAction {
	type: ActionType;
	data: any;
}

const initialState: IGlobalState = {
	platform: '',
	games: [],
};

const reducer = (state: IGlobalState, action: IGlobalAction) => {
	switch (action.type) {
		case 'INIT':
			return {
				...state,
				platform: action.data,
			};
	}
};

export const GlobalContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<GlobalDispatchContext.Provider value={dispatch}>
			<GlobalStateContext.Provider value={state}>
				{children}
			</GlobalStateContext.Provider>
		</GlobalDispatchContext.Provider>
	);
};

export const useGlobalState = () => {
	const state = useContext(GlobalStateContext);

	if (state) {
		return state;
	} else {
		throw new Error('Not Found');
	}
};

export const useGlobalActions = () => {
	const dispatch = useContext(GlobalDispatchContext);

	const initialize = () => {
		// ipcRenderer.send('initialize');
		// ipcRenderer.on('initialize', (event, data) => {
		// 	dispatch && dispatch({ type: 'INIT', data });
		// });
	};

	return { initialize };
};
