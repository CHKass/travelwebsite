import MobileMenu from './modules/MobileMenu';
import RevealOnscroll from './modules/RevealOnscroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

var mobileMenu = new MobileMenu();
new RevealOnscroll($(".feature-item"), "85%");
new RevealOnscroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader();
var modal = new Modal();
