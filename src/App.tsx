import * as React from 'react';
import Number2Words from 'react-number2words';

type Props = {};
interface State {
  value: number | string;
  system: 'international' | 'hinduArabic';
  language: 'en' | 'np';
}
class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: 5423561,
      system: 'international',
      language: 'en'
    };
  }

  valueChange = (evt: any) => {
    const value = evt.target.value;
    this.setState({ value });
  }

  systemChange = (evt: any) => {
    const system = evt.target.value;
    this.setState({ system, language: 'en' });
  }

  languageChange = (evt: any) => {
    const language = evt.target.value;
    this.setState({ language });
  }

  render() {
    const { value, system, language } = this.state;
    console.log({value, system, language});
    return (
      <div>
        <h1>React Number to Words</h1>

        <div className="row my-4">
          <div className="col-12">
            <div className="card">
              <h4 className="m-0 card-header">Convert Number to Words</h4>
              <div className="card-body">
                <div className="my-3">
                  <div className="form-inline">
                    <div className="from-group">
                      <label htmlFor="value" className="justify-content-start">Value</label>
                      <input
                        id="value"
                        type="number"
                        className="form-control"
                        value={value}
                        onChange={this.valueChange}
                      />
                    </div>

                    <div className="from-group ml-3">
                      <label htmlFor="system" className="justify-content-start">Number System</label>
                      <select
                        id="system"
                        className="form-control"
                        value={system}
                        onChange={this.systemChange}
                      >
                        <option value="international">International</option>
                        <option value="hinduArabic">Hindu Arabic</option>
                      </select>
                    </div>

                    <div className="from-group ml-3">
                      <label htmlFor="language" className="justify-content-start">Language</label>
                      <select
                        id="language"
                        className="form-control"
                        value={language}
                        disabled={system !== 'hinduArabic'}
                        onChange={this.languageChange}
                      >
                        <option value="en">English</option>
                        <option value="np">Nepali</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="code-result">
                  <h6>Code</h6>

                  <div className="mt-3">
                    <h6>Result</h6>
                  </div>
                  <code>
                    <Number2Words
                      value={value}
                      system={system}
                      language={language}
                    />
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
