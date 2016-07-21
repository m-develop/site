import $ from 'jquery';
import Search from './Search';

const Header = {
  init() {
    const self = this;

    self._bindEvent();
    self._initForHighlight(); // 初始化选中项

    let componentsData = JSON.parse(unescape(window.searchData.components));
    let docData = JSON.parse(unescape(window.searchData.doc));
    let searchData = docData;
    for (var i = 0; i < componentsData.length; i++) {
      let components = componentsData[i]['components'];
      for (var j = 0; j < components.length; j++) {
        searchData.push(components[j]);
      }
    }
    Search.init(docData);
  },

  _bindEvent() {
    const self = this;

    const inputEl = $('.searchInput input');
    const spanEl = $('.searchInput span');
    const underline = $('.underline');
    self.underline = underline;

    // event for input
    spanEl.on('click', () => {
      spanEl.hide();
      inputEl.focus();
    });

    inputEl.on('blur', (e) => {
      if (!e.target.value.length) spanEl.show();
    });
    inputEl.on('focus', () => spanEl.hide());

    // event for nav
    const widthArr = [];
    for (let i = 0, l = $('.menu li').length; i < l; i++) {
      const el = $($('.menu li')[i]);
      const width = el.width() + 40;
      widthArr.push(width);
    }
    self.widthArr = widthArr;

    $('.menu li').hover((e) => {
      if (e.type === 'mouseenter') {
        const target = $(e.currentTarget);
        const index = target.attr('data-index');
        const left = self.getLeft(widthArr, Number(index));
        const width = widthArr[Number(index)];
        self.toggerCheck($('.menu li'), index);
        underline
          .css('width', width)
          .css('left', left);
      }
    });

    $('.menu').mouseleave(() => {
      self._moveUnderline(self.index);
    });
  },

  // 初始化header的高亮
  _initForHighlight() {
    const self = this;
    const template = $('.container').attr('data-template');
    const elArr = $('.menu li');

    // for (let i = 0, l = elArr.length; i < l; i++) {
    //   if (i === 0 && !template) {
    //     self.index = 0;
    //     break;
    //   }
    //   const el = $(elArr[i]);
    //   if (el.attr('data-template') === template) {
    //     self.index = Number(el.attr('data-index'));
    //   }
    // }
    self.index = Number($('li.check').attr('data-index'));
    self._moveUnderline(self.index);
    self.underline
      .show()
      .addClass('move');
  },

  toggerCheck(el, index) {
    el.removeClass('check');
    $(el[Number(index)]).addClass('check');
  },

  _moveUnderline(index) {
    const self = this;
    const left = self.getLeft(self.widthArr, Number(index));
    const width = self.widthArr[index];
    self.toggerCheck($('.menu li'), index);
    self.underline
      .css('width', width)
      .css('left', left);
  },

  getLeft(arr, index) {
    let left = 0;
    for (let i = 0; i <= index - 1; i++) {
      left += arr[i];
    }
    return left;
  }
};

export default Header;
