import React, { useState } from "react";
import { ItemForm, TitlePage, Button } from "../../../Components/styledComponentsCss"
import { FormElement, ItensInline } from "./style"
import addColaboratyIcon from "../../../assets/addUser.svg"
import axios from "axios";

const Form: React.FC = () => {
    const token = localStorage.getItem('token')

    const [nome, setNome] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [senha, setSenha] = useState<string>('')
    const [cpf, setCpf] = useState<string>('')
    const [telefone, setTelefone] = useState<string>('')
    const [municipio, setMunicipio] = useState<string>('')
    const [bairro, setBairro] = useState<string>('')
    const [rua, setRua] = useState<string>('')
    const [numero, setNumero] = useState<string>('')

    const send = () => {
        axios.post(`http://localhost:3001/newUser`, {
            user: { nome, email, senha, cpf, telefone, perfil: 'Voluntario' },
            adress: { municipio, bairro, rua, numero }
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(res => {
            if (res.status === 200)
                console.log(res)
        })
    }

    return (
        <FormElement>
            <TitlePage>
                <h3>Adicionar voluntário <img src={addColaboratyIcon} alt="" /></h3>
            </TitlePage>

            <br />
            <h4>Informações pessoais</h4>

            <ItemForm>
                <label htmlFor="name">Nome completo</label>
                <input type="text" id="name" onChange={(e) => setNome(e.target.value)} />
            </ItemForm>

            <ItemForm>
                <label htmlFor="cpf">CPF</label>
                <input type="text" id="cpf" onChange={(e) => setCpf(e.target.value)} />
            </ItemForm>

            <h4>Contato</h4>

            <ItemForm>
                <label htmlFor="phone">Telefone</label>
                <input type="text" id="phone" onChange={(e) => setTelefone(e.target.value)} />
            </ItemForm>
            <ItemForm>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" onChange={(e) => setEmail(e.target.value)} />
            </ItemForm>

            <h4>Endereço</h4>
            <ItemForm className="adressCity">
                <label htmlFor="city">Cidade</label>
                <input type="text" id="city" onChange={(e) => setMunicipio(e.target.value)} />
            </ItemForm>

            <ItensInline>
                <ItemForm>
                    <label htmlFor="district">Bairro</label>
                    <input type="text" id="district" onChange={(e) => setBairro(e.target.value)} />
                </ItemForm>
                <ItemForm>
                    <label htmlFor="number">Numero</label>
                    <input type="number" id="number" onChange={(e) => setNumero(e.target.value)} />
                </ItemForm>
                <ItemForm>
                    <label htmlFor="stret">Rua</label>
                    <input type="text" id="stret" onChange={(e) => setRua(e.target.value)} />
                </ItemForm>
            </ItensInline>

            <div>
                <Button onClick={() => send()}><p>Cadastrar</p></Button>
            </div>
        </FormElement>
    )
}

export default Form