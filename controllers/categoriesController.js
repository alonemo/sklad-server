import { PrismaClient } from "@prisma/client";

// модель категории
const category = new PrismaClient().category;

// получение всех категорий

export const getAllCategory = async (req, res) => {
  try {
    const allCategory = await category.findMany();
    res.json(allCategory);
  } catch (error) {
    console.error(error); 
    res.status(500).json({ message: "Не удалось получить все категории" });
  }
};

// создание категории

export const createCategory = async (req, res) => {
  try {
    const categoryData = req.body;
    const newCategory = await category.create({
      data: categoryData,
    });
    res.status(201).json(newCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Не удалось создать категорию" });
  }
};

// редактирование категории

export const editCategory = async (req, res) => {
  try {
    const categoryId = Number(req.params.id);
    const categoryData = req.body;

    const editCategory = await category.update({
      where: { id: categoryId },
      data: categoryData,
    });
    res.status(200).json(editCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Не удалось изменить категорию" });
  }
};

// удаление категории

export const deleteCategory = async (req, res) => {
  try {
    const categoryId = Number(req.params.id);
    // тут не забыть поменять у всех позиций категорию на ДРУГОЕ или же выдавать ошибку пока есть позиции

    await category.delete({
      where: {
        id: categoryId,
      },
    });
    res.status(200).json({ message: "Категория удалена" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Не удалось удалить категорию" });
  }
};
