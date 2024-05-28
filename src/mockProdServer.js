import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';

import testMock from '../mock/treelist';

export const setupProdMockServer = () => {
    createProdMockServer([...testMock])
}