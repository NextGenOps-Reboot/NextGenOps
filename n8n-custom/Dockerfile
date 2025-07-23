FROM n8nio/n8n:1.42.1

# Create the required directory
RUN mkdir -p /home/node/.n8n/nodes

# Install the LangChain community module in the right path
RUN cd /home/node/.n8n/nodes && \
    npm install --production --omit=dev --no-optional --unsafe-perm \
    @n8n/n8n-nodes-langchain

# Set correct ownership (important)
RUN chown -R node:node /home/node/.n8n

# Optional: reduce image size
RUN npm cache clean --force
