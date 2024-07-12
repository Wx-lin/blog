import ArticleTable from '@/components/ArticleTable/index.jsx';
import { formatTime } from '@nbfe/tools';
import { Button, Space, Upload } from 'antd';
import React from 'react';

const XLSXHEADER = ['标题', '分类', '创建时间', '更新时间', '字数'];

export default function JavaScript({ data }) {
  const handleExportClick = async () => {
    const XLSX = await import('https://cdn.sheetjs.com/xlsx-0.20.2/package/xlsx.mjs');
    const tableData = data.map((v) => [v.title, v.category, formatTime(v.ctime), formatTime(v.mtime), v.size]);

    const elsxData = [XLSXHEADER, ...tableData];

    // 创建工作表
    const worksheet = XLSX.utils.aoa_to_sheet(elsxData);

    // 创建工作薄
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet);

    XLSX.writeFile(workbook, '文章.xlsx');
  };

  const uploadConfig = {
    maxCount: 1,
    beforeUpload: () => false,
    onChange: ({ file }) => handleImport(file),
  };

  const handleImport = async (file) => {
    const XLSX = await import('https://cdn.sheetjs.com/xlsx-0.20.2/package/xlsx.mjs');
    const render = new FileReader();

    render.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    };

    render.readAsArrayBuffer(file);
  };
  return (
    <>
      <Space>
        <Upload {...uploadConfig}>
          <Button type="primary">导入</Button>
        </Upload>

        <Button type="primary" onClick={handleExportClick}>
          导出
        </Button>
      </Space>
      <div className="p-10px"></div>
      <ArticleTable List={data} />;
    </>
  );
}
