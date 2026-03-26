var target = {
  template: `
    <header class="container-fluid fixed-top m-0 p-0">
        <nav class="navbar navbar-expand-md navbar-light bg-light">
          <a
          class="navbar-brand" 
         @click="pagechange('home','https://api.jikan.moe/v4/top/anime?rating=pg13&')" 
            >
            <b class="text-warning">动漫预告片</b>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li :class="{'nav-item active':page==='home','nav-item':page!=='home'}">
                <a class="nav-link" 
                 @click="pagechange('home','https://api.jikan.moe/v4/top/anime?sfw=true&')"
                 href="#/top/anime"
                  >首页 <span class="sr-only">(current)</span></a
                >
              </li>
              <li :class="{'nav-item active':page==='all','nav-item':page!=='all'}">
                <a class="nav-link"
                 @click="pagechange('all','https://api.jikan.moe/v4/anime?sfw=false&')"
                 href="#/anime"
                >全部</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  分类
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a 
                  class="dropdown-item" href="#/seasons/now" 
                   @click="pagechange('seasons','https://api.jikan.moe/v4/seasons/now?')"
                  >本季番剧</a>
                  <a 
                  class="dropdown-item" href="#/seasons/sift" 
                  @click="pagechange('sift','https://api.jikan.moe/v4/seasons?')"
                  >按时间筛选番剧</a>
                  <div class="dropdown-divider"></div>
                  <a 
                  class="dropdown-item" href="#/seasons/upcoming"
                   @click="pagechange('upcoming','https://api.jikan.moe/v4/seasons/upcoming?')"
                  >即将开播</a>
                </div>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0" @submit.prevent="handleSearch">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="请输入关键字"
                aria-label="Search"
                v-model="searchtxt"
              />
              <button class="btn btn-info my-2 my-sm-0" type="submit">
                搜索
              </button>
            </form>
          </div>
        </nav>
      </header>`,
  methods: {
    pagechange(page, url) {
      this.page = page
      this.url = url;
      this.$emit("pagechange", {
        page,
        url,
        keyword: this.searchtxt
      })
    },
    handleSearch() {
      const keyword = this.searchtxt.trim()
      if (keyword) {
        const searchUrl = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(this.searchtxt)}&page=1`;
        this.pagechange('search', searchUrl)
        // console.log("搜索成功", searchUrl);
        this.searchtxt = ""
      }
      // console.log("kw",keyword);
    }
  },
  data() {
    return {
      page: "home",
      url: 'https://api.jikan.moe/v4/top/anime?rating=pg13&',
      searchtxt: ""
    };
  },
}