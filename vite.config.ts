import type { UserConfig } from 'vite';
import { resolve } from 'path';

const pathResolve = function (dir: string) {
    return resolve(__dirname, dir);
};

const viteConfig: UserConfig = {
    alias: {
        '/@/': pathResolve('src')
    },
    proxy: {
        '/api': {
            target: 'http://localhost:8000'
        }
    }
};

export default viteConfig;
