import React from 'react';
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/img2.png'
import Icon3 from '../../images/img4.svg'
import {ServicesContainer,ServicesCard,ServicesH1,ServicesH2,ServicesP,ServicesWrapper,ServicesIcon} from './ServicesElement';

const Services = () => {
    return(
        <ServicesContainer id='services'>
            <ServicesH1>Outros Serviços</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Reduce Exprenses</ServicesH2>
                    <ServicesP>Nos ajudamos a reduzir e acrescentar sua receita geral.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Premium</ServicesH2>
                    <ServicesP>Desbloqueie outras função de cartão de membros com retorno de 5% nas transações.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Acesso Virtual</ServicesH2>
                    <ServicesP>Você pode acessar a plataforma online em qualquer luga do mundo.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}
export default Services;