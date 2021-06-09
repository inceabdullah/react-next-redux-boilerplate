import styles from '../styles/Home.module.css';
import React from 'react';
import {connect} from "react-redux";
import actions from '../redux/actions';

function Index(props) {
  const {
    counter:{value:counter},
    incrementCounter,
    decrementCounter
  } = props;

  return (<>
    <title>{ "React Next.js Redux Example Page" }</title>
    <div className={styles.main}>
      <div className={styles.head}>React Next.js Redux</div>
      <div className={styles.container}>
        <div><button onClick={decrementCounter}>-</button></div>
        <div>{counter}</div>
        <div><button onClick={incrementCounter}>+</button></div>
      </div>
      <div className={styles.note}>
        <div className={styles.note_line}>
          <div>Source: </div>
          <a href={"https://github.com/inceabdullah/react-next-redux-boilerplate"}>https://github.com/inceabdullah/react-next-redux-boilerplate</a>
        </div>
        <div className={styles.note_line}>
          <div>Collaborators: </div>
          <a href={"https://github.com/inceabdullah"}>inceabdullah</a>
          <div>, </div>
          <a href={"https://github.com/Khorkor"}>Khorkor</a>
        </div>
      </div>
    </div>
    </>)
}

const mapState = (state) => {
  return {
    counter: state.counter
  };
};

const mapDis = {
  incrementCounter: () => actions.counterActions.incrementCounter(),
  decrementCounter: () => actions.counterActions.decrementCounter(),
};

export default connect(mapState, mapDis)(Index);
