/**library testing*/
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
/**Our component */
import { Blog } from '../Blog';
import { Togglable } from '../Togglable';
import { CreateBlog } from '../CreateBlog';


describe('Render component ShowComponent', () => {
    let component
    let blog
    let addLike
    beforeEach(() => {
        blog = {
            title: 'Juan de dios',
            author: 'Pepe mujica',
            likes: 10,
            url: 'www.comocmo.com'
        }
        addLike = jest.fn()
        component = render(<BlogComponent blog={blog} addLike={addLike} />);

    })

    test('Componen render title of the blog', () => {
        expect(component.container).toHaveTextContent('Juan de dios');
        expect(component.container).toHaveTextContent('Pepe mujica');
    })

    test('Test button click like', () => {
        const button = component.getByText('like')
        fireEvent.click(button)
        expect(addLike).toHaveBeenCalledTimes(1)
        // expect(addLike.mock.calls).toHaveLength(1)
    })
})


describe('Togglable component', () => {
    let component
    beforeAll(() => {
        component = render(
            <TogglableComponent>
                <div className='testDiv' />
            </TogglableComponent>
        )
    });

    test('', () => {
        expect(component.container.querySelector('.testDiv')).toBeDefined()
    })

})

// describe('<BlogsComponent> Create new blog', () => {

//     test('Test input Author',()=>{
        // const component = render(<BlogsComponent/>)
        // const author = component.container.querySelector('#author')
//     })

// })


// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });