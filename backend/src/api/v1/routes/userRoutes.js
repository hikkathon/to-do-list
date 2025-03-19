// userRoutes.js
import { Router } from "express"
import { body, validationResult } from "express-validator"
import { createUser, getUsers } from '../controllers/userController.js'

const router = Router();

// Маршрут для получения пользователей
router.get('/users', getUsers);

// Маршрут для создания пользователя с валидацией
router.post('/users', [
	// Валидация полей
	body('name').notEmpty().withMessage('Name is required'),
	body('email').isEmail().withMessage('Invalid email'),
], (req, res, next) => {
	// Проверка результатов валидации
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	// Если ошибок нет, передаем управление в контроллер
	next();
}, createUser);

export default router;