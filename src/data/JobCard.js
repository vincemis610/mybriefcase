import React from 'react'

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

        <div className="col-12 col-md-6 my-2 p-2 text-d">
            <div className="card my-3 p-3 text-d">
                <div className="card-body">
                    <h4><i className="fa fa-building mr-3" aria-hidden="true"></i><strong>{enterprise}</strong></h4><br/>
                    <strong>{charge} : </strong> {period}
                    <div className="pb-2">
                        {locate}, {col}<br/>
                        <span>{address}</span>
                    </div>
                    <div className="activities">
                        <span>{activities}</span>
                    </div>
                </div>                     
            </div>
        </div>
        
    )
}
