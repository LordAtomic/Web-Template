import { expect } from 'chai'
import React from 'react'
import { shallow, configure, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import MapComponent from "../../src/component/Map/mapComponent";

configure({adapter: new Adapter()});

it('renders the component', () => {
    const container = render(<MapComponent />);

    expect(container.firstChild).toMatchSnapshot()
});
