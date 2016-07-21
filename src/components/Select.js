import './select.less';
import $ from 'jquery';
window.$ = $;

// 拼接模板
function joinTpl(dataIndex, className, label) {
  className += ' select-list'
  return `<li title="${label}" data-index="${dataIndex}" class="${className}">${label}</li>`;
}

function joinToSuper(tpl) {
  return `<ul>${tpl}</ul>`;
}

// 得到模板数据
function getTpl(arr, checkNum, superId) {
  const tplArr = arr.map((d, i) => {
    let className = '';
    let dataIndex = i;
    if (i == checkNum) className = 'check';
    if (superId) {
      const superIdArr = superId.split('-');
      superIdArr.push(i);
      dataIndex = superIdArr.join('-');
    }
    return joinTpl(dataIndex, className, d.label);
  });

  return joinToSuper(tplArr.join(''));
}

function getDefaultTpl(data, defaultData) {
  let tpl;
  let children = data;
  let i = defaultData.shift();
  const arr = [];

  while (children) {
    if (i) {
      tpl += getTpl(children, i, arr.join('-'));
      children = children[i]['children'];
      arr.push(i);
      i = defaultData.shift();
    } else {
      tpl += getTpl(children, null, arr.join('-'));
      children = undefined;
    }
  }
  tpl = tpl.replace(/undefined/g, '');
  return tpl;
}

// 点击后加入check
function toggerCheck(target) {
  const el = $(target).siblings();
  el.removeClass('check');
  $(target).addClass('check');
}

function Select(config) {
  this.defaultData = config.defaultData;
  this.callback = config.callback;
  this.data = config.data;
  this.position = config.position;
  this.afterHide = config.afterHide;

  this.container = $('.select-container');
  this.render();
  this._bindEvent();
}

Select.prototype = {
  render() {
    const self = this;
    const defaultData = self.defaultData.slice(0);

    self.tpl = getDefaultTpl(self.data, defaultData);
    self.container
      .html(self.tpl)
      .css('top', self.position.top)
      .css('left', self.position.left);
  },

  _bindEvent() {
    const self = this;

    self.container.on('click', 'li', (e) => {
      const indexArr = $(e.target).attr('data-index').split('-');
      const arr = indexArr.slice(0);
      toggerCheck(e.target);
      const tpl = getDefaultTpl(self.data, indexArr);
      self.container.html(tpl);

      self.afterSelect(arr);
    });

    $('body').on('click', (e) => {
      const target = e.target;

      if ($(target).hasClass('select-list') || target.className === 'choose') { // 如果是在节点里的话，不管
        return;
      } else { // 不在里面就消失
        self.hide();
      }
    });
  },

  afterSelect(arr) {
    const self = this;

    const a = arr.slice(0);
    let i = arr.shift();
    let children = self.data;

    if (!children[i].children) {
      self.callback(a);
      return;
    }

    while (i) {
      children = children[i];
      i = arr.shift();
    }

    if (!children) self.callback(a);
  },

  show() {
    $(this.container)
      .removeClass('hide')
      .css('height', 'auto')
      .addClass('show');
  },

  hide() {
    const self = this;
    $(this.container)
      .removeClass('show')
      .addClass('hide')
      .css('height', 0);
    self.afterHide();
  }
}

export default Select;
