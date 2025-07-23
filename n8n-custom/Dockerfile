FROM n8nio/n8n:1.42.1

# Switch to root for global install
USER root

# Install the LangChain nodes globally
RUN npm install --global --production --omit=dev --no-optional --unsafe-perm \
    @n8n/n8n-nodes-langchain

# Clean cache
RUN npm cache clean --force

# Go back to node user
USER node
