import React from "react";
import { connect } from "react-redux";
import MapComponent from "../../reusableComponent/mapComponent/MapComponent";
import Nav from "../../reusableComponent/navComponent/Nav";
import { actions } from "../../../actions";

function MapPage(props) {
  return (
    <div className="HomePage">
      <h1>HomePage</h1>
      <Nav />
      <MapComponent />
      <div>{props.count}</div>
      <button onClick={props.minusCount}>Decrement</button>
      <button onClick={props.addCount}>Increment</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  count: state.home.count,
});

const mapDispatchToProps = (dispatch) => ({
  addCount: () => dispatch(actions.addCounter()),
  minusCount: () => dispatch(actions.minusCounter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MapPage);
