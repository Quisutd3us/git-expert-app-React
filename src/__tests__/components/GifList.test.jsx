import {describe, test, expect, jest} from "@jest/globals";
import {render, screen} from "@testing-library/react";
import GifList from "../../components/GifList.jsx";
import {UseFetchGifs} from "../../hooks/useFetchGifs.js";


jest.mock('../../hooks/useFetchGifs.js')
describe('Suite of test for <GifList/>', () => {

  const testCategory = 'Dragon Ball Test'
  test('Must Be show loading message initially', () => {
    UseFetchGifs.mockReturnValue({
      isLoading:true,
      images:[]
    })
    render(<GifList category={testCategory}/>)
    expect(screen.getByText('IsLoading...'))
    expect(screen.getByText(testCategory))
  })
  test('Must be show items when images was loading from UseFetchGifs()',()=>{
    const gifs =[
      {
        id: 'abc',
        title: 'goku',
        url: 'http://localhost:8080/goku.jpg'
      },
      {
        id: 'def',
        title: 'vegeta',
        url: 'http://localhost:8080/vegeta.jpg'
      },
      {
        id: 'ghi',
        title: 'Kayosama',
        url: 'http://localhost:8080/Kayosama.jpg'
      }
    ]
    UseFetchGifs.mockReturnValue({
      isLoading:false,
      images:gifs
    })
    render(<GifList category={testCategory}/>)
    expect(screen.getAllByRole('img').length).toBe(3)
  })
})