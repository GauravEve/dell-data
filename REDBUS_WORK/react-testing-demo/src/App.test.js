import { render, screen } from '@testing-library/react';
import App from './App';
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18'

Enzyme.configure({adapter: new Adapter})

describe("test case for app",()=>{
  it("should render button",()=>{
    const wrapper=shallow(<App/>)
    const buttonElement=wrapper.find('#ClickMe');
    expect(buttonElement).toHaveLength(1);
    expect(buttonElement.text()).toEqual('Click Me')
  });

  it("should increment counts by 1 when clicked",()=>{
    const wrapper=shallow(<App/>)
    const buttonElement=wrapper.find('#ClickMe');
    buttonElement.simulate('click');
    const text=wrapper.find('p').text();
    expect(text).toEqual('You clicked the button 1 times')
  });
})