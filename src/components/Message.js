import React from "react";
const Message = (props) => {
  const {message}=props
  return (
    <div>
      <h3>
        <span className="badge amber darken-2">{message}</span>
      </h3>
    </div>
  );
}
export default Message