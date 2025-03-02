# Используем официальный образ Node.js
FROM node:18

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код
COPY . .

# Собираем приложение
RUN npm run build

# Устанавливаем serve для запуска статических файлов
RUN npm install -g serve

# Открываем порт, который использует приложение
EXPOSE 3001

# Запускаем приложение
CMD ["serve", "-s", "build", "-l", "5000"]