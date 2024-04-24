/*
 * @Author: 王薪林 10655211+wang-xinlinlin@user.noreply.gitee.com
 * @Date: 2024-04-22 14:54:49
 * @LastEditors: 王薪林 10655211+wang-xinlinlin@user.noreply.gitee.com
 * @LastEditTime: 2024-04-24 10:15:11
 * @FilePath: /react-blog/react/src/components/ArticleTable/index.jsx
 * @Description:文章通用表格
 */
import React from 'react';
import { Table } from 'antd';
import { Typography } from 'antd';
import { formatTime } from '@nbfe/tools';

const { Link } = Typography;

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

const handleLinkToArticle = (row) => {
  console.log('row', row);
};

export default function index({ List }) {
  return (
    <>
      <Table rowKey="title" dataSource={List} columns={ArticleColumns} pagination={false} />;
    </>
  );
}
