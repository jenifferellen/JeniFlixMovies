import { Bell, MagnifyingGlass, Triangle } from 'phosphor-react'
import { HeaderContainer, LeftContent, List, RightContent, Search } from './styles'
import { NavLink } from 'react-router-dom'
import { useContext, useState } from 'react'
import { ApiContext } from '../BoxSeries'
import { Series } from '../../pages/Series'


export function Header() {

    const [isActive, setIsActive] = useState(false)
    useContext(ApiContext)
    const [searchInput, setSearchInput] = useState('')

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        
    }

    console.log(searchInput)

    return(
        <HeaderContainer>
            <LeftContent>
                <NavLink to="/">
                    <div>logo</div>
                </NavLink>
                    <nav>
                        <List>
                           <NavLink to="/banana">
                                <p>Início</p>
                            </NavLink> 
                            <NavLink onClick={() => setIsActive(true)} className={isActive ? "banana" : "no"} to="/Series" >
                                <p>Séries</p>
                            </NavLink> 
                            <NavLink to="/Perfil1">
                                <p>Filmes</p>
                            </NavLink> 
                           <p>Bombando</p>
                           <p>Minha lista</p>
                        </List>
                    </nav>
            </LeftContent>
            <RightContent>
                <Search>
                <input type="text"
                 onChange={(e) => searchItems(e.target.value)}
                 />
                    <button><MagnifyingGlass size={18}/></button>
                </Search>

                    <NavLink>
                         <p>Infantil</p>
                    </NavLink>

                    <Bell size={18} />

                    <NavLink>
                        <div>
                            <img src="" alt="" />
                             <Triangle/>
                        </div>
                    </NavLink>
            </RightContent>
        </HeaderContainer>
    )
} 
 