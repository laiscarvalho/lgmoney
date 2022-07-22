import logo from "../../assests/logo.svg";
import { Container, Content } from "./styles.ts";

export function Header() {

    return (
        <Container>
            <Content>
                <img src={logo} alt='lg money' />
                <button type='button'>Nova transação</button>
            </Content>
        </Container>
    )
}