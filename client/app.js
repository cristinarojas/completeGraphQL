const GRAPHQL_URL = "http://localhost:9000/";

async function fetchGreeting() {
  const response = await fetch(GRAPHQL_URL, {
    // HTTP Request
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    // To convert Javascript object to JSON
    body: JSON.stringify({
      query: `
        query {
            greeting
        }
        `,
    }),
  });

  // HTTP Response
  const { data } = await response.json();

  return data;
}

fetchGreeting().then(({ greeting }) => {
  const title = document.querySelector("h1");
  title.textContent = greeting;
});
