import { Header } from "../../components/Header"
import { Content, BoxContent } from "./styles"
import { BoxSeries } from "../../components/BoxSeries"

export function Series() {
    return(
        <Content>
            <Header />
            <BoxContent>
                <BoxSeries />
            </BoxContent>
        </Content>
    )
}