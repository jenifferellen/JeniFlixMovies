import { PerfilsContainer, Middle, ButtonG, Question, Profiles } from './styles'
import perfil1 from './images/perfil1.jpg'
import perfil6 from './images/perfil6.jpg'
import perfil3 from './images/perfil3.jpg'
import perfil4 from './images/perfil4.jpg'
import perfil5 from './images/perfil5.jpg'

import { NavLink } from 'react-router-dom' 


export function Perfils() {
    return(
        <div>
            <PerfilsContainer>
                <Question>
                    <p>Quem está assistindo?</p>
                </Question>
                <nav>
                    <Middle>
                        <NavLink to="/banana">
                            <Profiles>
                                <img src={perfil1} alt="" />
                                <p>Usuário 1</p>
                            </Profiles>
                        </NavLink>
                        <NavLink to="/banana">
                            <Profiles>
                                <img src={perfil6} alt="" />
                                <p>Usuário 2</p>
                            </Profiles>
                        </NavLink>
                        <NavLink to="/banana">
                            <Profiles>
                                <img src={perfil3} alt="" />
                                <p>Usuário 3</p>
                            </Profiles>
                        </NavLink>
                        <NavLink to="/banana">
                            <Profiles>
                                <img src={perfil4} alt="" />
                                <p>Usuário 4</p>
                            </Profiles>
                        </NavLink>
                        <NavLink to="/banana">
                            <Profiles>
                                <img src={perfil5} alt="" />
                                <p>Usuário 5</p>
                            </Profiles>
                        </NavLink>

                    </Middle>
                </nav>
                <ButtonG>
                    <button>Gerenciar perfis</button>
                </ButtonG>
            </PerfilsContainer>
        </div>
    )
}