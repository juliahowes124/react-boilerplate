import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import NewStringPage from '../index';

describe('<NewStringPage />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <NewStringPage />
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
