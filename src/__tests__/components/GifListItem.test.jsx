import {render, screen} from "@testing-library/react";
import GifListItem from "../../components/GifListItem.jsx";

describe('Suite Test For GiftListItem Component', () => {
  const title = 'This a title';
  const url = 'This is a url';
  test('Snapshot', () => {
    const container = render(
        <GifListItem title={title} url={url}/>
    )
    expect(container).toMatchSnapshot()
  })
})