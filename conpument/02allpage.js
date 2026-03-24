var all = {
  template: `
    <div class="container">
      <h3 class="text-danger">全部番剧(⚠️含🔞⚠️)</h3>
          <div class="jumbotron jumbotron-fluid bg-light p-2">
            <div class="container">
                <div>
                  <h6 class="h6">类型</h6>
                  <button
                    type="button"
                    :class="{'btn btn-primary': activeType === '', 'btn btn-light': activeType !== ''}"
                    @click="choseType('')"
                  >
                    所有动画
                  </button>
                  <button
                    type="button"
                     :class="{'btn btn-primary': activeType === 'tv', 'btn btn-light': activeType !== 'tv'}"
                    @click="choseType('tv')"
                  >
                    电视动画
                  </button>
                  <button
                    type="button"
                     :class="{'btn btn-primary': activeType === 'movie', 'btn btn-light': activeType !== 'movie'}"
                    @click="choseType('movie')"
                  >
                    动画电影
                  </button>
                  <button
                    type="button"
                     :class="{'btn btn-primary': activeType === 'ova', 'btn btn-light': activeType !== 'ova'}"
                    @click="choseType('ova')"
                  >
                    OVA
                  </button>
                  <button
                    type="button"
                     :class="{'btn btn-primary': activeType === 'special', 'btn btn-light': activeType !== 'special'}"
                    @click="choseType('special')"
                  >
                    特别篇
                  </button>
                  <button
                    type="button"
                     :class="{'btn btn-primary': activeType === 'ona', 'btn btn-light': activeType !== 'ona'}"
                    @click="choseType('ona')"
                  >
                    网络动画
                  </button>
                  <button
                    type="button"
                     :class="{'btn btn-primary': activeType === 'music', 'btn btn-light': activeType !== 'music'}"
                    @click="choseType('music')"
                  >
                    音乐动画
                  </button>
                  <button
                    type="button"
                     :class="{'btn btn-primary': activeType === 'cm', 'btn btn-light': activeType !== 'cm'}"
                    @click="choseType('cm')"
                  >
                    广告短片
                  </button>
                  <button
                    type="button"
                     class="btn btn-light"
                  >
                    图片剧（链接无效）
                  </button>
                  <button
                    type="button"
                     :class="{'btn btn-primary': activeType === 'tv_special', 'btn btn-light': activeType !== 'tv_special'}"
                    @click="choseType('tv_special')"
                  >
                    电视特别篇
                  </button>
                </div>
            </div>
          </div>
      </div>`,
  methods: {
    choseType(type) {
      this.activeType = type
      console.log(this.activeType);

      this.$emit("type-selected", type)
    },
  },
  data() {
    return {
      activeType: '' // 用于跟踪当前选中类型
    }
  }
}