import { connect } from 'react-redux'
import todosAction from './actions/todosAction';
import { useEffect } from 'react';
import {fetchData} from './controllers/database';
const App = (props) => {
  useEffect(() => {
    props.onFetchData();
    console.log(props.onTodosAction("samet"));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
const mapStateToProps = state => state;
const mapDispatchToProps = {
  onTodosAction: todosAction,
  onFetchData:fetchData
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
