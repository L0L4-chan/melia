FROM cypress/included
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
CMD ["npx","cypress","run"]