import 'babel-polyfill'
import 'raf/polyfill'

import { shallow, render, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16' // eslint-disable-line import/no-extraneous-dependencies

configure({ adapter: new Adapter() })

global.shallow = shallow
global.render = render
global.mount = mount
