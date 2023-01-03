import { useState } from 'react';

import './form.scss';

export default function Form(props) {
  const [ method, setMethod ] = useState('GET');
  const [ body, setBody ] = useState('');
  const [ url, setUrl ] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method,
      url,
      body,
    };
    props.handleApiCall(formData);
  }

  const handleChangeMethod = (e) => {
    const newMethod = e.target.textContent;
    console.log('change method');
    console.log(newMethod);
    setMethod(newMethod);
  };

  const handleBodyChange = (e) => {
    const newBody = e.target.value;
    setBody(newBody);
  };

  const handleUrlChange = (e) => {
    const newUrl = e.target.value;
    setUrl(newUrl);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label >
        <span>URL: </span>
        <input name='url' type='text' onChange={handleUrlChange}/>
        <button type="submit">GO!</button>
      </label>
      <label className="methods">
        <span id="get" onClick={handleChangeMethod}>GET</span>
        <span id="post" onClick={handleChangeMethod}>POST</span>
        <span id="put" onClick={handleChangeMethod}>PUT</span>
        <span id="delete" onClick={handleChangeMethod}>DELETE</span>
      </label>
      {method === 'POST' || method === 'PUT' ?
        <label>
          <textarea id="body" rows="10" cols="100"
            placeholder="Enter JSON body here..."
            onChange={handleBodyChange}
          >
          </textarea>
        </label>
        :
        null
      }
    </form>
  );
}
