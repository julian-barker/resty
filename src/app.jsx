import { useState } from 'react';
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

  const callApi = async (requestParams) => {
    // request params: {method, url, body}
    setLoading(true);
    setRequestParams(requestParams);
    const { method, url, body } = requestParams;
    console.log('🚀 ~ file: app.jsx:21 ~ callApi ~ requestParams', requestParams);

    const response = await axios({
      method,
      url,
      data: body,
    });
    // const options = { method };
    // if(body) {
    //   options.body = body;
    // }

    // const response = await fetch(url, options);
    // const json = await response.json();

    setLoading(false);
    setResponse({
      headers: response.headers,
      body: response.data,
    });
  }

  return (
    <>
      <Header />
      <main>
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form handleApiCall={callApi} />
        <Results response={response} loading={loading} />
      </main>
      <Footer />
    </>
  );
}

export default App;
