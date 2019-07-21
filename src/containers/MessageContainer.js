import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Message from '../components/Message'

const MessageContainer = props => {
  const {message}=props
  return (
    <Message message={message}/>
  );
};

MessageContainer.propTypes = {
  message: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    message: state.message
  };
};

export default connect(
  mapStateToProps,
  null
)(MessageContainer);
