import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe('Application', () => { 
    test('application renders correctly', () => {
        render(<Application />); // render function from rtl is used to render virtualDOM
        //getBy role is used to get a particular role of elemnet i.e role == button

        //Apart from beelow examples of getByrole options 
        // i.e name and level there are more listed below
        // hidden, selected, checked, pressed.

        
        // //checking for h1 tag
        // const pageHeading = screen.getByRole('heading', {
        //     //name key is used to render the innerText of tag or element attribute name also
        //     //it is used to filter the asme multiple elements i.e below we are filtering h1 from h2 by using inner text of h1
        //     name: 'Job Application Form'
        // })
        // expect(pageHeading).toBeInTheDocument();
        
        // //checking for h2 tag
        // const sectionHeading = screen.getByRole('heading', {
        //     //name key is used to render the innerText of tag or element attribute name also
        //     //it is used to filter the asme multiple elements i.e below we are filtering h1 from h2 by using inner text of h1
        //     name: 'Section 1'
        // })
        // expect(sectionHeading).toBeInTheDocument();

        //** ABOVE CODE IS AN EXAMPLE OF FILTERING OPTIONS BY NAME .. BELOW IS BY LEVEL KEY FOR HEADING
          //checking for h1 tag
          const pageHeading = screen.getByRole('heading', {
              // level key is used to check levels of heading tags i.e level 1 for 1,, level 2 for h2 and so on...
            //it is used to filter the asme multiple elements i.e below we are filtering h1 from h2 by using inner text of h1
            level: 1,
        })
        expect(pageHeading).toBeInTheDocument();
        
        //checking for h2 tag
        const sectionHeading = screen.getByRole('heading', {
              // level key is used to check levels of heading tags
            //it is used to filter the asme multiple elements i.e below we are filtering h1 from h2 by using inner text of h1
            level: 2,
        })
        expect(sectionHeading).toBeInTheDocument();

       const nameElement = screen.getByRole('textbox', {
        // the 2nd parameter object are options provided by getByrole
        // this options are used to filter multiple elements having same role
        name: 'Name'
       }); 
       expect(nameElement).toBeInTheDocument();
       
    // getByLabelText will search for the label that matches the given text,then find the element associated with that label tag
      const nameElement2 = screen.getByLabelText('Name',{
          //filter multiple label tag innerText using html element type 
          selector: 'input',

      });  
      expect(nameElement2).toBeInTheDocument();

    //   getByPlaceholder Text will search for all elements with a placeholder attribute and find one that matches the given text
    const nameElement3 = screen.getByPlaceholderText('FullName');  
    expect(nameElement3).toBeInTheDocument();

       //label for textarea
       const bioElement = screen.getByRole('textbox',{
           name: 'Bio'
       })
       expect(bioElement).toBeInTheDocument();

       //used to check if select tag is present .. select tag default role is combox
       const jobLocationElement = screen.getByRole('combobox');
       expect(jobLocationElement).toBeInTheDocument();

       //used for check if checkbox tag is present i.e input type checkbox
       const termsElement = screen.getByRole('checkbox');
       expect(termsElement).toBeInTheDocument();
         
       const termsElement2 = screen.getByLabelText('I agree to the terms and conditions');
       expect(termsElement2).toBeInTheDocument();
        
    // getByText will search for all elements that have a text node with textContent matching the given text Typically,you'd use this to find paragraph, div or span elements
    //you can use selector option to filter using html element type for getBytext i.e p or span tag.
    const paragraphElement = screen.getByText('All field are Mandatory')      
    expect(paragraphElement).toBeInTheDocument();
          
      //getBytitle is for getting elements having title attr for eg in span   
      const closeElement = screen.getByTitle('close');
      expect(closeElement).toBeInTheDocument();

      //getByTestId is for getting elements having data-testid attr for eg in div   
      const customElement = screen.getByTestId('custom-element');
      expect(customElement).toBeInTheDocument();

       //check if button is present
       const submitButtonElement = screen.getByRole('button');
       expect(submitButtonElement).toBeInTheDocument();
       
    });

  
})