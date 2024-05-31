# image-question-chat-app

make an app where the user uploads an image and then can ask a question about it. Here is the API you should use: 

{
  "openapi": "3.0.2",
  "info": {
    "version": "1.0.0",
    "title": "Kristian's Project",
    "contact": {
      "url": "https://buildship.com"
    },
    "description": "This API has been created using BuildShip."
  },
  "servers": [
    {
      "url": "https://okligg.buildship.run"
    }
  ],
  "paths": {
    "/image-chat": {
      "get": {
        "x-workflow-id": "eZukuv6NuhZlHjV4aCZE",
        "operationId": "get_image_chat",
        "responses": {
          "200": {
            "description": "The answer to the image question",
            "content": {
              "application/json": {
                "schema": {
                  "description": "The answer to the image question",
                  "title": "Output",
                  "type": "string"
                }
              }
            }
          }
        },
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "description": "Body of the request",
                "type": "object",
                "title": "Body"
              }
            }
          }
        }
      }
    }
  }
}

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App-Dev/image-question-chat-app.git
cd image-question-chat-app
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
