// userService.js
import { prisma } from '../../../config/db.js'

export const getUsers = async () => {
	return await prisma.user.findMany();
};

export const createUser = async (userData) => {
	// Проверка уникальности email (опционально)
	const existingUser = await prisma.user.findUnique({
		where: { email: userData.email },
	});
	if (existingUser) {
		throw new Error('Email already exists');
	}

	// Создание пользователя
	return await prisma.user.create({
		data: userData,
	});
};