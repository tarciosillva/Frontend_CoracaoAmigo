import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PageContanier, ContentPage, TitlePage, Table, FilterContent } from "../../Components/styledComponentsCss"

import ContentMenu from "../../Components/ContentMenu"

import relatoryIcon from "../../assets/relatoryIcon.svg"
import serachIcon from "../../assets/search.svg"
import axios from "axios";

interface familyListProps {
    id: string,
    estado_atual: string,
    membros: number,
    renda_familiar: string,
    programas_governo: string,
    createdAt: string,
    updatedAt?: string,
    id_usuario_criacao: number,
    responsavel: string,
    telefone: string,
    imagem_residencia: string
}

export const ListFamilies: React.FC = () => {
    const token = localStorage.getItem('token')
    
    const [familyList, setFamilyList] = useState<familyListProps[]>([])

    const [familyListFilter, setFamilyListFilter]=useState<familyListProps[]>([])

    useEffect(() => {
        axios.get(`http://localhost:3001/listAllFamilies`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(res => {
            setFamilyList(res.data)
            setFamilyListFilter(res.data)
        })
    }, [])

    const filterFamily = (responsibleName: string) => {
        var familyListed = familyList.filter(
            (family) =>
                family.responsavel?.includes(responsibleName)
        );
        if (familyListed) {
            setFamilyListFilter(familyListed)
        } else{
            setFamilyListFilter(familyList)
        }
    }

    return (
        <PageContanier>
            <ContentMenu />

            <ContentPage>
                <TitlePage>
                    <h3>Famílias <img src={relatoryIcon} alt="Caderneta com marcação de check" /></h3>
                </TitlePage>
                <br />
                <FilterContent>
                    <img src={serachIcon} alt="icone de lupa" />
                    <input type="text" placeholder="Filtrar registros" onChange={(e)=>filterFamily(e.target.value)}/>
                </FilterContent>
                <Table>
                    <thead>
                        <tr>
                            <th className="image">
                            </th>
                            <th>Responsável</th>
                            <th>Contato</th>
                            <th>Membros</th>
                            <th>Renda familiar</th>
                            <th>Programa do governo</th>
                            <th>Data do cadastro</th>
                            <th className="details"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {familyListFilter.map((element, index) => (
                            <tr key={index}>
                                <th className="image"><img src={element.imagem_residencia} alt="imagem da casa da familia" /> </th>
                                <th>{element.responsavel}</th>
                                <th>{element.telefone}</th>
                                <th>{element.membros}</th>
                                <th>R$ {element.renda_familiar}</th>
                                <th>{element.programas_governo}</th>
                                <th>{element.createdAt}</th>
                                <th>
                                    <Link to={`/family/${element.id}`}>
                                        Detalhes
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

export default ListFamilies