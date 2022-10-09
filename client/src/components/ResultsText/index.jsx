import { Container } from "./styled";

const ResultsText = ({ text, result }) => {
  return (
    <Container>
      {/* <p>
          {text}: <span> {result}</span>
        </p> */}

      {text === 0 ? (
        <p>
          {"Amanhã"}: <span> {result}</span>
        </p>
      ) : null}

      {text === 1 ? (
        <p>
          {"Em 15 dias"}: <span> {result}</span>
        </p>
      ) : null}

      {text === 2 ? (
        <p>
          {"Em 30 dias"}: <span> {result}</span>
        </p>
      ) : null}

      {text === 3 ? (
        <p>
          {"em 90 dias"}: <span> {result}</span>
        </p>
      ) : null}
    </Container>
  );
};

export default ResultsText;
