import logo from "../../assests/logo.svg";
import { Container, Content } from "./styles.ts";

interface HeaderProps{
    onOpenNewTransactionModal:()=>void;
}
export function Header({onOpenNewTransactionModal}: HeaderProps) {

    return (
        <Container>
            <Content>
                <img src={logo} alt='lg money' />
                <button type='button' onClick={onOpenNewTransactionModal}>Nova transação</button>       
            </Content>
        </Container>
    )
}