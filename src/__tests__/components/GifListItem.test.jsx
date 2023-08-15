import {render, screen} from "@testing-library/react";
import GifListItem from "../../components/GifListItem.jsx";

describe('Suite Test For GiftListItem Component', () => {
  const title = 'This a title';
  const url = 'http://testing-gif/saitam.jpg';
  test('Snapshot', () => {
    const container = render(
        <GifListItem title={title} url={url}/>
    )
    expect(container).toMatchSnapshot()
  })
  test('Verify that image URL and ALT attributes are the same that given..',()=>{
    render(
        <GifListItem
            title={title}
            url={url}/>
    );
    const {src , alt} = screen.getByRole('img')
    expect(src).toBe(url)
    expect(alt).toBe(title)

  })

  test('Verify that the title show in the component',()=>{
    render(
        <GifListItem
            title={title}
            url={url}/>
    );
    expect(screen.getByText(title)).toBeTruthy()
  })
})