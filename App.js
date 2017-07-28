import MobileMenu from './modules/MobileMenu';
import RevealOnscroll from './modules/RevealOnscroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';

var mobileMenu = new MobileMenu();
new RevealOnscroll($(".feature-item"), "85%");
new RevealOnscroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader();
