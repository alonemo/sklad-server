// подключение express
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import CategoriesRouter from "./routes/Categories.js";
import PositionRouter from "./routes/Position.js";

dotenv.config();

// создаем объект приложения
const app = express();
app.use(cors());
const port = process.env.PORT || 8080;

app.use(express.json());

app.use("/categories", CategoriesRouter);
app.use("/positions", PositionRouter);

// определяем обработчик для маршрута "/"
app.get("/", function (request, response) {
  // отправляем ответ
  response.send("<h2>Привет Express!</h2>");
});

// начинаем прослушивать подключения на запущенном порту
app.listen(port, () => {
  console.log(`server run, ${port} `);
});
