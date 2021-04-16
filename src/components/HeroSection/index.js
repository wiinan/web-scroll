import React,{useState} from 'react';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElement';
import {HeroContainer,HeroBg,VideoBg,HeroContent,HeroH1,HeroP,ArrowForward,ArrowRight,HeroBtnWrapper} from './HeroSectionElement';

const HeroSection = () => {
    const [hover,setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    };
    return(
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Seja Bem Vindo</HeroH1>
                <HeroP>
                    Registrar com uma nova Conta e Receba novidades e ofertas
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' onMauseEnter={onHover} onMauseLeave={onHover} primary='true' dark='true'>Começe Agora {hover ? <ArrowForward /> : <ArrowRight />}</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}
export default HeroSection;