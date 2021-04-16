import React from 'react';
import {Container,FormWrap,Icon,FormContent,Form,FormH1,FormLabel,FormInput,FormButton,Text} from '../components/SignIn/SignInElement';

const SigninPage = () => {
    return(
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>dolla</Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Loge com sua conta</FormH1>
                            <FormLabel htmlFor='for'>E-mail</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>E-mail</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Continuar</FormButton>
                            <Text>Esqueceu a senha?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )}
export default SigninPage;