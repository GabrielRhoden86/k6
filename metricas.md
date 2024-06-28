## Counter: Um contador é uma métrica que simplesmente soma os valores1. É usado quando você quer acompanhar o total de ocorrências de um evento específico, como o número total de solicitações HTTP feitas ou o número total de erros1.

## Rate: Uma taxa é uma métrica que rastreia a frequência com que um valor não-zero ocorre1. É útil para acompanhar coisas como a taxa de falhas - por exemplo, você poderia ter uma taxa que rastreia quantas de suas solicitações HTTP resultaram em um status de erro1.

## Trend: Uma tendência é uma métrica que calcula estatísticas para vários valores, como média, moda ou percentil12. É útil para acompanhar coisas como os tempos de resposta das solicitações HTTP ao longo do tempo2. Você pode usar uma tendência para ver como o tempo de resposta médio muda durante um teste, ou para ver qual é o pior tempo de resposta (percentil 95 ou 99, por exemplo)2.

## check: para verificar status http ex: 200, 404, 500 etc

## fail: A função fail é usada para abortar o teste imediatamente3. Isso é útil quando você encontra uma condição que significa que o teste não pode ou não deve continuar
 fail('status code was not 200');