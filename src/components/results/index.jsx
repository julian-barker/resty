import './results.scss';

export default function Results(props) {
  const { headers, body } = props.results;
  return (
    <section>
        {props.loading ?
          'Loading' :
          <>
            <pre>
              {headers ?
                'Headers: ' + JSON.stringify(headers, undefined, 2) :
                null
              }
            </pre>
            <pre data-testid="result-body">
              {body ?
                'Body: ' + JSON.stringify(body, undefined, 2) :
                null
              }
            </pre>
          </>
        }
    </section>
  );
}
