<!-- src/components/NoteEditor.vue -->
<template>
  <div class="editor-container">
    <textarea 
      v-model="content"
      @keydown.ctrl.s.prevent="handleSave"
      placeholder="输入内容 (Ctrl+S保存)"
    ></textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: ''
    }
  },
  methods: {
    handleSave() {
      this.$emit('save', this.content)
    }
  }
}
</script>

<style scoped>
.editor-container {
  padding: 20px;
  height: calc(100vh - 32px);
}

textarea {
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  resize: none;
  color: var(--text-color);
  font-size: 14px;
  line-height: 1.6;
}
</style>
