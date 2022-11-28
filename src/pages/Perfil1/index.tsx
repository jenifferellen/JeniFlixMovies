import { Header } from "../../components/Header";
import { Teste, Content } from "./styles";
import { BoxMovie } from "../../components/BoxMovie";


export function Perfil1() {
    return(
        <Content className="batata">
            <Header />
            <Teste className="banana">
                <BoxMovie />
            </Teste>
        </Content>
    )
}