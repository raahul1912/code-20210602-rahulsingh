import { createServer } from 'http';
import { config } from 'dotenv';
import { resolve } from 'path';
/**
 * Load Env
 */
config({ path: resolve(__dirname, '../.env') });

/**
 * Load App
 */
import app from './app';

const server = createServer(app);
const port: number = Number(process.env.PORT || 3000);

(async () => {
  try {
    server.listen(port, () => {
      console.info(`Server is running on ${port}`);
    });

  } catch (e) {
    console.error(`Unable to connect to the server`, e);
    process.exit(1);
  }
})();
