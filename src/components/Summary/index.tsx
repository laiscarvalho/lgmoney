import { Container } from "./styles.ts";
import incomeImg from '../../assests/income.svg'
import outcomeImg from '../../assests/outcome.svg'
import total from '../../assests/total.svg'



export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$1000</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Saidas" />
                </header>
                <strong>R$1000</strong>
            </div>
            <div className="total">
                <header>
                    <p>Total</p>
                    <img src={total} alt="Total" />
                </header>
                <strong>R$1000</strong>
            </div>
        </Container>
    )
}