import { BoxAll } from "../../components/BoxAll";
import { Header } from "../../components/Header";
import { Content, Caixa } from "./styles";

export function Inicio() {
    return(
        <Content>
            <Header />
            <Caixa>
                <BoxAll />
            </Caixa>
        </Content>
    )
}