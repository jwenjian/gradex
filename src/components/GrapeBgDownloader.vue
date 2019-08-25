<template>
  <div class="gradient-wrap" ref="container">
    <el-upload
      class="avatar-uploader"
      drap
      action
      :show-file-list="false"
      :on-change="onFileChange"
      :auto-upload="false"
      accept="image/jpeg,image/png,application/x-bmp,image/gif"
    >
      <template v-if="imageUrl">
        <img :src="imageUrl" class="avatar" />
      </template>
      <template v-else>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          将图片文件拖到此处，或
          <em>点击上传</em>
        </div>
        <div class="el-upload__tip" slot="tip">支持：.jpg / .png / .bmp / .gif 格式</div>
      </template>
    </el-upload>
    <el-button v-show="imageUrl" @click="downloadBg" class="download-btn">下载背景图片</el-button>
    <el-button v-show="imageUrl" @click="showHTMLCode" type="text" class="download-btn">复制HTML代码</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: "",
      filename: ""
    };
  },
  methods: {
    // eslint-disable-next-line
    onFileChange(file, fileList) {
      let name = file.name;
      this.filename = name.substring(0, name.lastIndexOf("."));
      this.imageUrl = URL.createObjectURL(file.raw);
      setTimeout(() => {
        // eslint-disable-next-line
        Grade(document.querySelectorAll(".gradient-wrap"));
      }, 200);
    },
    showHTMLCode() {
      // linear-gradient(135deg, rgb(242, 155, 153) 0%, rgb(60, 1, 146) 75%)
      let bg = this.$refs["container"].style.backgroundImage;

      if (!bg) {
        this.$message.error("无法获取背景色， 请刷新重试");
        return;
      }

      let l = screen.width <= screen.height ? screen.width : screen.height;

      this.$alert(
        `<div style="height: ${l}px; background-image: ${bg}"></div>`,
        "HTML代码",
        {
          confirmButtonText: "确定",
          // eslint-disable-next-line
          callback: action => {}
        }
      );
    },
    downloadBg() {
      // linear-gradient(135deg, rgb(242, 155, 153) 0%, rgb(60, 1, 146) 75%)
      let bg = this.$refs["container"].style.backgroundImage;

      if (!bg) {
        this.$message.error("无法获取背景色， 请刷新重试");
        return;
      }

      bg = bg.replace("linear-gradient", "");

      let startColor = bg.substring(bg.indexOf("rgb("), bg.indexOf("0%"));
      let endColor = bg.substring(bg.lastIndexOf("rgb("), bg.indexOf("75%"));

      let l = screen.width <= screen.height ? screen.width : screen.height;

      let c = document.createElement("canvas");
      c.width = l;
      c.height = l;
      c.style.display = "none";

      let ctx = c.getContext("2d");
      let grd = ctx.createRadialGradient(0, 0, 0, l / 16, l / 16, l);
      grd.addColorStop(0, startColor);
      grd.addColorStop(1, endColor);
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, l, l);

      this.saveAsImg(this.filename + "_bg.png", c.toDataURL());
    },
    saveAsImg(fileName, url) {
      // from echarts
      // https://github.com/apache/incubator-echarts/blob/master/src/component/toolbox/feature/SaveAsImage.js
      const a = document.createElement("a");
      a.download = fileName;
      a.href = url;
      const ua = navigator.userAgent;
      // IE 11 Trident/7.0; rv:11.0
      const isIE =
        ua.match(/MSIE\s([\d.]+)/) || ua.match(/Trident\/.+?rv:(([\d.]+))/);
      const isEdge = ua.match(/Edge\/([\d.]+)/);
      // firefox || chrome
      if (typeof MouseEvent === "function" && !isIE && !isEdge) {
        var evt = new MouseEvent("click", {
          view: window,
          bubbles: true,
          cancelable: false
        });
        a.dispatchEvent(evt);
      } else {
        if (window.navigator.msSaveOrOpenBlob) {
          var bstr = atob(url.split(",")[1]);
          var n = bstr.length;
          var u8arr = new Uint8Array(n);
          while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
          }
          var blob = new Blob([u8arr]);
          window.navigator.msSaveOrOpenBlob(blob, fileName);
        } else {
          var html =
            "" +
            '<body style="margin:0;">' +
            '<img src="' +
            url +
            '" style="max-width:100%;" title="' +
            fileName +
            '" />' +
            "</body>";
          var tab = window.open();
          tab.document.write(html);
        }
      }
    }
  }
};
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  height: 300px;
  width: 300px;
  margin-top: 10%;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 300px;
  height: 300px;
  display: block;
}
.gradient-wrap {
  height: 100%;
  text-align: center;
}
</style>