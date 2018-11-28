import React, { Component } from "react";
import IdleTimer from "react-idle-timer";
import "./App.css";
import { connect } from "react-redux";
import { getColorsCounterTime } from "./reducers/idleReducer/index";
import { bindActionCreators } from "redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      userActive: false
    };
    this.idleTimer = null;
  }

  _onAction = e => {
    this.setState({ action: e.targe, message: "on action" });
  };

  _onActive = e => {
    this.setState({ userActive: true, message: "on active" });
  };

  _onIdle = e => {
    /**
     * Lanzar peticion despues de 10 = 100000s min de inactividad
     */
    console.log("INACTIVE ");
    this.props.getColors();
  };

  render() {
    return (
      <div className="App">
        {this.props.message === "" ? null : <p>{this.props.message}</p>}
        <IdleTimer
          ref={ref => {
            this.idleTimer = ref;
          }}
          element={document}
          onActive={this._onActive}
          onAction={this._onAction}
          onIdle={this._onIdle}
          debounce={1000}
          timeout={5000}
        >
          <p>Hola</p>
        </IdleTimer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    message: state.idleReducer.message
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getColors: getColorsCounterTime }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
