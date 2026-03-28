var sift = {
  props: ['seasonList', 'defaultYear', 'defaultSeason'],
  template: `
    <div class="container mt-2">
        <h3 class="text-danger">按时间筛选番剧</h3>
          <div class="jumbotron jumbotron-fluid bg-light p-2">
            <div class="container">
              <ul class="mb-0">
                <li>
                  <h4 class="h4">
                    年份 
                    <!-- 点击按钮切换展开/收起状态，动态修改按钮文字 -->
                    <button class="btn btn-primary" @click="toggleYearShow">{{isYearShow ? '▲' : '▼'}}</button>
                  </h4>
                  <!-- 用v-show控制年份按钮的显示/隐藏 -->
                  <button
                    type="button"
                    :class="{'btn btn-primary': siftyear === i.year, 'btn btn-light': siftyear !== i.year}"
                    v-for="(i,index) in seasonList"
                    @click="choseYears(i.year,false)"
                    v-show="isYearShow"
                  >
                    {{i.year}}
                  </button>
                </li>
                <li>
                  <h4 class="h4">
                    季节 
                    <button class="btn btn-primary" @click="toggleSeasonsShow">{{isSeasonsShow ? '▲' : '▼'}}</button>
                  </h4>
                  <button
                    type="button"
                    :class="{'btn btn-primary': siftseason === 'spring', 'btn btn-light': siftseason !== 'spring'}"
                    @click="choseSeasons('spring')"
                    v-show="isSeasonsShow"
                  >
                    春季(3-5月)
                  </button>
                  <button
                    type="button"
                    :class="{'btn btn-primary': siftseason === 'summer', 'btn btn-light': siftseason !== 'summer'}"
                    @click="choseSeasons('summer')"
                    v-show="isSeasonsShow"
                  >
                    夏季(6-8月)
                  </button>
                  <button
                    type="button"
                    :class="{'btn btn-primary': siftseason === 'fall', 'btn btn-light': siftseason !== 'fall'}"
                    @click="choseSeasons('fall')"
                    v-show="isSeasonsShow"
                  >
                    秋季(9-11月)
                  </button>
                  <button
                    type="button"
                    :class="{'btn btn-primary': siftseason === 'winter', 'btn btn-light': siftseason !== 'winter'}"
                    @click="choseSeasons('winter')"
                    v-show="isSeasonsShow"
                  >
                    冬季(12-2月)
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <h1 class="text-info p-0 m-0">{{curryYear}}</h1>
     </div>`,
  methods: {
    choseYears(year,fs) {
      this.siftyear = year;
      this.isYearShow = fs;
      this.curryYear = year;
      this.$emit('year-selected', year);
    },
    choseSeasons(season) {
      this.siftseason = season;
      this.$emit('season-selected', season);
    },
    // 新增：切换年份按钮的显示/隐藏状态
    toggleYearShow() {
      this.isYearShow = !this.isYearShow;
    },
    toggleSeasonsShow() {
      this.isSeasonsShow = !this.isSeasonsShow
    }
  },
  data() {
    return {
      siftyear: null,
      siftseason: null,
      // 控制年份/季节按钮显示/隐藏的状态，默认隐藏
      isYearShow: false,
      isSeasonsShow:false,
      // 显示当前年份
      curryYear:"",
    };
  },
  mounted() {
    if (this.defaultYear) {
      this.siftyear = this.defaultYear;
      this.curryYear = this.defaultYear
    }
    if (this.defaultSeason) {
      this.siftseason = this.defaultSeason;
    }
  },
}