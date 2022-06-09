import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { PageContanier, ContentPage } from "../../Components/styledComponentsCss"
import { ContainerHeader, TimeLineContainer, DivisorTimeLine, ItemDesciption, TimeIconContent, HistoricDecription } from "./style"

import { historicType } from "./type"

import timeIcon from "../../assets/historicIcon.svg"
import ContentMenu from "../../Components/ContentMenu"

const Historic: React.FC = () => {
    const token = localStorage.getItem('token')
    const params = useParams()
    const [historicAttendence, setHistoricAttendence] = useState<historicType[]>([])

    useEffect(() => {
        axios.get(`http://localhost:3001/listDeliveryFamiliy/${params.familyId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            setHistoricAttendence(res.data)
        })
    }, [historicAttendence])

    return (
        <PageContanier>
            <ContentMenu />
            <ContentPage>
                <ContainerHeader>
                    <h4>Histórico de atendimentos</h4>
                    <p>Família: {'Dona Rosa Maria'}</p>
                </ContainerHeader>

                {historicAttendence.length ? (
                    <TimeLineContainer>
                        {historicAttendence.map((element, index) => (
                            <div key={index}>
                                <HistoricDecription>
                                    <TimeIconContent>
                                        <img src={timeIcon} alt="Icone de relógio" />
                                    </TimeIconContent>

                                    <ItemDesciption >
                                        <p><b>Data</b>: {element.data}</p>
                                        <p><b>Hora</b>: {element.hora}</p>
                                    </ItemDesciption>
                                    <ItemDesciption>
                                        <p><b>Status</b>: {element.status}</p>
                                        <p><b>Entrega</b>: {element.entrega_descricao}</p>
                                    </ItemDesciption>
                                </HistoricDecription>
                                <DivisorTimeLine>
                                    <p>.</p>
                                    <p>.</p>
                                    <p>.</p>
                                </DivisorTimeLine>
                            </div>
                        ))}
                    </TimeLineContainer>
                ) : (
                    <TimeLineContainer>
                        <HistoricDecription>
                            <TimeIconContent>
                                <img src={timeIcon} alt="Icone de relógio" />
                            </TimeIconContent>

                            <ItemDesciption >
                                <p>Esta família ainda não possui atendimentos realizados!</p>
                            </ItemDesciption>
                        </HistoricDecription>
                    </TimeLineContainer>
                )}

            </ContentPage>
        </PageContanier>
    )
}

export default Historic