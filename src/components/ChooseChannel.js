import './chooseChannel.less';
import $ from 'jquery';

const ChooseChannel = {
  init() {
    this._bindEvent();
  },

  _bindEvent() {
    $('.channel li a').on('click', (e) => {
      e.preventDefault();
      let target = $(e.target);
      let data = target.attr('data').split('-');
      localStorage.setItem('channel', data[0]);
      localStorage.setItem('tech', data[1]);
      let link = '/guide/0-introduce.html';

      const index = location.href.indexOf('_site');
      const locationUrl = location.href.substring(0, index) + '_site'
      if (link[0] === '/' && index !== -1) {
        link = locationUrl + link;
      }
      location.href = link;
    });
  },
};

export default ChooseChannel;
