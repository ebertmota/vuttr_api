FORMAT: 1A

# VUTTR

Vuttr is a simple API allowing consumers to store your most used tools to make sure that you will remember them.

<br />


## Retrieve a Message [GET]
Retrieve a message to test api status

+ Response 200 (application/json)

            {
                "message": "Hello VUTTR lives!"
            }

<br />
<br />

# Tools [/tools]

## List all tools [GET]
List all tools registered in application


+ Response 200

      {
      "title": "Hotel",
      "link": "https://github.com/typicode/hotel",
      "description": "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
      "tags": [
        [
          "reactjs",
          "nodejs",
          "javascript"
        ]
      ],
      "id": "bab1f691-0f3f-4c10-9044-401c5bf5c521"
      }

  ### Or search tools by tag name [/tools/{?tag}]
      + Parameters

          + tag: abc123 (string) - Name of tag


<br />
<br />

## Create a Tool [POST]
Create a new tool, providing 'title', 'link', 'description' and 'tags' values.

+ Response 201 (application/json)

    + Body

            {
              "title": "hotel",
              "link": "https://github.com/typicode/hotel",
              "description": "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
              "tags": [
                "reactjs",
                "node.js"
              ]
            }

    + Schema

            {
              "type": "object",
              "properties": {
                "title": {
                  "type": "string"
                },
                "link": {
                  "type": "string"
                },
                "description": {
                  "type": "string"
                },
                "tags": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              }


            }
<br />
<br />

## Delete a Tool [/tools/{id}]    [DELETE]
Delete a single tool data using its unique identifier.

    + Parameters

        + id: uuid (required) - Unique identifier for a tool

+ Response 204

