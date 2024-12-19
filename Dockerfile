FROM cypress/included:12.0.0
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
COPY . .
RUN npx cypress verify
CMD ["npx","cypress","run"]