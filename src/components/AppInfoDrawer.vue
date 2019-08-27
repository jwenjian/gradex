<template>
  <div>
    <i class="el-icon-info drawer-btn" @click="showDrawer"></i>
    <el-drawer
      custom-class="drawer-style"
      :visible.sync="drawer"
      direction="btt"
      :show-close="false"
    >
      <div slot="title">
        <span>{{ $t('drawer.title') }}</span>
        <el-dropdown class="locale-dropdown" @command="setAppLocale">
          <span class="dropdown-title">
            <span>{{ $t('locale.name') }}</span>
            <font-awesome-icon icon="language" class="lang-icon" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="zh">简体中文</el-dropdown-item>
            <el-dropdown-item command="en">English</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <h4>{{ $t('drawer.how-to-use.title')}}</h4>
      <p>{{ $t('drawer.how-to-use.p1') }}</p>
      <p>{{ $t('drawer.how-to-use.p2') }}</p>
      <p>{{ $t('drawer.how-to-use.p3') }}</p>
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
    setAppLocale(lang) {
      this.$i18n.locale = lang;
    },
    showDrawer() {
      this.drawer = true;
    }
  }
};
</script>

<style>
.lang-icon {
  margin-left: 0.5em;
}
.dropdown-title {
  text-decoration-line: underline;
  cursor: pointer;
  color: #409eff;
  font-weight: bold;
}
.locale-dropdown {
  margin-left: 2em;
}
i.drawer-btn {
  position: absolute;
  right: 40px;
  bottom: 40px;
  cursor: pointer;
  font-size: 40px;
}
.drawer-style {
  max-height: 50%;
  min-height: 40%;
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