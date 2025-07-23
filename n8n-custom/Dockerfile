FROM n8nio/n8n:latest

USER root

# Install the custom node into the global node_modules
RUN npm install -g --omit=dev @n8n/n8n-nodes-langchain

# Fix ownership
RUN chown -R node:node /usr/local/lib/node_modules

USER node


