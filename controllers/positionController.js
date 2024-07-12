import { PrismaClient } from "@prisma/client";

const positionModel = new PrismaClient().position;

// получение всех позиций

export const getAllPositions = async (req, res) => {
  try {
    const allPosition = await positionModel.findMany();
    res.json(allPosition);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Не удалось получить все позиции" });
  }
};

// получение позиции по id

export const getPositionById = async (req, res) => {
  try {
    const positionId = Number(req.params.id);
    const position = await positionModel.findUnique({
      where: {
        id: positionId,
      },
    });
    res.json(position);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Не удалось получить позицию" });
  }
};

// создание позиции
export const createPosition = async (req, res) => {
  try {
    const positionData = req.body;
    const newPosition = await positionModel.create({ data: positionData });
    res.json(newPosition);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Не удалось создать позицию" });
  }
};

// удаление позиции

export const deletePosition = async (req, res) => {
  try {
    const positionId = Number(req.params.id);
    await positionModel.delete({
      where: {
        id: positionId,
      },
    });
    res.status(200).json({ message: "Позиция удалена" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Не удалось удалить позицию" });
  }
};
