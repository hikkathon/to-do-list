// server.js
import app from './app.js'
import connectDB from './config/db.js'
import { PORT } from './config/env.js'

const startServer = async () => {
	await connectDB();
	app.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}`);
		console.log(`Local:   http://localhost:${PORT}/`);
	});
};

startServer();
