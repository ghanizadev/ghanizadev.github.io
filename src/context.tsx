import React, {useState} from 'react';

interface Context {
  context : {
    page: string;
  },
  setContext: ( state : State ) => void;
}

interface State {
  page : string
}

const config : Context = {
	context: {
		page: '',
	},
	setContext: () => {},
};

const Context = React.createContext<Context>(config);

const Provider = (props: { children: React.ReactElement; }) =>{
	const setContext = (newConfig: State) => {
		setState({...state, context: newConfig});
	};
    
	const [state, setState] = useState({...config, setContext});

	return (
		<Context.Provider value={state}>
			{props.children}
		</Context.Provider>
	);
};

const Consumer = (props: { children: (value: Context) => React.ReactElement; }) => 
	<Context.Consumer>
		{props.children}
	</Context.Consumer>;

export {Context, Provider, Consumer};