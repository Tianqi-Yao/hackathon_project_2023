import React from "react";
import { connect } from "react-redux";
import GoogleMap from "../../reusableComponent/mapComponent/GoogleMap";
import Nav from "../../reusableComponent/navComponent/Nav";

function MapPage(props) {
  return (
    <div className="HomePage">
      <h1>HomePage</h1>
      <Nav />
      {/* <p>Count: {props.count}</p> */}
      <GoogleMap />
    </div>
  );
}

// 可以删除，只是为了测试demo里配置的redux是否正常工作
// const mapStateToProps = (state) => ({
//   // count: state.demoReducers.count,
//   name: state.demoReducers.name,
//   users: state.demoReducers.users,
// });

export default MapPage;
