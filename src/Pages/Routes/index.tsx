import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ContentPage, PageContanier, TitlePage, Table } from "../../Components/styledComponentsCss"
import ContentMenu from "../../Components/ContentMenu";

import { Button } from "./style";

import routeIcon from "../../assets/routeIcon.svg"

import { routesProps } from "./type"

const Routes: React.FC = () => {
    const [routes, setRoutes] = useState<routesProps[]>([])
    const token = localStorage.getItem('token')

    useEffect(() => {
        axios.get(`http://localhost:3001/listAllRoutes`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(res => {
            if (res.status === 200)
                setRoutes(res.data)
        })
    }, [])

    return (
        <PageContanier>
            <ContentMenu />
            <ContentPage>
                <TitlePage>
                    <h3>Rotas <img src={routeIcon} alt="Icone de setas direcionais" /></h3>
                </TitlePage>

                <Table>
                    <thead>
                        <tr>
                            <th>Rota</th>
                            <th>Status</th>
                            <th>Nº cadastros</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {routes.map((route) => (
                            <tr>
                                <th>{route.nome_rota}</th>
                                <th>{route.status}</th>
                                <th>{route.totalFamilies}</th>
                                <th>
                                    <Link to={`/delivery/${route.id}`}>
                                        <Button>Definir entregas </Button>
                                    </Link>
                                </th>
                                <th>
                                    <Link to={`/deliveriesRouter/${route.id}`}>
                                        <Button>
                                            Visualizar entregas
                                        </Button>
                                    </Link>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </ContentPage>
        </PageContanier>
    )
}

export default Routes