<!-- src/App.vue -->
<template>
  <n-config-provider :theme="darkTheme">
    <n-layout style="height: 100vh">
      <!-- 顶部拖拽区 -->
      <div class="drag-area" @dblclick="toggleMaximize"></div>

      <n-layout has-sider>
        <!-- 侧边栏 -->
        <n-layout-sider
          bordered
          collapse-mode="width"
          :collapsed-width="64"
          :width="240"
          show-trigger
        >
          <n-menu :options="menuItems" />
        </n-layout-sider>

        <!-- 主内容 -->
        <n-layout-content>
          <NoteEditor @save="handleSave" />
        </n-layout-content>
      </n-layout>
    </n-layout>
  </n-config-provider>
</template>

<script>
import { darkTheme } from "naive-ui";
import NoteEditor from "./components/NoteEditor.vue";

export default {
  components: { NoteEditor },
  data() {
    return {
      darkTheme,
      menuItems: [
        { label: "文件", key: "file", icon: "document" },
        { label: "编辑", key: "edit", icon: "create" },
      ],
      isDark: true,
    };
  },
  computed: {
    currentTheme() {
      return this.isDark ? darkTheme : null;
    },
  },
  methods: {
    toggleMaximize() {
      window.__TAURI__.window.getCurrent().toggleMaximize();
    },
    async handleSave(content) {
      const result = await window.__TAURI__.invoke("save_content", { content });
      this.$message.success(result);
    },
    toggleTheme() {
      this.isDark = !this.isDark;
      window.__TAURI__.invoke("set_theme", { dark: this.isDark });
    },
  },
};
</script>

<style>
.drag-area {
  -webkit-app-region: drag;
  height: 32px;
  background: rgba(255, 255, 255, 0.1);
}
</style>
