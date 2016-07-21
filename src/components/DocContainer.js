import './docContainer.less';
import marked from 'marked';
import hljs from 'highlight.js';
import $ from 'jquery';

window.$ = $;

import Select from './Select';

function joinForUrl(url) {
  return `./${url}.html`;
}

const DocContainer = {
  init() {
    this.select = $('.docContainer select');
    this._showSelect();
    this._bindEvent();
    this._getJsonpData();
    this._renderNextPre();
    this._fixAnchor();
  },

  _showSelect() {
    const self = this;
    const el = $('.link.check');
    let data = el.attr('select');
    data = data ? unescape(data) : '';
    if (!data) return;
    data = JSON.parse(data);
    self.selectData = data;
    const defaultData = self.getDefaultData();

    const select = new Select({
      data,
      defaultData,
      callback: self.afterSelect.bind(self),
      position: {
        left: $('.title h3').width() + 16,
        top: 40
      },
      afterHide: function() {
        $('.title .choose i').removeClass('show');
      },
    });
    self.select = select;
    let spanStr;
    spanStr = self.selectData[defaultData[0]].label;
    let children = self.selectData[defaultData[0]]['children'];
    let i = 1;
    while (children) {
      spanStr += ' / ' + children[defaultData[i]].label;
      children = children[defaultData[i]]['children'];
      i++;
    }
    $('.title .choose')
      .show()
      .html(spanStr + '<i></i><a title="点击查看这是什么？"></a>');
  },

  afterSelect(arr) {
    const self = this;
    let children = self.selectData.slice(0);

    self.setLocalstorge(arr);
    let i = arr.shift();
    const urlArr = [];

    while (i) {
      urlArr.push(children[i]['value']);
      children = children[i]['children'];
      i = arr.shift();
    }
    let url = joinForUrl(urlArr.join('-'));
    go(url);
  },

  _bindEvent() {
    const self = this;

    $('.title .choose').on('click', () => {
      if ($('.title .choose i').hasClass('show')) {
        self.select.hide();
        $('.title .choose i').removeClass('show');
      } else {
        self.select.show();
        $('.title .choose i').addClass('show');
      }

    });

    $(window).scroll((e) => {
      let top = window.scrollY; // 页面滚动距离
      let height = '0';
      if (top > self.elTop) {
        height = 'auto';
      }
      $('.docAnchor')
        .css('opacity', 1)
        .css('height', height);
    });

    $('body').on('click', '.choose a',(e) => {
      e.preventDefault();
      go('/guide/choose-channel.html');
    });
  },

  getDefaultData() {
    const self = this;
    let path = location.pathname;
    path = path.match(/\/(\d.*)(\.html)/)[1];

    const index = path.indexOf('/');
    if (index) {
      path = path.substring(index + 1);
    }

    for (const i in self.selectData) {
      const data = self.selectData[i];
      const s = data.value;
      if (data.children) {
        for (const j in data.children) {
          const d = data.children[j];
          const string = s + '-' + d.value;
          if (string === path) {
            return [i, j];
          }
        }
      } else {
        if (s === path) return [i];
      }
    }
  },

  _getJsonpData() {
    const self = this;
    const data = $('.docContent').attr('data');
    if (!data || !data.length) return;
    $.ajax({
      url: 'http://registry.npm.taobao.org/' + data,
      dataType: 'jsonp',
      success(res) {
        let html = getMarkdowm(res.readme);
        $('.content')
          .css('opacity', 0)
          .html(html);
      }
    });
  },

  _renderNextPre() {
    const elArr = $('.link');
    const currentEl = $('.link.check')[0];
    const l = elArr.length;
    let preEl;
    let nextEl;
    let currentIndex;

    for (var i = 0; i < l; i++) {
      if (elArr[i] === currentEl) {
        currentIndex = i;
        break;
      }
    }

    preEl = elArr[currentIndex - 1];
    nextEl = elArr[currentIndex + 1];

    getBtn(nextEl, $('.next_pre'), 'right');
    getBtn(preEl, $('.next_pre'), 'left');
  },

  _fixAnchor() {
    const self = this;
    const el = $('.docContent ul')[0];
    if (($(el).find('li a').length === $(el).find('li').length) &&
      $('.content.markdown').children()[0].tagName === 'UL') {
      self.elTop = $(el).offset().top;
      const right = (window.innerWidth - 1120) / 2 + 24;
      $('.docAnchor')
        .css('right', right)
        .html($(el).html());
    }
  },

  setLocalstorge(arr) {
    const self = this;

    let value = self.selectData[arr[0]].value.split('-');
    value = value[value.length - 1];
    if (value[0] === 'h' || value[0] === 'r') {
      localStorage.tech = value;
    } else {
      localStorage.channel = value;
    }

    if (arr.length > 1) {
      value = self.selectData[arr[0]].children[arr[1]].value;
      if (value[0] === 'h' || value[0] === 'r') {
        localStorage.tech = value;
      } else {
        localStorage.channel = value;
      }
    }
  }
};

export default DocContainer;

function getBtn(el, parent, className) {
  if (el) {
    const url = $(el).attr('href');
    const selectData = unescape($(el).attr('select')) !== 'undefined' ? unescape($(el).attr('select')) : '';
    var ele = document.createElement('a');
    ele.setAttribute('class', className);
    ele.setAttribute('href', url);
    ele.setAttribute('select', selectData);
    $(ele).html('<i></i>' + el.innerHTML);
    parent.append(ele);
  }
  return '';
}

function getMarkdowm(readme) {
  const options = {
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
  };
  marked.setOptions(options);
  let markdownTpl = marked(readme);

  let el = $(markdownTpl);

  setTimeout(() => {
    $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
    const elArr = [];
    $('pre').each((i, block) => {
      let el = $(block).children('code');
      elArr.push(el.html());
    });

    for (let i in elArr) {
      let el = $($('pre')[i]);
      $('<div class="highlight"><pre>' + elArr[i] + '</pre></div>').replaceAll(el);
    }

    $('.content').css('opacity', 1);

  });

  return el;
}
