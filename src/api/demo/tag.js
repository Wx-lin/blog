import request from '@/utils/request';

export const getTreeList = () => {
  return request({
    url: '/getWorkplace',
  });
};
