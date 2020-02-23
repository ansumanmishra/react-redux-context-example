import React, { Component } from 'react';

const { Provider, Consumer } = React.createContext();

export default class ThemeContextProvider extends Component {
    render() {
        return (
            <Provider value={{color: 'gray'}}>
                {this.props.children}
            </Provider>
        )
    }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
