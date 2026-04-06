## 📖 Caso de Análise — Rotina Fragmentada de Atendimento Individual

Uma cuidadora de idosos atua de forma autônoma, atendendo diferentes pacientes ao longo da semana em suas próprias residências. Cada pessoa possui uma rotina específica, com necessidades que variam conforme seu estado de saúde, nível de autonomia e histórico de acompanhamento. No início, a organização do trabalho parecia simples. A cuidadora conseguia lembrar das particularidades de cada paciente e fazia pequenas anotações para complementar o que não podia guardar na memória. Com o passar do tempo, no entanto, o número de atendimentos aumentou e as diferenças entre as rotinas começaram a se tornar mais difíceis de gerenciar. Parte das informações fica registrada em cadernos, outras são enviadas em mensagens para familiares e algumas permanecem apenas como lembranças de atendimentos anteriores. Em determinados momentos, a cuidadora precisa interromper o que está fazendo para procurar informações antigas, tentando reconstruir o que foi feito nos dias anteriores. A situação se torna mais delicada quando familiares solicitam atualizações mais detalhadas ou quando é necessário entender a evolução de um paciente ao longo do tempo. Mesmo havendo registros, eles não estão organizados de forma que permitam uma visão clara e rápida. A sensação constante é de que o trabalho está sendo realizado, mas com um esforço maior do que o necessário para manter tudo sob controle. A organização da rotina, que deveria apoiar o cuidado, começa a competir com ele

## Pontos identificados 

A cuidadora precisa armazenar o registro de informações sobre o paciente. Ela armazena o estado de saude, nivel de autonomia e historico de acompamento. 

Pensando na estrutura de banco de dados teriamos as seguinte entidade:

paciente [id(serial), nome(varchar), cpf(varchar), autonomia(enum), historico(json ou text)]

### Justificativa:

* id: Acredito que o id pode ser gerado de forma incremental como int para esse cenario, pois se tratando de um atendimento autonomo, a cuidadora não lidará com milhoes de pacientes.
* nome: Um atributo padrão para identificar os pacientes. 
* cpf: Um atributo importante para identificar de forma unica, visto que podem existir paciente com nomes parecidos. 
* autonomia: A ideia desse atributo seria definir de um dado constante para cada usuario. Por exemplo, eu poderia definir valores como [AUTONOMO, PRECISA_DE_ACOMPANHENTE, SITUACAO_DE_CAMA], e dessa forma a situação do paciente poderia mudar dependendo do resultado da consulta. Então um paciente que está apresentando evolução no quadro de saude teria UPDATE em seu registro a cada visita -> SITUACAO_DE_CAMA -> PRECISA_DE_ACOMPANHENTE -> AUTONOMO.
* historico: dentro desse atributo teriamos anotações importantes sobre o quadro do paciente, servindo como uma "ficha medica" para a cuidadora ter um controle sobre os atendimentos realizados atraves de uma estrutura de objetos aninhados. Dentro de cada objeto, o corpo json poderia armazenar dados chave importantes como data:12/12/1234 e autonomia:SITUACAO_DE_CAMA correspondente aquele dia. Ficando dessa forma:

```json
{  "historico_atendimentos": [
    {
      "data": "2023-10-01",
      "autonomia": "SITUACAO_DE_CAMA",
      "observacoes": "Paciente apresentou febre durante a noite, administrado medicamento conforme prescricao."
    },
    {
      "data": "2023-10-15",
      "autonomia": "PRECISA_DE_ACOMPANHENTE",
      "observacoes": "Melhora no quadro clinico, já consegue se sentar com auxilio."
    },
    {
      "data": "2023-11-01",
      "autonomia": "AUTONOMO",
      "observacoes": "Paciente recuperou mobilidade total, segue em observação preventiva."
    }
  ]


}
```





