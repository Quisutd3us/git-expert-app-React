import {getGifs} from "../../helpers/getGifs.js";
import {number, string} from "prop-types";

describe('Test responses for Giphy API', () => {
  const category = 'Dragon Ball'
  test('The response of API must be and Array of objects with a given structure', async () => {
    const response = await getGifs(category)
    expect(response.length).toBeGreaterThan(0)
    expect(response[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)
    })
  })
})