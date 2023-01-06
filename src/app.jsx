import { useReducer, useEffect } from 'react';
import axios from 'axios';

import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

const initialState = {
  params: {},
  loading: false,
  results: {},
  history: localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) : [],
};

export default function App() {
  // const [results, setResults] = useState({});
  // const [requestParams, setRequestParams] = useState({});
  // const [loading, setLoading] = useState(false);

  const [state, dispatch] = useReducer(reducer, initialState);
  const { params, loading, results } = state;


  useEffect(() => {
    const callApi = async (params) => {
      // request params: {method, url, body}
      if(!params.method) return;

      dispatch({
        type:'loading',
        payload: true,
      });

      const response = await axios(params);
      console.log('Response: ', response);
      const results = {
        headers: response.headers,
        body: response.data,
      };

      dispatch({
        type:'loading',
        payload: false,
      });

      dispatch({
        type: 'history',
        payload: results,
      })

      dispatch({
        type: 'results',
        payload: results,
      });

    };
    callApi(params);
  }, [params]);

  const updateParams = (requestParams) => {
    dispatch({
      type: 'params',
      payload: requestParams,
    });
  }

  return (
    <>
      <Header />
      <main>
        <div>
          <div>Request Method: {params.method}</div>
          <div>URL: {params.url}</div>
          <Form handleRequest={updateParams} />
        </div>
        <Results results={results} loading={loading} />
      </main>
      <Footer />
    </>
  );
}

export function reducer(state, action) {
  switch (action.type) {
    case 'params':
      return {
        ...state,
        params: action.payload,
      };
    case 'loading':
      return {
        ...state,
        loading: action.payload,
      };
    case 'results':
      return {
        ...state,
        results: action.payload,
      };
    case 'history':
      const dt = new Date();
      const entry = {
        time: dt.toLocaleString(),
        results: action.payload,
      }
      const newHistory = [...state.history, entry];
      localStorage.setItem('history', JSON.stringify(newHistory));
      return {
        ...state,
        history: newHistory,
      };
    default:
      return state;
  }
}
