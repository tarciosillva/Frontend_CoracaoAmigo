import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Table, Container, Title, ContentTable, TotalRegisters, BackContent } from "./style"

import { family, adress, dependent, familyHome, registerProps, responsible } from "../../Config/EntitiesType"

import backIcon from "../../assets/arrow_back.svg"

interface relatoryType {
    family: family,
    adress: adress,
    dependet: dependent[],
    familyHome: familyHome,
    registerProps: registerProps,
    responsible: responsible
}

const Relatory: React.FC = () => {
    const history = useNavigate()
    const token = localStorage.getItem('token')
    const [relatory, setRelatory] = useState<relatoryType[]>([])

    useEffect(() => {
        axios.get(`http://localhost:3001/listAllFamiliesRegisterFull`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            setRelatory(res.data)
        })
    }, [])

    return (
        <Container>
            <Title>
                <p>Relatório Famílias</p>

                <BackContent onClick={() => history(-1)}>
                    <img src={backIcon} alt="icone seta para esquerda" />
                </BackContent>
            </Title>
            <TotalRegisters>Total de registros: {relatory.length}</TotalRegisters>
            <ContentTable>
                <Table>
                    <thead>
                        <tr>
                            <th>
                                <textarea disabled name="conter" id="conter"></textarea>
                            </th>
                            <th>
                                <textarea disabled name="Estado atual" id="Estado atual" value="Estado atual"></textarea>
                            </th>
                            <th>
                                <textarea disabled name="Membros" id="Membros" value="Membros"></textarea>
                            </th>
                            <th>
                                <textarea disabled name="Dependentes" id="Dependentes" value="Dependentes"></textarea>
                            </th>
                            <th>
                                <textarea disabled name="Renda familiar" id="Renda familiar" value="Renda familiar"></textarea>
                            </th>
                            <th>
                                <textarea disabled name="Programa do governo" id="Programa do governo" value="Programa do governo"></textarea>
                            </th>

                            <th>
                                <textarea disabled name="Responsável" id="Responsável" value="Responsável"></textarea>
                            </th>
                            <th>
                                <textarea disabled name="Idade" id="Idade" value="Idade"></textarea>
                            </th>
                            <th>
                                <textarea disabled name="Estado civil" id="Estado civil" value="Estado civil"></textarea>
                            </th>
                            <th>
                                <textarea disabled name="Profissão" id="Profissão" value="Profissão"></textarea>
                            </th>
                            <th>
                                <textarea disabled name="Ocupação" id="Ocupação" value="Ocupação"></textarea>
                            </th>
                            <th>
                                <textarea disabled name="Escolaridade" id="Escolaridade" value="Escolaridade"></textarea>
                            </th>
                            <th>
                                <textarea disabled name="Telefone" id="Telefone" value="Telefone"></textarea>
                            </th>
                            <th>
                                <textarea disabled name="Nº roupa" id="Nº roupa" value="Nº roupa"></textarea>
                            </th>
                            <th>
                                <textarea disabled name="Nº calçado" id="Nº calçado" value="Nº calçado"></textarea>
                            </th>

                            <th>
                                <textarea disabled name="Tipo moradia" id="Tipo moradia" value="Tipo moradia"></textarea>
                            </th>
                            <th>
                                <textarea disabled name="Condição moradia" id="Condição moradia" value="Condição moradia"></textarea>
                            </th>
                            <th>
                                <textarea disabled name="Estrutura moradia" id="Estrutura moradia" value="Estrutura moradia"></textarea>
                            </th>
                            <th>
                                <textarea disabled name="Qualidade água" id="Qualidade água" value="Qualidade água"></textarea>
                            </th>
                            <th>
                                <textarea disabled name="Energia elétrica" id="Energia elétrica" value="Energia elétrica"></textarea>
                            </th>

                            <th>
                                <textarea disabled name="Bairro" id="Bairro" value="Bairro"></textarea>
                            </th>
                            <th>
                                <textarea disabled name="Rua" id="Rua" value="Rua"></textarea>
                            </th>
                            <th>
                                <textarea disabled name="Numero" id="Numero" value="Numero"></textarea>
                            </th>

                            <th>
                                <textarea disabled name="Data do cadastro" id="Data do cadastro" value="Data do cadastro"></textarea>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {relatory.map((element, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <th>{element.family.estado_atual}</th>
                                <th>{element.family.membros + element.dependet.length}</th>
                                <th>{element.dependet.length}</th>
                                <th>{element.family.renda_familiar}</th>
                                <th>{element.family.programas_governo}</th>

                                <th>{element.responsible.nome}</th>
                                <th>{element.responsible.idade}</th>
                                <th>{element.responsible.estado_civil}</th>
                                <th>{element.responsible.profissao}</th>
                                <th>{element.responsible.ocupacao}</th>
                                <th>{element.responsible.escolaridade}</th>
                                <th>{element.responsible.telefone}</th>
                                <th>{element.responsible.numero_roupa}</th>
                                <th>{element.responsible.numero_calcado}</th>

                                <th>{element.familyHome.tipo_moradia}</th>
                                <th>{element.familyHome.condicao_moradia}</th>
                                <th>{element.familyHome.estrutura_moradia}</th>
                                <th>{element.familyHome.qualidade_agua}</th>
                                <th>{element.familyHome.qualidade_eletrica}</th>

                                <th>{element.adress.bairro}</th>
                                <th>{element.adress.rua}</th>
                                <th>{element.adress.numero}</th>

                                <th>{element.family.created_at}</th>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </ContentTable>
        </Container>
    )
}

export default Relatory