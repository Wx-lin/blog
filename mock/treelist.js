const testList = ["测试数据", "假的"]

export default [
    {
        url: '/api/getWorkplace', 
        type: 'get',
        response() {
            return {
                code: 200,
                mas: 'success',
                data: {
                    testList
                }
            }
        }
    }
];