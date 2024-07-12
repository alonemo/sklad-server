// подключение express
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

// создаем объект приложения
const app = express();
app.use(cors());
const port = process.env.PORT || 8080;

app.use(express.json());

// определяем обработчик для маршрута "/"
app.get("/", function (request, response) {
  // отправляем ответ
  response.send("<h2>Привет Express!</h2>");
});

// начинаем прослушивать подключения на запущенном порту
app.listen(port, () => {
  console.log(`server run, ${port} `);
});
