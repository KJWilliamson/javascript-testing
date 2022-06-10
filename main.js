//boot.js is loading jasmine in the background
//loading all the scripts in the index.html
//jasmine.js is jasmine library in the background


//https://jasmine.github.io/pages/docs_home.html

//************************************************************************* */
// test1 code in github screenshot
//describe block & a grouping
// describe('Test Example', () => {
//     // it test 
//     it('returns true', () => {
//         // an expectation. need to know what to expect
//         expect(false).toBe(true);  //toBe is one of the matchers
//     })
// });


//************************************************************************** */
//test 2 code in github screenshot
// actual code

// function insertDashes(str) {
//     //write code here
// }


// code we test
// TEST SUITE 

// describe('insertDashes()', () => {
//     it('insert dashes in between chars', () => {
//         //arrange
//         const value = "aba caba";

//         //act
//         const result = insertDashes(value);

//         //log
//         console.log("result: ", result);

//         //assert
//         expect(result).toBe("a-b-a c-a-b-a");
//     });
// });

//**************************************************************************** */


// TEST SUITE
// NEED A WAY TO GROUP TESTS
// testing a single thing User
describe(`${User.name} Class`, () => {
    //first test case. write from user focus
    //arrange, act, assert
    it('first name defaults to empty', () => {
        //setting up state of application
        //arrange
        const data = { firstName: null }

        //act
        //within act typically testing 1 of 5 things. model, service, component, directive, 
        //or pipe so call it that
        const model = new User(data);

        //assert. it's what i expect the test to do
        //expect that value to equal an empty string
        expect(model.firstName).toBe('')
    });

    it('last name defaults to empty', () => {
        //arrange
        const data = { lastName: null }

        //act
        const model = new User(data);

        //assert
        expect(model.lastName).toBe('')
    });

    it('middle name defaults to empty', () => {
        //arrange
        const data = { middleName: null }

        //act
        const model = new User(data);

        //assert
        expect(model.middleName).toBe('')
    });
});

