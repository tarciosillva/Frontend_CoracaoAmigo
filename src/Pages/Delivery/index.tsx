import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import moment from "moment";
import { PageContanier, ContentPage, TitlePage, Button } from "../../Components/styledComponentsCss";

import { DeliveryContent, DeliveryDescription, SectionDeliveryContent, TextArea, VoluntaryDescription } from "./style"
import ContentMenu from "../../Components/ContentMenu";

import { voluntaryProps, } from "../../Config/EntitiesType"

interface family {
    id: string
    responsavel: string
    estado_atual: string,
    rua: string,
    numero: string,
    bairro: string
}

const Delivery: React.FC = () => {
    const param = useParams()
    const token = localStorage.getItem('token')

    const [textAreaElement, setTextAreaElememt] = useState<string>('')
    const [voluntaryId, setVoluntaryId] = useState<number>()
    const [familyIdList, setfamilyIdList] = useState<number[]>([])

    const [familyList, setFamilyList] = useState<family[]>([])
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

    useEffect(() => {
        axios.get(`http://localhost:3001/listFamiliesRouter/${param.routerId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(res => {
            setFamilyList(res.data)
        })
    }, [])

    const sendNewDelivery = () => {
        if (familyIdList.length > 0 && voluntaryId && textAreaElement) {
            axios.post(`http://localhost:3001/newDelivery`, {
                id_familia: familyIdList,
                id_voluntario: voluntaryId,
                id_rota: param.routerId,
                data: moment().format('DD/MM/YYYY'),
                hora: '',
                status: "Em adamento",
                entrega_descricao: textAreaElement,
                observacao: ""
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((res) => {
                if (res.status === 200)
                    window.location.reload()
            })
        } else {
            window.alert('Preencha e selecione todas as informações!')
        }
    }

    const addFamily = (checked: boolean, familyId: number) => {
        var familyIdListCopy = familyIdList
        if (checked) {
            familyIdListCopy.push(familyId)
        } else {
            const id = familyIdListCopy.findIndex(family => family === familyId)
            familyIdListCopy.splice(id, 1)
        }
    }

    return (
        <PageContanier>
            <ContentMenu />

            <ContentPage>
                <TitlePage>
                    <h3>Entregas</h3>
                </TitlePage>

                <section>1. Selecione uma ou mais famílias</section>
                <SectionDeliveryContent>
                    {familyList.map((family, index) => (
                        <DeliveryContent>
                            <input type="checkbox" name="deliveryList" id={"deliveryList1" + index} onChange={(e) => addFamily(e.target.checked, Number(family.id))} />
                            <label htmlFor={"deliveryList1" + index}>
                                <DeliveryDescription>
                                    <div>{family.responsavel}</div>
                                    <div>{family.rua + ' - ' + family.bairro + ' Nº' + family.numero}</div>
                                </DeliveryDescription>
                            </label>
                        </DeliveryContent>
                    ))}
                </SectionDeliveryContent>

                <section>2. Selecione um voluntário</section>
                <SectionDeliveryContent>
                    {voluntaries.map((voluntary, index) => (
                        <DeliveryContent key={index}>
                            <input type="radio" name="voluntaryList" id={"voluntary" + index} onChange={() => setVoluntaryId(parseInt(voluntary.id))} />
                            <label htmlFor={"voluntary" + index}>
                                <VoluntaryDescription>
                                    {voluntary.nome}
                                </VoluntaryDescription>
                            </label>
                        </DeliveryContent>
                    ))}
                </SectionDeliveryContent>

                <section>3. Descreva a entrega a ser realizada</section>
                <SectionDeliveryContent>
                    <TextArea name="" id="" onChange={(e) => setTextAreaElememt(e.target.value)}></TextArea>
                </SectionDeliveryContent>

                <section>4. Verifique as informações e confirme</section>
                <Button onClick={() => sendNewDelivery()}><p>Confirmar</p></Button>
            </ContentPage>
        </PageContanier>
    )
}

export default Delivery