FORMAT: 1A
HOST: http://localhost:3000/

# Group Tools

Recursos relacionados às ferramentas (tools) disponíveis nesta API.

## Tool [/tools]

Segue os atributos de uma Tool:

- \_id
- title
- link
- description
- tags

### Listar Tools [GET]

- Response 200 (application/json)
  ```json
  [
    {
      "tags": ["web", "framework", "node", "http2", "https", "localhost"],
      "_id": "5cd483a025d93618693cd8c6",
      "title": "fastify",
      "link": "https://www.fastify.io/",
      "description": "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
      "**v": 0
    },
    {
      "tags": ["api", "json", "schema", "node", "github", "rest"],
      "_id": "5cd4844c25d93618693cd8c7",
      "title": "json-server",
      "link": "https://github.com/typicode/json-server",
      "description": "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
      "**v": 0
    }
  ]
  ```

### Cadastrar uma nova Tool [POST]

- Request (application/json)

```json
{
  "title": "json-server",
  "link": "https://github.com/typicode/json-server",
  "description": "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
  "tags": ["api", "json", "schema", "node", "github", "rest"]
}
```

- Response 200 (application/json)

  - Body

  ```json
  {
    "tags": ["api", "json", "schema", "node", "github", "rest"],
    "_id": "5cd4844c25d93618693cd8c7",
    "title": "json-server",
    "link": "https://github.com/typicode/json-server",
    "description": "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
    "__v": 0
  }
  ```

## Tool [/tools?tag={filtro}]

Filtra as Tools de acordo com a tag informada na URL. São listadas apenas as tagueadas com a informação informada na URL.

Parâmetros:

- filtro - a tag que será utilizada como filtro

### Filtrar Tools por tags [GET]

- Response 200 (application/json)
  ```json
  [
    {
      "tags": ["web", "framework", "node", "http2", "https", "localhost"],
      "_id": "5cd483a025d93618693cd8c6",
      "title": "fastify",
      "link": "https://www.fastify.io/",
      "description": "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
      "**v": 0
    },
    {
      "tags": ["api", "json", "schema", "node", "github", "rest"],
      "_id": "5cd4844c25d93618693cd8c7",
      "title": "json-server",
      "link": "https://github.com/typicode/json-server",
      "description": "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
      "**v": 0
    }
  ]
  ```

## Tool [/tools/{id}]

- Parâmetros:

    - _id

+ Response 200 (application/json)

        [
            {
                "_id": "5be353b5e7179a33cc154107",
                "title": "fastify",
                "link": "https://www.fastify.io/",
                "description": "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
                "tags": [
                    "web",
                    "framework",
                    "node",
                    "http2",
                    "https",
                    "localhost"
                ]
            }
        ]

### Deleta uma tool [DELETE]

- Response 200 (application/json)
  ````json
  {}
  ````
