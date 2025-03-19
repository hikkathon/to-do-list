// userController.js
import { createUser as createUserService, getUsers as getUsersService } from '../services/userService.js'

export const getUsers = async (req, res) => {
	try {
		const users = await getUsersService();
		res.json(users);
	} catch (error) {
		res.status(500).json({ error: 'Failed to fetch users' });
	}
};

export const createUser = async (req, res) => {
	try {
		const newUser = await createUserService(req.body);
		res.status(201).json(newUser);
	} catch (error) {
		res.status(500).json({ error: 'Failed to create user' });
	}
};