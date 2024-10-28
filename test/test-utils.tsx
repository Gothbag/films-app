import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'jotai';
import { useHydrateAtoms } from 'jotai/utils';

const customRender = (ui: ReactNode, { route = '/' } = {}) => {
  return render(
    <Provider>
      <MemoryRouter initialEntries={[route]}>
        {ui}
      </MemoryRouter>
    </Provider>
  );
};

export * from '@testing-library/react';
export { customRender as render };

const HydrateAtoms = ({ initialValues, children }) => {
  useHydrateAtoms(initialValues)
  return children
}

export const TestProvider = ({ initialValues, children }) => (
  <Provider>
    <HydrateAtoms initialValues={initialValues}>{children}</HydrateAtoms>
  </Provider>
);
