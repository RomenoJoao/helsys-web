import { gql } from "@apollo/client";

export const GETALUNOS = gql`
  query MyQuery {
    alunos {
      name
      matricula
      curso {
        nome
      }
      anoAcademico
    }
  }
`;