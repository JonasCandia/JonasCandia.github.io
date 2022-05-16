import React from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const data = {
    name: 'Jonas Candia',
  };

  return (
    <AppContext.Provider value={ data }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: propTypes.props,
}.isRequired;

export default AppProvider;
