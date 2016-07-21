import './aside.less';
import $ from 'jquery';

const Aside = {
  init() {
    const self = this;

    self._bindEvent();
    self._showHightMenu();
    self._setHeight();
  },

  _bindEvent() {
    const self = this;

    $('.aside li h4').on('click', (e) => {
      const target = $(e.currentTarget).parent();
      self.triggerOpenClose(target);
    });
  },

  _locateDependLocalstorge(e) {
    const self = this;
    e.preventDefault();

    const target = $(e.target);
    let url = target.attr('href');
    let selectData = target.attr('select');
    if (selectData && url.indexOf('guide') > -1) {
      selectData = JSON.parse(unescape(selectData));
      url = combineUrl(selectData);
    }
    go(url);
  },

  _showHightMenu() {
    const type = $('.container').attr('data-type');
    const elArr = $('.link');

    elArr.removeClass('check');

    for (let i = 0, l = elArr.length; i < l; i++) {
      const el = $(elArr[i]);
      const reg = new RegExp(type);
      if (reg.test(el.attr('href'))) {
        el.addClass('check');
      }
    }
  },

  triggerOpenClose(target) {
    if (target.children('h4').length) { // 可以折叠
      const container = $(target.children('div')[0]);

      if (target.hasClass('open')) {
        target.removeClass('open');
        container.css('height', 0);
      } else {
        const l = container.children('a').length;
        container.css('height', 40 * l);
        target.addClass('open');
      }
    }
  },

  _setHeight() {
    const elArr = $('.aside li div');
    elArr.map((i) => {
      const el = $(elArr[i]);
      const length = el.attr('data-length');
      if (length) {
        el.css('height', 40 * Number(length));
      }
      return i;
    })
  },
}

export default Aside;

function combineUrl(data) {
  let url = data[0].value.split('-');
  url.pop();
  let arr = [];

  for (let i in data) {
    let d = data[i];
    let url = d.value;
    let value = splitValue(url);
    let length = arr.length;
    arr = getUrlValue(arr, value);
    if (Number(i) === data.length - 1 && arr.length === 0) {
      d = data[0];
      value = splitValue(d.value);
      arr.push(value);
    }
    if (length === arr.length) continue;

    for (let j in d.children) {
      let v = d.children[j].value;
      arr = getUrlValue(arr, v);
    }
    if (d.children && arr.length === 1) arr[1] = d.children[0].value;
  }

  return ('/guide/' + url.join('-') + '/' + url.join('-') + '-' + arr.join('-') + '.html');
}

function splitValue(value) {
  let arr = value.split('-');
  return arr[arr.length - 1];
}

function getUrlValue(arr, value) {
  let channel = localStorage.channel;
  let tech = localStorage.tech;

  if (channel === value) arr.push(channel);
  if (tech === value) arr.push(tech);

  return arr;
}
