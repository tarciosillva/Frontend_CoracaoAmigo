import React from "react";
import { ContainerMenu, ContentLogo, ContentAvatar, MinText, OptionsMenuContanier } from "./style"

import MenuItem from "../MenuItem";

import dashboardIcon from "../../assets/dashboard.svg"
import addUserIcon from "../../assets/addUser.svg"
import relatoryIcon from "../../assets/relatoryIcon.svg"
import voluntariesIcon from "../../assets/peopples.svg"
import relatoryTocIcon from "../../assets/tocIcon.svg"
import mapElementIcon from "../../assets/mapElementIcon.svg"
import routerIcon from "../../assets/routeIcon.svg"

const ContentMenu: React.FC = () => {
    return (
        <ContainerMenu>
            <ContentLogo><h3>Logo Coração Amigo</h3></ContentLogo>

            <ContentAvatar>
                <p>Bem vido(a), Milka Santana</p>
                <MinText>milkasantana@gmail.com</MinText>
            </ContentAvatar>

            <OptionsMenuContanier>
                <MenuItem urlImage={dashboardIcon} altImage={'Retangulos agrupados em forma de caixa'} textMenu={'Dashboard'} redirectUrl={'/home'} />
                <MenuItem urlImage={relatoryIcon} altImage={'Caderneta com marcação de check'} textMenu={'Famílias'} redirectUrl={'/familyRegisters'} />
                <MenuItem urlImage={voluntariesIcon} altImage={'bonequinhos'} textMenu={'Listar voluntários'} redirectUrl={'/voluntaries'} />
                <MenuItem urlImage={addUserIcon} altImage={'bonequinho com icone de adição'} textMenu={'Adicionar voluntário'} redirectUrl={'/newVoluntary'} />
                <MenuItem urlImage={relatoryTocIcon} altImage={'Icone de lista com marcação'} textMenu={'Relatório'} redirectUrl={'/relatory'} />
                <MenuItem urlImage={mapElementIcon} altImage={'Icone de folha de mapa'} textMenu={'Mapa'} redirectUrl={'/map'} />
                <MenuItem urlImage={routerIcon} altImage={'Icone de setas exibindo direções opostas'} textMenu={'Rotas'} redirectUrl={'/routes'} />
            </OptionsMenuContanier>
        </ContainerMenu>
    )
}

export default ContentMenu