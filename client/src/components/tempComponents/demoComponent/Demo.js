import { connect } from "react-redux";
import { actions } from "./demoActions";
import Nav from '../../reusableComponent/navComponent/Nav'


function Demo(props) {
    return (
        <div className="Demo">
            <h1>Demo</h1>
            <Nav />
            <p>Count: {props.count}</p>
            <p>Name: {props.name}</p>
            <p>Users:</p>
            {props.users.slice(0, 3).map((user, i) => (
                <p key={i}>{user.name}</p>
            ))}
            <p>MyApiData: {String(props.myApiData.result)}</p>
            <button className="btn btn-primary" onClick={props.minusCount}>Decrement</button>
            <button className="btn btn-primary" onClick={props.addCount}>Increment</button>
            <button className="btn btn-primary" onClick={props.getUsers}>getUsers</button>
            <button className="btn btn-primary" onClick={props.getMyApi}>getMyApi</button>
        </div>
    );
}

const mapStateToProps = (state) => ({
    count: state.demoReducers.count,
    name: state.demoReducers.name,
    users: state.demoReducers.users,
    myApiData: state.demoReducers.myApiData
});


const mapDispatchToProps = (dispatch) => ({
    addCount: () => dispatch(actions.addCounter()),
    minusCount: () => dispatch(actions.minusCounter()),
    getUsers: () => dispatch(actions.getUsers()),
    getMyApi: () => dispatch(actions.getMyApi())
});

export default connect(mapStateToProps, mapDispatchToProps)(Demo);