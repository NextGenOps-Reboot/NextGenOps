FROM n8nio/n8n:1.42.1

# Install LangChain nodes (and any other community packages)
RUN npm install --production --omit=dev --no-optional --unsafe-perm \
    @n8n/n8n-nodes-langchain

# Clean npm cache (optional but recommended for smaller image size)
RUN npm cache clean --force
