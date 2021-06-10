import styles from "../styles/Home.module.css";
import React from "react";
import { connect } from "react-redux";
import actions from "../redux/actions";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";

function Index(props) {
  const {
    counter: { value: counter },
    incrementCounter,
    decrementCounter,
  } = props;

  return (
    <>
      <title>{"React Next.js Redux Example Page"}</title>
      <div className={styles.main}>
        <div className={styles.head}>
          <h1>React Next.js Redux</h1>{" "}
        </div>
        <div className={styles.container}>
          <div>
            <Button onClick={decrementCounter}>-</Button>
          </div>
          <div style={{ fontSize: 24, marginLeft: 20, marginRight: 20 }}>
            {counter}
          </div>
          <div>
            <Button onClick={incrementCounter}>+</Button>
          </div>
        </div>
        <div className={styles.note}>
          <div className={styles.note_line}>
            <div>Source: </div>
            <a
              href={
                "https://github.com/inceabdullah/react-next-redux-boilerplate"
              }
            >
              https://github.com/inceabdullah/react-next-redux-boilerplate
            </a>
          </div>
          <div className={styles.note_line}>
            <div>Collaborators: </div>
            <a href={"https://github.com/inceabdullah"}>inceabdullah</a>
            <div>, </div>
            <a href={"https://github.com/Khorkor"}>Khorkor</a>
          </div>
        </div>
      </div>
    </>
  );
}

const mapState = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDis = {
  incrementCounter: () => actions.counterActions.incrementCounter(),
  decrementCounter: () => actions.counterActions.decrementCounter(),
};

export default connect(mapState, mapDis)(Index);
