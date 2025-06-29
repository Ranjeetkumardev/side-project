FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and lock file
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the Vite React app
RUN npm run build

# Expose Vite preview port
EXPOSE 4173

# Run the production preview server
CMD ["npm", "run", "preview"]