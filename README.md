# Imaginou MCP and API example

[Imaginou](https://imaginou.com) creates AI product videos from product photos or a product link, with storyboard review before video generation. This repository contains a small **read-only** API client and configuration for connecting an MCP client. The hosted studio and production server are separate services; this is not their implementation.

## Connect an AI assistant

Remote MCP endpoint: **https://app.imaginou.com/mcp**

Transport: Streamable HTTP. Authentication: OAuth with PKCE and Dynamic Client Registration. Add this URL as a custom remote connector in a compatible assistant and sign in to your own Imaginou account. Supported clients and their setup interfaces may change; consult the client’s current documentation. A working custom connection does not imply approval in any public directory.

```json
{
  "mcpServers": {
    "imaginou": { "url": "https://app.imaginou.com/mcp" }
  }
}
```

Start with: “What workflows, languages and prices does Imaginou support?” Then ask to plan a product film from your photos. Creating a production consumes an order credit. Inspect the storyboard and explicitly approve before generating video. Review final playback before publishing. AI may alter product details.

## Run the API example

Requires Node.js 22 or later. No dependencies.

```sh
node client.mjs capabilities
```

For your account, productions or media, create a personal access token in [Connect AI](https://app.imaginou.com/#connect) with only the read scopes you need. Set `IMAGINOU_API_TOKEN` in your local environment, then run:

```sh
node client.mjs account
node client.mjs productions
node client.mjs media
```

Keep tokens out of source control, screenshots, chat logs and public issues. Media links are private, time-limited links: do not publish their output without reviewing it. Revoke unused connections in the studio.

## Links

- [Developer documentation](https://app.imaginou.com/developers)
- [Real product video examples](https://imaginou.com/guides/)
- [Privacy policy](https://imaginou.com/privacy/)
- [Terms](https://imaginou.com/terms/)
- [Support](https://imaginou.com/support/)
- Registry name: `com.imaginou/imaginou`

Three directions: silent showroom clips, presenter introduction and unexpected comedic campaign. English, French, Brazilian Portuguese and Spanish are supported. Generation and media streaming depend on studio availability. Prices and current capabilities are available from the public `capabilities` command and studio.

This example code is provided by AI Clark Development Inc. No customer data or service credentials are included.
