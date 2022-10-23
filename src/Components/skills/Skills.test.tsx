import { render, screen, logRoles } from '@testing-library/react'
import { Skills } from './Skills'

describe('Skills', () => {
 //getByRole and different getBy functions are a part of getBy query method
  //queryByRole and different queryBy functions are a part of queryBy query method
  //findByRole and different findBy functions are a part of findBy query method

  const skills = ['HTML', 'CSS', 'JavaScript']
  test('renders correctly', () => {
    render(<Skills skills={skills} />)
    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument()
  })
  
  //tohavelength checks the length of array we are mocking and pass in components eg skills array at top
  //getAllByrole takes multiple elements of that role
  test('renders a list of skills', () => {
    render(<Skills skills={skills} />)
    const listItemElements = screen.getAllByRole('listitem')
    expect(listItemElements).toHaveLength(skills.length)
  })

  test('renders Login button', () => {
    render(<Skills skills={skills} />)
    const loginButton = screen.getByRole('button', { name: 'Login' })
    expect(loginButton).toBeInTheDocument()
  })

 //if you run this by get By role you will get an error in terminal.. coz if getBy queries don't find an element they throws error
 // use queryBy instead coz it Returns the matching node for a query, and return null if no elements match
 // Useful for asserting an element that is not present... Throws an error if more than one match is found
  test('Start Learning button is not rendered', () => {
    render(<Skills skills={skills} />)
    const startLearningButton = screen.queryByRole('button', {
      name: 'Start learning',
    })
    expect(startLearningButton).not.toBeInTheDocument()
  })
   
  //it will fail coz getBy role don't wait for an ele to be presenet in the screen i.e start leanring text will come after some seconds in useEffect
  // test('Start Learning button is eventually displayed', async () => {
  //   render(<Skills skills={skills} />)
  //   const startLearningButton = screen.getByRole(
  //     'button',
  //     {
  //       name: 'Start learning',
  //     },
     
  //   )
  //   expect(startLearningButton).toBeInTheDocument()
  // })

  //IMP **  findBy and findAllBy
   
  // findBy
  // 1. Returns a Promise which resolves when an element is found which matches the given query. 
  // 2. The promise is rejected if no element is found or if more than one element is found after a default timeout of 1000ms
  
  
  //findAllBy
  // 1. Returns a promise which resolves to an array of elements when any elements are found which match the given query. 
  // 2. The promise is rejected if no elements are found after a default timeout of 1000ms

  //async and await are added beacuse findBy queries are a part of promise .. they resolved or rejected
  // if we change the timeout in useEffect in skills.tsx to 1001 it will fail coz findBy uses a default timeout of 1000 after that it fails.
  // if we want to overcome default timeout in findBY specify another object key name timeout .. it values should be greater than the timeout of compoennet value
  test('Start Learning button is eventually displayed', async () => {
    //log roles is used to print all implicit roles in dom tree
  const view = render(<Skills skills={skills} />)
  logRoles(view.container)
    //debug options present in screen obj is useful for debugging
    //it creates a visual of dom elements in terminal to tell the diff.
    // screen.debug();
    const startLearningButton = await screen.findByRole(
      'button',
      {
        name: 'Start learning',
      },
      {
        timeout: 2000,
      }
      
    )
    // screen.debug()
    expect(startLearningButton).toBeInTheDocument()
  })
})
