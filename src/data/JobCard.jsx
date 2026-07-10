import React from "react";

export const JobCard = ({
  period,
  enterprise,
  charge,
  locate,
  col,
  address,
  activities,
}) => {
  return (
    <div className="col-12 col-sm-6 my-2 p-2 text-d">
      <div className="card job-card">
        <div>
          <h5>
            <i className="fa fa-building mr-3" aria-hidden="true"></i>
            <strong>{enterprise}</strong>
          </h5>
        </div>
        <div className="job-body">
          <div>
            <strong>Position</strong>: {charge}
          </div>
          <div>
            <strong>Period</strong>: {period}
          </div>
          <div className="pb-2">
            <strong>Place</strong>: {locate}, {address}
            <br />
          </div>
          <div>
            <strong>Activities:</strong>
            {activities.map((task, i) => (
              <div className="pl-2 d-flex activities">
                <div>
                  <strong>{i + 1}.- </strong>
                </div>
                <div>{task}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
