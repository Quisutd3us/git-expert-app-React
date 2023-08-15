import {expect,jest,test,describe} from '@jest/globals'
import {fireEvent,render,screen} from "@testing-library/react";
import SearchCategory from "../../components/SearchCategory.jsx";

describe('Set of Tests for <SearchCategory/> ',()=>{
  test('Must be change  the value attribute of the input',()=>{
    render(<SearchCategory onNewCategory={()=>{}}/>)
    const input = screen.getByRole('textbox');
    fireEvent.input(input,{
      target:{
        value:'testValue'
      }
    })
    expect(input.value).toBe('testValue')
  })

  test('This test must be submit event , clean the category and then send the category to onNewCategory',()=>{
    const onNewCategory = jest.fn();
    const inputValue = 'testValue'
    render(<SearchCategory onNewCategory={onNewCategory}/>)
    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form',{
      name: 'testingHook'
    })
    fireEvent.input(input,{
      target:{
        value:inputValue
      }
    })
    fireEvent.submit(form)
    expect(input.value).toBe('')
    expect(onNewCategory).toBeCalled()
    expect(onNewCategory).toBeCalledTimes(1)
    expect(onNewCategory).toBeCalledWith(inputValue)

  })
})