import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { PageContanier, ContentPage, TitlePage, ActionSelect } from "../../Components/styledComponentsCss"

import ContentMenu from "../../Components/ContentMenu"

import {
    ContainerFamily,
    Section,
    SectionName,
    ItemType,
    ItemName,
    ContentItem,
    SectionElement,
    ButtonHistoric,
    ContainerTopActions,
    Hr
} from "./style"

import { registerProps } from "../../Config/EntitiesType"
import historicIcon from "../../assets/historicIcon.svg"

const Family: React.FC = () => {
    const token = localStorage.getItem('token')
    const params = useParams()
    const [register, setRegister] = useState<registerProps>()

    const [actualStateFamily, setActualStateFamily] = useState<string>()

    useEffect(() => {
        axios.get(`http://localhost:3001/listFamilyRegisterFull/${params.familyId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(res => {
            if (res.status === 200) {
                setRegister(res.data)
                setActualStateFamily(res.data.family.estado_atual)
            }
        })
    }, [])


    const updateActualStateFamily = (stateFamily: string) => {
        axios.put(`http://localhost:3001/updateActualStateFamily/${params.familyId}/${stateFamily}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(res => {
            if (res.status === 200)
                setActualStateFamily(stateFamily)
        })
    }

    return (
        <PageContanier>
            <ContentMenu />
            <ContentPage>
                <TitlePage>
                    <h3>Família</h3>
                </TitlePage>

                <ContainerFamily>
                    <ContainerTopActions>
                        <ActionSelect>
                            <label htmlFor="status_family">Estado atual da família</label>
                            <select name="stauts_family" id="stauts_family" value={actualStateFamily} onChange={(e) => updateActualStateFamily(e.target.value)}>
                                <option value="Ativo">Ativo</option>
                                <option value="Iterrompido">Iterrompido</option>
                                <option value="Reanalise">Reanálise</option>
                                <option value="EmergênciaPendente">Emergência/Pendente</option>
                            </select>
                        </ActionSelect>

                        <ButtonHistoric>
                            <Link className="link" to={`/historic/${params.familyId}`}>
                                <img src={historicIcon} alt="Icone de relogio" />
                                Histórico de atendimento
                            </Link>
                        </ButtonHistoric>

                    </ContainerTopActions>
                    <Section>
                        <SectionName> 1. Informações do responsável familiar</SectionName>
                        <SectionElement>
                            <div className="contentMargin">
                                <ContentItem>
                                    <ItemType>Nome</ItemType>
                                    <ItemName>{register?.responsible.nome}</ItemName>
                                </ContentItem>
                                <ContentItem>
                                    <ItemType>Idade</ItemType>
                                    <ItemName>{register?.responsible.idade}</ItemName>
                                </ContentItem>
                                <ContentItem>
                                    <ItemType>Estado cívil</ItemType>
                                    <ItemName>{register?.responsible.estado_civil}</ItemName>
                                </ContentItem>
                                <ContentItem>
                                    <ItemType>Profissão</ItemType>
                                    <ItemName>{register?.responsible.profissao}</ItemName>
                                </ContentItem>
                                <ContentItem>
                                    <ItemType>Ocupação</ItemType>
                                    <ItemName>{register?.responsible.ocupacao}</ItemName>
                                </ContentItem>
                            </div>
                            <div>
                                <ContentItem>
                                    <ItemType>Escolaridade</ItemType>
                                    <ItemName>{register?.responsible.escolaridade}</ItemName>
                                </ContentItem>
                                <ContentItem>
                                    <ItemType>Telefone</ItemType>
                                    <ItemName>{register?.responsible.telefone}</ItemName>
                                </ContentItem>
                                <ContentItem>
                                    <ItemType>Número de roupa</ItemType>
                                    <ItemName>{register?.responsible.numero_roupa}</ItemName>
                                </ContentItem>
                                <ContentItem>
                                    <ItemType>Número de calçado</ItemType>
                                    <ItemName>{register?.responsible.numero_calcado}</ItemName>
                                </ContentItem>
                            </div>
                        </SectionElement>
                    </Section>

                    <Section>
                        <SectionName> 2. Informações da família</SectionName>
                        <SectionElement>
                            <div className="contentMargin">
                                <ContentItem>
                                    <ItemType>Nº membros</ItemType>
                                    <ItemName>{register?.family.membros}</ItemName>
                                </ContentItem>
                                <ContentItem>
                                    <ItemType>Renda familiar</ItemType>
                                    <ItemName>{register?.family.renda_familiar}</ItemName>
                                </ContentItem>
                                <ContentItem>
                                    <ItemType>Programas do governo</ItemType>
                                    <ItemName>{register?.family.programas_governo}</ItemName>
                                </ContentItem>
                                <ContentItem>
                                    <ItemType>Data do cadastro</ItemType>
                                    <ItemName>{register?.family.created_at}</ItemName>
                                </ContentItem>
                            </div>
                            <div className="contentMargin">
                                <ContentItem>
                                    <ItemType>Tipo de moradia</ItemType>
                                    <ItemName>{register?.familyHome.tipo_moradia}</ItemName>
                                </ContentItem>
                                <ContentItem>
                                    <ItemType>Condição de moradia</ItemType>
                                    <ItemName>{register?.familyHome.condicao_moradia}</ItemName>
                                </ContentItem>
                                <ContentItem>
                                    <ItemType>Estrutura de moradia</ItemType>
                                    <ItemName>{register?.familyHome.estrutura_moradia}</ItemName>
                                </ContentItem>
                                <ContentItem>
                                    <ItemType>Qualidade de água</ItemType>
                                    <ItemName>{register?.familyHome.qualidade_agua}</ItemName>
                                </ContentItem>
                                <ContentItem>
                                    <ItemType>Qualidade de energia elétrica</ItemType>
                                    <ItemName>{register?.familyHome.qualidade_eletrica}</ItemName>
                                </ContentItem>
                            </div>
                            <div>
                                <ContentItem>
                                    <ItemType>Foto da residência</ItemType>
                                    <a href="https://goo.gl/maps/JjLNrFGjEwkFiw4z6" target="_blank" rel="noopener noreferrer">
                                        <ItemName><img src={register?.familyHome.foto} alt="Imagem da residência familiar" /></ItemName>
                                    </a>
                                </ContentItem>
                            </div>
                        </SectionElement>
                    </Section>

                    <Section>
                        <SectionName> 3. Informações dos dependentes</SectionName>
                        {register?.dependet ? (
                            register?.dependet.map((element, index) => (
                                <>
                                    <SectionElement key={index}>
                                        <div className="contentMargin">
                                            <ContentItem>
                                                <ItemType>Nome</ItemType>
                                                <ItemName>{element.nome}</ItemName>
                                            </ContentItem>
                                            <ContentItem>
                                                <ItemType>Idade</ItemType>
                                                <ItemName>{element.idade}</ItemName>
                                            </ContentItem>
                                            <ContentItem>
                                                <ItemType>Parentesco</ItemType>
                                                <ItemName>{element.parentesco}</ItemName>
                                            </ContentItem>
                                        </div>
                                        <div >
                                            <ContentItem>
                                                <ItemType>Escolaridade</ItemType>
                                                <ItemName>{element.escolaridade}</ItemName>
                                            </ContentItem>
                                            <ContentItem>
                                                <ItemType>Nº roupa</ItemType>
                                                <ItemName>{element.numero_roupa}</ItemName>
                                            </ContentItem>
                                            <ContentItem>
                                                <ItemType>Nº calçado</ItemType>
                                                <ItemName>{element.numero_calcado}</ItemName>
                                            </ContentItem>
                                        </div>
                                    </SectionElement>
                                    <Hr />
                                </>
                            ))
                        ) : (<></>)}
                    </Section>
                </ContainerFamily>
            </ContentPage>
        </PageContanier>

    )
}

export default Family