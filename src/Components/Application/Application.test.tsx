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

       //check if button is present
       const submitButtonElement = screen.getByRole('button');
       expect(submitButtonElement).toBeInTheDocument();
       
    });

    
})