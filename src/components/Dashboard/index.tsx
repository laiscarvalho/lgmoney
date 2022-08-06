import { Summary } from "../Summary/index.tsx";
import { TransactionTable } from "../TransactionsTable/index.tsx";
import { Container } from "./styles.ts";

export function Dashboard(){
    return(

        <Container>
            <Summary/>
            <TransactionTable/>
        </Container>
    )
}