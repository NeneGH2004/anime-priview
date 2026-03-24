var sift = {
  props: ['seasonList', 'defaultYear', 'defaultSeason'],
  template: `
    <div class="container">
        <h3 class="text-danger">按时间筛选番剧</h3>
          <div class="jumbotron jumbotron-fluid bg-light p-2">
            <div class="container">
              <ul class="mb-0">
                <li>
                  <h6 class="h6">年份</h6>
                  <button
                    type="button"
                    :class="{'btn btn-primary': siftyear === i.year, 'btn btn-light': siftyear !== i.year}"
                    v-for="(i,index) in seasonList"
                    @click="choseYears(i.year)"
                  >
                    {{i.year}}
                  </button>
                </li>
                <li>
                  <h6 class="h6">季节</h6>
                  <button
                    type="button"
                    :class="{'btn btn-primary': siftseason === 'spring', 'btn btn-light': siftseason !== 'spring'}"
                    @click="choseSeasons('spring')"
                  >
                    春季(3-5月)
                  </button>
                  <button
                    type="button"
                    :class="{'btn btn-primary': siftseason === 'summer', 'btn btn-light': siftseason !== 'summer'}"
                    @click="choseSeasons('summer')"
                  >
                    夏季(6-8月)
                  </button>
                  <button
                    type="button"
                    :class="{'btn btn-primary': siftseason === 'fall', 'btn btn-light': siftseason !== 'fall'}"
                    @click="choseSeasons('fall')"
                  >
                    秋季(9-11月)
                  </button>
                  <button
                    type="button"
                    :class="{'btn btn-primary': siftseason === 'winter', 'btn btn-light': siftseason !== 'winter'}"
                    @click="choseSeasons('winter')"
                  >
                    冬季(12-2月)
                  </button>
                </li>
              </ul>
            </div>
          </div>
     </div>`,
  methods: {
    choseYears(year) {
      this.siftyear = year;
      this.$emit('year-selected', year);
    },
    choseSeasons(season) {
      this.siftseason = season;
      this.$emit('season-selected', season);
    }

  },
  data() {
    return {
      siftyear: null,
      siftseason: null,
    };
  },
  // 2. 新增mounted钩子，初始化默认选中状态
  mounted() {
    // 初始化年份（优先用父组件传递的默认值）
    if (this.defaultYear) {
      this.siftyear = this.defaultYear;
    }
    // 初始化季节（优先用父组件传递的默认值）
    if (this.defaultSeason) {
      this.siftseason = this.defaultSeason;
      // console.log(this.defaultSeason);
    }
  },
}
