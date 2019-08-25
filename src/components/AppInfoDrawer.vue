<template>
  <div>
    <i class="el-icon-info drawer-btn" @click="showDrawer"></i>
    <el-drawer title="关于 / 帮助" custom-class="drawer-style" :visible.sync="drawer" direction="btt">
      <h4>如何使用?</h4>
      <p>拖拽 / 上传一张图片，程序会自动读取图片的两个主色并将其设置为背景。</p>
      <p>你可以点击下载按钮，下载背景图片；</p>
      <p>也可以点击复制该背景颜色对应的HTML代码。</p>
      <p class="copyright">
        Github:
        <a href="https://github.com/jwenjian/gradex" target="_blank">jwenjian/gradex</a>
      </p>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: true
    };
  },
  methods: {
    showDrawer() {
      this.drawer = true;
    }
  }
};
</script>

<style>
i.drawer-btn {
  position: absolute;
  right: 40px;
  bottom: 40px;
  cursor: pointer;
  font-size: 40px;
}
.drawer-style {
  max-height: 50%;
  text-align: center;
}
.el-drawer.btt {
  overflow: auto;
}
.copyright {
  text-align: right;
  color: grey;
  margin-right: 2em;
}
</style>