import {describe,test,expect} from "@jest/globals";
import {render, screen} from "@testing-library/react";
import GifExpertApp from "../GifExpertApp.jsx";

describe('Suite of test for <GifExpertApp/>',()=>{
  test('the initial state for component must be render <SearchCategory/> ',()=>{
    render(<GifExpertApp/>)
    const form = screen.getByRole('form',{
      name:'testingHook'
    })
    expect(form).toBeTruthy()
  });
  test('The component should not any warning message',()=>{
    render(<GifExpertApp/>)
    expect(screen.getByRole('heading',{
      level:5
    }).innerHTML).toBe('')
  })

  test('The categories state are sending data to component <GifList/>',()=>{
    render(<GifExpertApp/>)
    expect(screen.getByText('Dragon Ball')).toBeTruthy();
  })

})