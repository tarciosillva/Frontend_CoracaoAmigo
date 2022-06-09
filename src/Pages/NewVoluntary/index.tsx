import React from "react"

import { PageContanier } from "../../Components/styledComponentsCss"
import { ContainerRegister } from "./style"

import ContentMenu from "../../Components/ContentMenu"
import Form from "./Form"

const NewVoluntary: React.FC = () => {
    return (
        <PageContanier>
            <ContentMenu />
            <ContainerRegister>
               <Form/>
            </ContainerRegister>
        </PageContanier>
    )
}

export default NewVoluntary