import React from "react";
import SelectQueen from "./SelectQueen";
import Challenge from "./Challenge";
import { connect } from "react-redux";
import { updateChallenge } from "../actions";
import { Link } from "react-router-dom";

class CategoryIs extends React.Component {
  componentDidMount() {
    this.props.updateChallenge(this.props.challenge);
  }
  render() {
    return (
      <div>
        <h2>CATEGORY IS...</h2>
        <Challenge {...this.props.challenge} />
        <SelectQueen history={this.props.history} />
        <Link to="/Battle">Battle</Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    challenge: state.challenges[0]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateChallenge: challenge => {
      dispatch(updateChallenge(challenge));
    }
  };
};

CategoryIs = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryIs);

export default CategoryIs;
