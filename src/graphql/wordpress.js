export async function getPrimaryMenu() {
  const response = await fetch("https://guiadaspromocoes.com.br/graphql", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `{
        menu(id: "3", idType: DATABASE_ID) {
          menuItems {
            edges {
              node {
                uri
                label
              }
            }
          }
        }
      }
      `,
    }),
  });
  const { data } = await response.json();
  console.log(data);
  return data;
}

export async function getSiteLogo() {
  const response = await fetch("https://guiadaspromocoes.com.br/graphql", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `{
        siteLogo {
          sourceUrl
        }
      }`,
    }),
  });
  const { data } = await response.json();
  console.log(data);
  return data;
}

export async function getOffersAcf() {
  const response = await fetch("https://guiadaspromocoes.com.br/graphql", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `{
        ofertas {
          edges {
            node {
              databaseId
              title
              ofertas {
                dataExpiracaoDaOferta
                descricao
                linkDaOferta
                imagemDeOferta {
                  node {
                    mediaItemUrl
                  }
                }
                categoria {
                  edges {
                    node {
                      ... on Categoria {
                        categoriaId
                        title
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }`,
    }),
  });
  const { data } = await response.json();
  console.log(data);
  return data;
}

export async function getCategoriesAcf() {
  const response = await fetch("https://guiadaspromocoes.com.br/graphql", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `{
        categorias {
          edges {
            node {
              databaseId
              title
            }
          }
        }
      }`,
    }),
  });
  const { data } = await response.json();
  console.log(data);
  return data;
}

export async function getSlidesAcf() {
  const response = await fetch("https://guiadaspromocoes.com.br/graphql", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `{
        slides {
          edges {
            node {
              databaseId
              title
              link
              slides {
                linkDaCampanha
                imagem {
                  node {
                    mediaItemUrl
                  }
                }
              }
            }
          }
        }
      }`,
    }),
  });
  const { data } = await response.json();
  console.log(data);
  return data;
}

export async function getHomepage() {
  const response = await fetch("https://guiadaspromocoes.com.br/graphql", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `{
        page(id: "60", idType: DATABASE_ID) {
          databaseId
          content
        }
      }`,
    }),
  });
  const { data } = await response.json();
  console.log(data);
  return data;
}

export async function getPage(pageUri) {
  const response = await fetch("https://guiadaspromocoes.com.br/graphql", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `{
        page(id: "${pageUri}", idType: URI) {
          databaseId
          title
          content
        }
      }`,
    }),
  });
  const { data } = await response.json();
  console.log(data);
  return data;
}
