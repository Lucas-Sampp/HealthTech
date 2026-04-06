## 📖 Caso de Análise — Rotina Fragmentada de Atendimento Individual

Uma cuidadora de idosos atua de forma autônoma, atendendo diferentes pacientes ao longo da semana em suas próprias residências. Cada pessoa possui uma rotina específica, com necessidades que variam conforme seu estado de saúde, nível de autonomia e histórico de acompanhamento. No início, a organização do trabalho parecia simples. A cuidadora conseguia lembrar das particularidades de cada paciente e fazia pequenas anotações para complementar o que não podia guardar na memória. Com o passar do tempo, no entanto, o número de atendimentos aumentou e as diferenças entre as rotinas começaram a se tornar mais difíceis de gerenciar. Parte das informações fica registrada em cadernos, outras são enviadas em mensagens para familiares e algumas permanecem apenas como lembranças de atendimentos anteriores. Em determinados momentos, a cuidadora precisa interromper o que está fazendo para procurar informações antigas, tentando reconstruir o que foi feito nos dias anteriores. A situação se torna mais delicada quando familiares solicitam atualizações mais detalhadas ou quando é necessário entender a evolução de um paciente ao longo do tempo. Mesmo havendo registros, eles não estão organizados de forma que permitam uma visão clara e rápida. A sensação constante é de que o trabalho está sendo realizado, mas com um esforço maior do que o necessário para manter tudo sob controle. A organização da rotina, que deveria apoiar o cuidado, começa a competir com ele

## Pontos identificados 

A cuidadora precisa armazenar o registro de informações sobre o paciente. Ela armazena o estado de saúde, nível de autonomia e histórico de acompanhamento.

Pensando na estrutura de banco de dados teriamos as seguinte entidade:

* paciente [id(serial), nome(varchar), cpf(varchar)]

* historico_evolucao [id(serial),paciente_id (Foreign Key), data (date), nivel_autonomia (text - estado do paciente naquele dia), observacoes (text)]

### Justificativa:

***paciente***

`id:`
Acredito que o ID pode ser gerado de forma incremental (integer) para este cenário, pois, tratando-se de um atendimento autônomo, a cuidadora não lidará com milhões de pacientes.

`nome` Um atributo padrão para identificar os pacientes. 

`cpf:` 
Um atributo importante para identificar de forma unica, visto que podem existir paciente com nomes parecidos. 

***historico_evolucao***
`id:`
Identificador único (Primary Key) para cada registro de visita ou atendimento. Ele garante a integridade e a rastreabilidade de cada interação realizada pela cuidadora.

`paciente_id:`
Chave estrangeira (Foreign Key) que vincula o registro ao idoso específico. Esse relacionamento é o que permite ao sistema "organizar de forma que permita uma visão clara e rápida" de todo o passado clínico de um único paciente.

`data:`
Atributo fundamental para resolver o problema de "reconstruir o que foi feito nos dias anteriores". Com a data indexada, a busca por informações antigas deixa de ser manual e passa a ser instantânea.

`nivel_autonomia:`
Diferente do campo na tabela de pacientes (que mostra o estado atual), este campo registra como o paciente estava naquele dia específico. É este dado que permite gerar gráficos ou relatórios para "entender a evolução de um paciente ao longo do tempo" conforme solicitado pelos familiares.

`observacoes:`
Campo de texto destinado a centralizar o que antes ficava disperso em "cadernos", "mensagens" ou apenas na "memória". Ele atua como o diário de bordo técnico, garantindo que nenhum detalhe do acompanhamento se perca com o aumento do número de atendimentos.




