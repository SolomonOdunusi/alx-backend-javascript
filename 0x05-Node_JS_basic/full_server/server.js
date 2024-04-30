import express from 'express';
import router from './routes/index';

const app = express();
const port = 1245;

router(app);

app.listen(port, () => {
    console.log(`Server running at ${port}/`);
});

export default app;
