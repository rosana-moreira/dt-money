import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
         <tr>
             <td>5555555555</td>
             <td className="deposit">5555555555</td>
             <td>5555555555</td>
             <td>5555555555</td>
         </tr>
         <tr>
             <td>5555555555</td>
             <td className="withdraw">5555555555</td>
             <td>5555555555</td>
             <td>5555555555</td>
         </tr>
        </tbody>
      </table>
    </Container>
  );
}
