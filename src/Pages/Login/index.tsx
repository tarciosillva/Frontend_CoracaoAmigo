import React, { useState } from "react";
import axios from "axios";

import {
    Container,
    LoginContainer,
    ImageContainer,
    WelcomeText,
    ContentInput,
    ResetPassWordText,
    ButtonLogin,
    TextOptionalAcessLogin,
    ContainerSocialLogin,
    SocialLogin,
    InvalidCredentialContainer,
    ContentInputInvalid
} from "./style"

import lightHands from "../../image/lightHands.jpg"
import googleLogo from "../../assets/Google__G__Logo.svg"
import facebookLogo from "../../assets/facebook.svg"

const Login: React.FC = () => {
    localStorage.clear()
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [nameButtonLogin, setNameButonLogin] = useState<string>('Entrar')
    const [errLogin, setErrLogin] = useState<boolean>(false)

    const [invalidInputemail, setInvalidInputemail] = useState<boolean>(false);
    const [invalidInputPassword, setInvalidInputPassword] = useState<boolean>(false);

    const submitLogin = () => {
        if (email) {
            if (password) {
                setNameButonLogin('Entrando...')
                axios
                    .post(`http://localhost:5000/auth`, {
                        email,
                        password,
                    })
                    .then((res) => {
                        if (res.data.token) {
                            var token = res.data.token;
                            localStorage.setItem("token", token);
                            window.location.href = "/home"
                        }
                    })
                    .catch((err) => {
                        setNameButonLogin('Entrar')
                        // eslint-disable-next-line eqeqeq
                        if (err) {
                            setInvalidInputPassword(false)
                            setInvalidInputemail(false)
                            setErrLogin(true)
                        }
                    });
            } else {
                setInvalidInputPassword(true)
            }
        } else {
            setInvalidInputemail(true)
        }
    }

    return (
        <Container>
            <LoginContainer>
                <div>
                    <WelcomeText>
                        <h4>Seja bem vindo,</h4>
                        <p>Ralize seu acesso para entrar no sistema</p>
                    </WelcomeText>
                    <InvalidCredentialContainer>
                        {errLogin ? (
                            <p>Email / senha incorretos</p>
                        ) : ('')}
                    </InvalidCredentialContainer>

                    {invalidInputemail ? (
                        <div>
                            <ContentInputInvalid>
                                <input type="email" placeholder="Preencha com seu email" onChange={(e) => setEmail(e.target.value)} />
                            </ContentInputInvalid>
                        </div>
                    ) : (
                        <ContentInput>
                            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        </ContentInput>
                    )}

                    {invalidInputPassword ? (
                        <div>
                            <ContentInputInvalid>
                                <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
                            </ContentInputInvalid>
                        </div>
                    ) : (
                        <ContentInput>
                            <input type="password" placeholder="Insira sua senha" onChange={(e) => setPassword(e.target.value)} />
                        </ContentInput>
                    )}

                    <ResetPassWordText>Esqueci minha senha?</ResetPassWordText>
                    <ButtonLogin onClick={() => submitLogin()}>
                        <p>{nameButtonLogin}</p>
                    </ButtonLogin>
                </div>
                <TextOptionalAcessLogin>
                    <p>Ou acesse com</p>
                </TextOptionalAcessLogin>

                <ContainerSocialLogin>
                    <SocialLogin>
                        <img src={googleLogo} alt="Logo da letra G do google" />
                    </SocialLogin>
                    <SocialLogin>
                        <img src={facebookLogo} alt="Logo da letra F do facebook" />
                    </SocialLogin>
                </ContainerSocialLogin>
            </LoginContainer>
            <ImageContainer>
                <img src={lightHands} alt="Mãos com luzes brilhando" />
            </ImageContainer>
        </Container>
    )
}

export default Login