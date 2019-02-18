/* istanbul ignore file */
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter : new Adapter() });

/**
 * fix: `matchMedia` not present, legacy browsers require a polyfill
 */
global.matchMedia = global.matchMedia || function () {
  return {
    matches        : false,
    addListener    : function () {},
    removeListener : function () {}
  };
};
