import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import { getPage } from "../graphql/wordpress";

export function Page() {
  const { pageUri } = useParams(); // Acessa o parâmetro da rota
  const [pageTitle, setPageTitle] = useState(""); // Estado para armazenar o título da página
  const [pageContent, setPageContent] = useState(""); // Estado para armazenar o conteúdo da página

  useEffect(() => {
    async function fetchData() {
      const page = await getPage(pageUri); // Usa o URI para buscar os dados
      setPageContent(page.page.content); // Atualiza o estado com o conteúdo da página
      setPageTitle(page.page.title); // Atualiza o estado com o título da página
    }
    fetchData();
  }, [pageUri]); // Re-executa quando o URI muda

  function createMarkup() {
    return { __html: pageContent }; // Retorna o conteúdo da página
  }

  return (
    <Container className="py-5">
      <h1 className="mb-4" style={{ fontWeight: "bold" }}>
        {pageTitle}
      </h1>
      <div dangerouslySetInnerHTML={createMarkup()}></div>
    </Container>
  );
}
