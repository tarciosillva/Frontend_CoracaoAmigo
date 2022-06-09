import React from "react";
import { Link } from "react-router-dom";
import { MenuItemElement } from "./style"

interface menuItemType {
    textMenu: string,
    urlImage: string
    altImage: string
    redirectUrl:string
}

const MenuItem: React.FC<menuItemType> = (props) => {
    return (
        <MenuItemElement>
            <img src={props.urlImage} alt={props.altImage} />
            <Link className="link" to={props.redirectUrl}> <p>{props.textMenu}</p></Link>
        </MenuItemElement>
    )
}

export default MenuItem