import { render, screen } from "@testing-library/react"
import { Greet } from "./Greet"

//Greet should render the text hello only if a name is passed through the component.
//It should render hello followed by the name

//describe is used for grouping test together and .only and .skip is also used with describe 
// describe can we nested inside one another

describe('Greet', () => {
    //test for rendering a component
test('render correctly', () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
    // toBeInTheDocument is a custom matcher func with the package jest-dom it is available on jest doc
})

// test for hello should only render when name is passed
test('render with a name', () => {
    render(<Greet name="Prateek"/>);
    const textElement = screen.getByText('Hello Prateek');
    expect(textElement).toBeInTheDocument();
})
})


// ** test.only tells jest to pickup that particluar test only ignore ever other
// ** test.skip Skips that partiular test in project and run every other test

// test.only('Greet render with a name', () => {
//     render(<Greet name="Prateek"/>);
//     const textElement = screen.getByText('Hello Prateek');
//     expect(textElement).toBeInTheDocument();
// })


// test.skip('Greet render with a name', () => {
//     render(<Greet name="Prateek"/>);
//     const textElement = screen.getByText('Hello Prateek');
//     expect(textElement).toBeInTheDocument();
// })