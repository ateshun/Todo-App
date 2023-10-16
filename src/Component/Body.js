import React from "react";
import { MdDeleteForever, MdCheck, MdCancel } from "react-icons/md";

function Body() {
  return (
    <div className="item">
      <div>
        <MdCancel className="cancel" />
      </div>
      <div>Item</div>
      <div>
        <MdDeleteForever className="del" />
      </div>
    </div>
  );
}

export default Body;
