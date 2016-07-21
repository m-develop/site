import './common.less';
import './markdown.less';
import '../components/header.less';
import Header from '../components/Header.js';
import '../components/footer.less';
import $ from 'jquery';

$(() => {
  Header.init();
  if (location.href.indexOf('export-site') > -1) {
    const elArr = $('a[href]');
    for (let i = 0; i < elArr.length; i++) {
      let el = $(elArr[i]);
      let url = el.attr('href');
      if (url[0] === '/') {
        let index = location.href.indexOf('export-site');
        let link = location.href.slice(0, index) + 'export-site/';
        url = link + url;
        el.attr('href', url);
      }
    }
  }
});
