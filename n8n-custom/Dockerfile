FROM n8nio/n8n:latest

USER root

# Create isolated folder and install only the custom node there
RUN mkdir -p /home/node/.n8n/nodes \
  && npm install --prefix /home/node/.n8n/nodes -g --omit=dev @n8n/n8n-nodes-langchain \
  && chown -R node:node /home/node/.n8n/nodes

USER node

# Point n8n to the correct custom extensions path
ENV N8N_CUSTOM_EXTENSIONS="/home/node/.n8n/nodes"

# (optional but recommended)
ENV N8N_DISABLE_PRODUCTION_MAIN_PROCESS=true

