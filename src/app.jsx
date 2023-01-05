import { useState, useEffect } from 'react';
import axios from 'axios';

import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function App() {
  const [response, setResponse] = useState({});
  const [requestParams, setRequestParams] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const callApi = async (requestParams) => {
      // request params: {method, url, body}
      setLoading(true);
      const { method, url, body } = requestParams;
      console.log('🚀 ~ file: app.jsx:21 ~ callApi ~ requestParams', requestParams);

      const response = await axios({
        method,
        url,
        data: body,
      });
      console.log('Response: ', response);

      setLoading(false);
      setResponse({
        headers: response.headers ,
        body: response.data,
      });
    };
    callApi(requestParams);
  }, [requestParams]);

  const updateParams = (params) => {
    setRequestParams(params);
  }

  return (
    <>
      <Header />
      <main>
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form handleRequest={updateParams} />
        <Results response={response} loading={loading} />
      </main>
      <Footer />
    </>
  );
}

export default App;
