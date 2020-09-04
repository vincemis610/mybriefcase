import React from 'react'

export const Footer = () => {

    return (
        <div className="container seccion-footer">
            <div className="row text-center">
                <div className="col-12 icons-footer nav-burger">
                    <i onClick={()=> window.location.href="https://github.com/vincemis610" } className="fa fa-github mx-4" aria-hidden="true"></i>
                    <i onClick={()=> window.location.href="https://twitter.com/vammpichi"} className="fa fa-twitter mx-4" aria-hidden="true"></i>
                    <i onClick={()=> window.location.href="https://www.facebook.com/VinceMisMex" } className="fa fa-facebook mx-4" aria-hidden="true"></i>
                    <i onClick={()=> window.location.href="https://api.whatsapp.com/send?phone=529971216646&text=Hola,%20¿Qué%20tal%20%estás?" } className="fa fa-whatsapp mx-4" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    )
}
