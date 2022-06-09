import React from "react";
import { Navigate } from "react-router-dom";
import { UseUserContext } from "../Context/UserContext"

interface privateProps {
    children: React.ReactNode;
}

const PrivateRoute: React.FC<privateProps> = (props) => {
    const { validateAcess } = UseUserContext()
    if (!validateAcess())
        return <Navigate to={'/'} />
    return <>
        {props.children}
    </>
}

export default PrivateRoute