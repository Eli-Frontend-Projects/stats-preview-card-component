import logo from './logo.svg';
import './App.css';
import MetricItem from './MetricItem';

function App() {
  return (
    <div className="App">
      <main>
        <div className="image-container">
          <div className="image-div"></div>
        </div>

        <div className='text-div'>
          <div className='text-div-main'>
            <h1>Get insights that help your business grow</h1>
            <p>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
            <div className='metrics'>
              <MetricItem metric_val="10k+" metric="COMPANIES"/>
              <MetricItem metric_val="314" metric="TEMPLATES"/>
              <MetricItem metric_val="12M+" metric="QUERIES"/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;