import React from "react";
import { connect } from "react-redux";
import GoogleMap from '../mapComponent/GoogleMap'
import Nav from '../navComponent/Nav'

function HomePage(props) {
    return (
        <div className="HomePage">

            <h1>HomePage</h1>
            <Nav />
            <Nav />
            <p>Count: {props.count}</p>
            <MapContainer />
            <button type="button" className="btn btn-primary">Primary HomePage</button>
        </div>
    );
}

// 可以删除，只是为了测试demo里配置的redux是否正常工作
const mapStateToProps = (state) => ({
    count: state.demoReducers.count,
    name: state.demoReducers.name,
    users: state.demoReducers.users
});

export default connect(mapStateToProps)(HomePage);
