import React, { useEffect, useState } from "react";
import axios from "axios";

import { PageContanier, ContentPage, TitlePage, Table, FilterContent } from "../../Components/styledComponentsCss"

import ContentMenu from "../../Components/ContentMenu"

import serachIcon from "../../assets/search.svg"

import { voluntaryProps } from "../../Config/EntitiesType"

const ListVoluntary: React.FC = () => {
    const token = localStorage.getItem('token')
    const [voluntaries, setVoluntaries] = useState<voluntaryProps[]>([])

    useEffect(() => {
        axios.get(`http://localhost:3001/listAllVoluntaries`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(res => {
            if (res.status === 200)
                setVoluntaries(res.data)
        })
    }, [])

    return (
        <PageContanier>
            <ContentMenu />

            <ContentPage>
                <TitlePage>
                    <h3>Voluntários</h3>
                </TitlePage>
                <br />
                <FilterContent>
                    <img src={serachIcon} alt="icone de lupa" />
                    <input type="text" placeholder="Filtrar registros" />
                </FilterContent>
                <Table>
                    <thead>
                        <tr>
                            <th className="details"></th>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Telefone</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {voluntaries.map((element, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <th>{element.nome}</th>
                                <th>{element.cpf}</th>
                                <th>{element.telefone}</th>
                                <th>{element.email}</th>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </ContentPage>
        </PageContanier>
    )
}

export default ListVoluntary