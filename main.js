//https://jasmine.github.io/pages/docs_home.html

//describe block & a grouping
// describe('Test Example', () => {
//     // it test 
//     it('returns true', () => {
//         // an expectation. need to know what to expect
//         expect(false).toBe(true);  //toBe is one of the matchers
//     })
// });


function insertDashes(str) {
    //write code here
}




/* TEST SUITE */

describe('insertDashes()', () => {
    it('insert dashes in between chars', () => {
        //arrange
        const value = "aba caba";

        //act
        const result = insertDashes(value);

        //log
        console.log("result: ", result);

        //assert
        expect(result).toBe("a-b-a c-a-b-a");
    });
});


