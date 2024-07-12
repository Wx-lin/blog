/*
 * @Author: 王薪林 10655211+wang-xinlinlin@user.noreply.gitee.com
 * @Date: 2024-04-22 14:54:49
 * @LastEditors: 王薪林
 * @LastEditTime: 2024-05-25 14:01:40
 * @FilePath: /blog/src/components/ArticleTable/index.jsx
 * @Description:文章通用表格
 */
import { formatTime } from '@nbfe/tools';
import { Card, Table, Typography } from 'antd';
import { size } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const { Link } = Typography;

export default function index({ List }) {
  const navigate = useNavigate();

  const ArticleColumns = [
    {
      title: '标题',
      dataIndex: 'title',
      render: (text, row) => <Link onClick={() => handleLinkToArticle(row)}>{text}</Link>,
    },
    {
      title: '分类',
      dataIndex: 'category',
    },
    {
      title: '创建时间',
      dataIndex: 'ctime',
      render: (text) => {
        return formatTime(text, 'YYYY-MM-DD HH:mm');
      },
    },
    {
      title: '更新时间',
      dataIndex: 'mtime',
      render: (text) => {
        return formatTime(text, 'YYYY-MM-DD HH:mm');
      },
    },
    {
      title: '字数',
      dataIndex: 'size',
    },
  ];
  const [loading, setLoading] = useState(true);

  const handleLinkToArticle = (row) => {
    const { category, name } = row;

    navigate(`/article?category=${category}&name=${name}`);
  };

  useEffect(() => {
    size(List) && setLoading(false);
  }, [List]);

  return (
    <>
      <Card title={['共', size(List), '篇文章'].join('')} bordered={true}>
        <Table rowKey="title" loading={loading} dataSource={List} columns={ArticleColumns} pagination={false} />
      </Card>
    </>
  );
}
