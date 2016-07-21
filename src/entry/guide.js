import '../common/lib';
import Aside from '../components/Aside';
import DocContainer from '../components/DocContainer';
import $ from 'jquery';

$(() => {
  Aside.init();
  DocContainer.init();
});
