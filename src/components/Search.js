import $ from 'jquery';
import './search.less'
window.$ = $;


let inputFlag = true;
let inputTime;
const Search = {
  init(data) {
    this.data = data;
    this.searchData = {
      keywords: [],
      urlArr: []
    };
    this.getSearchData(this.data);
    this._bindEvent();
  },

  _bindEvent() {
    const self = this;
    const searchEl = $('#J_search');

    // 如何判断他是最后一次输入
    searchEl.on('input', (e) => {
      const value = e.target.value;

      if (!inputFlag) {
        inputTime && clearTimeout(inputTime);
      }

      inputFlag = false;
      inputTime = setTimeout(() => {
        self.search(value);
        inputFlag = true;
      }, 300);
    });

    searchEl.on('focus', (e) => {
      const value = e.target.value;
      self.search(value);
      inputFlag = true;
    });

    $('body').on('click', (e) => {
      const target = e.target;
      if (!$.contains($('.searchInput')[0], target)) {
        $('.search-list')
          .removeClass('show')
          .addClass('hide');
        setTimeout(() => {
          $('.search-list').html('');
        }, 300);
      }
    });

    $(document).keydown((e) => {
      const keyCode = e.keyCode;
      const listEl = $('.search-list li');

      if (listEl.length === 0) return;
      switch (keyCode) {
        case 13:
          $('#J_search').val('');
          const url = $('.search-list .check a').attr('href');
          location.href = url;
        case 40:
          self._move(listEl, 'down');
          break;
        case 38:
          self._move(listEl, 'up');
          break;
        case 27:
        self._blur();
        default:
          return;
      }
    });
  },

  search(value) {
    const self = this;
    const renderData = [];
    value = value.toLocaleLowerCase();
    for (let i in self.searchData.keywords) {
      let keywords = self.searchData.keywords[i];
      keywords = keywords.toLocaleLowerCase();

      if (keywords.indexOf(value) > -1) {
        renderData.push({
          keyword: self.searchData.keywords[i],
          url: self.searchData.urlArr[i]
        });
      }
    }

    self.render(renderData);
  },

  render(data) {
    let tpl = data.map((d, i) => {
      let className = '';
      if (i === 0) className = 'check';
      return (
        '<li class="' + className + '"data-index="' + i + '">'  +
          '<a href=' + d.url + '>' +
            d.keyword +
          '</a>' +
        '</li>'
      )
    });
    $('.search-list')
      .removeClass('hide')
      .addClass('show')
      .html(tpl.join(''));
  },

  getSearchData(data) {
    const self = this;
    for (let i in data) {
      let d = data[i];

      if (d.children) {
        self.getSearchData(d.children);
      } else {
        self.searchData.keywords.push(d.title ? d.title : d.name);
        self.searchData.urlArr.push(d.url);
      }
    }
  },

  _move(listEl, type) {
    const currentEl = $('.search-list .check');
    const count = listEl.length - 1;
    const currentIndex = Number(currentEl.attr('data-index'));
    let nextIndex = currentIndex;
    let top = $('.search-list .check').offset().top;
    let containerTop = $('.search-list').scrollTop();

    listEl.removeClass('check');
    if (type === 'down' && currentIndex !== count) {
      nextIndex = currentIndex + 1;
      if (top > 148 + window.scrollY) {
        $('.search-list').scrollTop(containerTop + 34);
      }
    }

    if (type === 'up' && currentIndex !== 0)  {
      nextIndex = currentIndex - 1;
      if (top < 100 + window.scrollY) {
        $('.search-list').scrollTop(containerTop - 34);
      }
    }

    $(listEl[nextIndex]).addClass('check');
  },

  _blur() {
    $('.search-list')
      .removeClass('show')
      .addClass('hide');
    setTimeout(() => {
      $('.search-list').html('');
    }, 300);
    $('#J_search').blur();
  }
};

export default Search;
