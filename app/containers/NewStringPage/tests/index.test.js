import React from 'react';
import { fireEvent, render } from 'react-testing-library';
import { memoryHistory } from 'react-router-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import configureStore from '../../../configureStore';

import NewStringPage from '../index';

const store = configureStore({}, memoryHistory);

describe('<NewStringPage />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <Provider store={store}>
          <NewStringPage />
        </Provider>
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('should display input field value', () => {
    const { getByLabelText } = render(
      <IntlProvider locale="en">
        <Provider store={store}>
          <NewStringPage />
        </Provider>
      </IntlProvider>,
    );
    const input = getByLabelText('string');
    fireEvent.change(input, { target: { value: 'test string' } });
    expect(input.value).toBe('test string');
  });
});
