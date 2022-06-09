import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { useParams } from "react-router-dom";
import ContentMenu from "../../Components/ContentMenu";
import { PageContanier, ContentPage, TitlePage, Button } from "../../Components/styledComponentsCss";

import { DeliveryContent } from "./style"

import { deliveriesRouterProps } from "./type"
import { voluntaryProps } from "../../Config/EntitiesType";

const DeliveriesRouter: React.FC = () => {
    const param = useParams()
    const token = localStorage.getItem('token')
    const [deliveries, setDeliveries] = useState<deliveriesRouterProps[]>([])
    const [voluntaries, setVoluntaries] = useState<voluntaryProps[]>([])

    const [changeVoluntaryDelivery, setChangeVoluntaryDelivery] = useState<boolean>(false)

    const [voluntaryChangeId, setVoluntaryChangeId] = useState<number>()

    useEffect(() => {
        axios.get(`http://localhost:3001/listDeliveriesRoute/${param.routerId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(res => {
            setDeliveries(res.data)
        })
    }, [])

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

    const changeVoluntary = (delivery: deliveriesRouterProps) => {
        axios.delete(`http://localhost:3001/deleteVoluntaryIdDelivery/${voluntaryChangeId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        /* if (voluntaryChangeId) {
            delivery.id_voluntario = voluntaryChangeId
        }

        axios.post(`http://localhost:3001/newDelivery`, {
            id_familia: delivery.id_familia,
            id_voluntario: delivery.id_voluntario,
            id_rota: param.routerId,
            data: moment().format('DD/MM/YYYY'),
            hora: '',
            status: "Em adamento",
            entrega_descricao: delivery.entrega_descricao,
            observacao: ""
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            if (res.status === 200)
                window.location.reload()
        }) */

        setChangeVoluntaryDelivery(false)
    }

    const selectNewVoluntaryDelivery = (voluntaryId: number) => {
        setVoluntaryChangeId(voluntaryId)
        setChangeVoluntaryDelivery(true)
    }


    return (
        <PageContanier>
            <ContentMenu />
            <ContentPage>
                <TitlePage>
                    <h3>Visualizar entregas</h3>
                    <p>Total de entregas na rota: {deliveries.length}</p>
                    {deliveries.map((element, index) => (
                        <DeliveryContent key={index}>
                            <div>
                                Família: {element.responsavel_familiar}
                            </div>
                            <div>
                                Voluntário:
                                <select name="" id="" value={element.id_voluntario} onChange={(e) => selectNewVoluntaryDelivery(parseInt(e.target.value))}>
                                    {voluntaries.map((voluntary) => (
                                        <option value={voluntary.id}>{voluntary.nome}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                Data: {element.data + ' ' + element.hora}
                            </div>
                            <div>
                                Entrega: {element.entrega_descricao}
                            </div>
                            <div className="status">
                                Status: {element.status}
                            </div>
                            <div>
                                Observações: {element.observacao}
                            </div>
                            {changeVoluntaryDelivery ? (
                                <>
                                    <Button onClick={() => changeVoluntary(element)}>Salvar alterações</Button>
                                </>
                            ) : (<></>)}
                        </DeliveryContent>
                    ))}
                </TitlePage>
            </ContentPage>
        </PageContanier >
    )
}
export default DeliveriesRouter