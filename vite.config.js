/*
 * @Author: 王薪林 10655211+wang-xinlinlin@user.noreply.gitee.com
 * @Date: 2024-04-02 20:20:36
 * @LastEditors: 王薪林 10655211+wang-xinlinlin@user.noreply.gitee.com
 * @LastEditTime: 2024-04-06 20:27:27
 * @FilePath: /react/vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import react from "@vitejs/plugin-react";
import WindiCSS from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), WindiCSS()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
