/*
 * @Author: 王薪林 10655211+wang-xinlinlin@user.noreply.gitee.com
 * @Date: 2024-04-22 14:54:49
 * @LastEditors: 王薪林 10655211+wang-xinlinlin@user.noreply.gitee.com
 * @LastEditTime: 2024-04-24 12:52:46
 * @FilePath: /react-blog/react/src/components/ArticleTable/index.jsx
 * @Description:文章通用表格
 */
import { formatTime } from '@nbfe/tools';
import { Table, Typography } from 'antd';
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
    navigate('/article');
    console.log('row', row);
  };

  useEffect(() => {
    size(List) && setLoading(false);
  }, [List]);

  return (
    <>
      <Table rowKey="title" loading={loading} dataSource={List} columns={ArticleColumns} pagination={false} />
    </>
  );
}
