import './component.less';
import $ from 'jquery';
// import q from 'arale-qrcode';


const Component = {
  init() {
    this.renderComponents();
    this.bindEvent();
    this._setAsideHeight();
  },

  bindEvent() {
    const elArr = $('.componentsContainer li');
    $('ul').on('click', '.qr', (e) => {
      const target = $(e.target);
      const index = target.attr('data-index');
      const el = $(elArr[index]);

      el.toggleClass('check');
    })
  },

  renderComponents() {
    const conatainer = $('.componentsContainer');
    let componentsData = unescape(conatainer.attr('data'));
    componentsData = JSON.parse(componentsData);
    const title = conatainer.attr('data-title');
    let pathname = location.pathname;
    pathname = pathname.substring(pathname.indexOf('/component'));
    let obj = {};

    getData(componentsData);
    const data = obj[pathname];
    let tpl = '';
    let qrArr = [];
    for (var i in data) {
      let d = data[i];

      if (d.url.indexOf('@ali') > -1) {
        continue;
      }
      var qrnode = new AraleQRCode({
        render: 'table',
        correctLevel: 0,
        pdground: '#00aaee',
        text: d.url,
        size: 64,
      });
      qrArr.push(qrnode);
      let img = d.img ? d.img : 'https://os.alipayobjects.com/rmsportal/PVDvDRBgtjlyVpO.png';

      tpl += '<li>' +
          '<img src="' + img + '" alt="" />' +
          '<a class="components-name" target="blank" href="' + d.url + '">' + d.name + '</a>' +
          '<p class="components-introduce">' + d.introduce + '</p>' +
          '<div class="qr"></div>' +
          '<table class="qr-bg">' + $(qrnode).html() + '</table>' +
        '</li>';
    }

    $('.componentsContainer ul').html(tpl);

    function getData(data) {
      for (let i in data) {
        let d = data[i];
        if (d.children) {
          getData(d.children);
        } else {
          obj[d.url] = d.components;
        }
      }
    }
  },

  _setAsideHeight() {
    let asideH = $('.aside').height();
    let docH = document.getElementsByClassName('componentsContainer')[0].offsetHeight;
    let height = asideH > docH ? asideH : docH;
    $('.aside').css('height', height);
  },
};

export default Component;
