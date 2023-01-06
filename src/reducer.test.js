import { reducer } from './app';

const initialState = {
  params: {},
  results: {},
  history: [],
  loading: false,
};

describe('Reducer function handles all action types', () => {
  test('dispatches loading', () => {
    const action = {
      type: 'loading',
      payload: true,
    };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      params: {},
      results: {},
      history: [],
      loading: true,
    });
  });

  test('dispatches params', () => {
    const action = {
      type: 'params',
      payload: {
        method: 'GET',
        url: 'https://pokeapi.co/api/v2/pokemon',
      },
    };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      params: {
        method: 'GET',
        url: 'https://pokeapi.co/api/v2/pokemon',
      },
      results: {},
      history: [],
      loading: true,
    });
  });

  test('dispatches results', () => {
    const action = {
      type: 'results',
      payload: {
        headers: 'headers',
        body: 'body',
      },
    };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      params: {
        method: 'GET',
        url: 'https://pokeapi.co/api/v2/pokemon',
      },
      results: {
        headers: 'headers',
        body: 'body',
      },
      history: [],
      loading: true,
    });
  });

  test('dispatches history', () => {
    const action = {
      type: 'loading',
      payload: [{
        time: 'now',
        results: 'results',
      }],
    };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      params: {
        method: 'GET',
        url: 'https://pokeapi.co/api/v2/pokemon',
      },
      results: {
        headers: 'headers',
        body: 'body',
      },
      history: [{
        time: 'now',
        results: 'results',
      }],
      loading: true,
    });
  });

});
