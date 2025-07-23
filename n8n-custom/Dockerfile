FROM n8nio/n8n:latest

USER root

# Create directory and init npm project
RUN mkdir -p /home/node/.n8n/nodes && \
    cd /home/node/.n8n/nodes && \
    npm init -y && \
    npm install --omit=dev --no-optional @n8n/n8n-nodes-langchain

# Fix permissions
RUN chown -R node:node /home/node/.n8n

USER node


