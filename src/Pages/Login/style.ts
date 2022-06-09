import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    background-color: #fff;
`

export const LoginContainer = styled.div`
    padding: 13rem;
    padding-top: 9rem;
    display: block;
    justify-content: center;
`

export const ImageContainer = styled.div`
 overflow-y: hidden;
    margin: 0;
    padding: 0;
    img{
        width: 100%;
        height: 100vh;
        margin: 0;
        padding: 0;
    }
`

export const WelcomeText = styled.div`
    display: grid;
    grid-gap: 0.5rem;
    justify-content: left;
    h1{
        color: red;
    }
    h4{
        color: green;
    }
    p{
        color: var(--fontSecondaryColor);
        font-size: 0.85rem;
    }
`

export const ContentInputInvalid=styled.div`
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    padding: 0.5rem;
    border: 2px solid red;
    border-radius: 0.3rem;

    input{
        border: none;
        width: 100%;
    }
`

export const ContentInput = styled.div`
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    padding: 0.5rem;
    border: 2px solid var(--borderInputContainerColor);
    border-radius: 0.3rem;

    input{
        border: none;
        width: 100%;
    }
`

export const ResetPassWordText = styled.p`
    font-weight: 500;
    text-align: left;
    font-size: 0.85rem;
    color: black;
    cursor: pointer;
`


export const ButtonLogin = styled.button`
    padding: 0.5rem;
    margin-top: 2rem;
    color: var(--buttonPrimaryColor);
    font-weight: 500;
    font-size: 1rem;
    text-align: center;
    border: none;
    width: 100%;
    border-radius: 0.3rem;
    background-color: green;

    p{
        margin: 0;
    }
    
    .link{
        text-decoration: none;
        color: #fff;
    }

    cursor: pointer;
`

export const TextOptionalAcessLogin = styled.div`
    color: var(--fontSecondaryColor);
    font-size: 0.85rem;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
`

export const ContainerSocialLogin = styled.div`
    display:  grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    padding-left: 5rem;
    padding-right: 5rem;
    justify-content: center;
`

export const SocialLogin = styled.div`
    border: 2px solid var(--borderInputContainerColor);
    display: grid;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 0.3rem;

    img{
        width: 1.5rem;
        margin-left: 1rem;
        margin-right: 1rem;
    }

    cursor: pointer;
`

export const InvalidCredentialContainer = styled.div`
    border-radius: 0.3rem;
    color: red;
    font-weight: 400;
    font-size: 0.85rem;
    margin-top: 0.5rem;
`

