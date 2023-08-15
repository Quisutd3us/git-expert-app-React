import {describe, test, expect} from "@jest/globals";
import {renderHook, waitFor} from "@testing-library/react";
import {UseFetchGifs} from "../../hooks/useFetchGifs.js";

describe('Testing set for useFetchGifs hook', () => {

  test('Test initial estate of hook', () => {
    const {result} = renderHook(() => UseFetchGifs('one punch'))
    const {images, isLoading} = result.current
    expect(images.length).toBe(0)
    expect(isLoading).toBeTruthy()
  })

  test('Test the UseFetchGifs hook after retrieve the API images', async () => {
    const {result} = renderHook(() => UseFetchGifs('one punch'))
    await waitFor(
        () => expect(result.current.images.length).toBeGreaterThan(0)
    );
    const {images, isLoading} = result.current
    expect(images.length).toBeGreaterThan(5)
    expect(isLoading).not.toBeTruthy()
  })
})