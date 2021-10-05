import checkURL from '../js/checkURL'

it('Checks if the url not valid ',()=>{

    expect(checkURL('AnyString')).toBeFalsy()


})

it('Checks if the url  valid ',()=>{

    expect(checkURL('https://jamesclear.com')).toBeTruthy()


})