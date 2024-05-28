import { getTreeList } from '@/api/demo/tag';
import { Space } from 'antd';
import React, { useEffect } from 'react';
import Page from './Page';
import Tree from './Tree';

export default function Tag() {
    useEffect(() => {
        onGetTreeList()
    }, []);

    const onGetTreeList = async () => {
        const res = await getTreeList();
        console.log('res', res);
    }

    return (
        <Space>
            <Tree />
            <Page />
        </Space>
    )
}