import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import styles from './App.module.css';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import { Router, Switch } from 'react-router-dom';

function App() {
  return (
    <div className={styles.App}>
      <NavBar/>
      <Container className={styles.Main}>
        <Switch>
          <Route exact path='/' render={() => <h1>Home Page</h1>} />
          <Route exact path='/signin' render={() => <h1>Sign In</h1>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
