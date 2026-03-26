FROM node:22-alpine

WORKDIR /app

# Install dependencies
COPY package*.json .
RUN npm install
# Copy the rest of the application code
COPY . .
# expose the port that Vite will run on
EXPOSE 5173
# O '---host' é necessário para permitir conexões de fora do navegador
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]