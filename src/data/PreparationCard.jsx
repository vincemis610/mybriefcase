import React from "react";

export const PreparationCard = ({
  period,
  school,
  certify,
  locate,
  col,
  address,
  cp,
}) => {
  return (
    <div className="col-12 col-md-6 my-2 p-2 text-d">
      <div className="card">
        <div className="card-body" style={{ fontSize: "18px" }}>
          <h4>
            <i className="fa fa-building-o mr-3" aria-hidden="true"></i>
            <strong>{school}</strong>
          </h4>
          <br />
          <strong> Period: </strong> {period}
          <div className="pb-2">
            <strong>Locate: </strong>
            {locate}, {col}
            <br />
            <strong>Address: </strong>
            <span>{address}</span>
            <br />
            <strong>CP: </strong>
            <span>{cp}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
