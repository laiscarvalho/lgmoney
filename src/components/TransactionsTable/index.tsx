import { useEffect } from "react";
import { Container } from "./styles.ts";
import {api} from '../../services/api.ts'

export function TransactionTable() {
useEffect(()=>{
   api.get('transactions')
   .then(date=> console.log(date))
})

    return (
        <Container>
            <table>
                <th>
                    Titulo
                </th>
                <th>
                    Preço
                </th>
                <th>
                    Categoria
                </th>
                <th>
                    Data
                </th>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>24/07/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">R$1.000</td>
                        <td>Casa</td>
                        <td>24/08/2021</td>
                    </tr>
                </tbody>
            </table>

        </Container>
    )
}