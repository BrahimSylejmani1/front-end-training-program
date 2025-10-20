test('two plus two is four', () => {
  expect(2 + 2).toBe(4)
})

test('object assignment', () => {
  let data = {one: 1}
  data = {...data, two: 2}
  expect(data).toEqual({one: 1, two: 2})
})

test('adding positive numbers is not zero', () => {
	let a = 4
	let b = 2
	expect(a + b).not.toBe(0)
})

test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

test('zero', () => {
  const z = 0
  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeUndefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})

test('two plus two', () => {
  const value = 2 + 2
  expect(value).toBeGreaterThan(3)
  expect(value).toBeGreaterThanOrEqual(3.5)
  expect(value).toBeLessThan(5)
  expect(value).toBeLessThanOrEqual(4.5)

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4)
  expect(value).toEqual(4)
})

test('adding floating point numbers', () => {
  const value = 0.1 + 0.2
  //expect(value).toBe(0.3)           This won't work because of rounding error
  expect(value).toBeCloseTo(0.3) // This works.
})

test('there is no I in team', () => {
  expect('team').not.toMatch(/I/)
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/)
})

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer',
];

test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer')
  expect(new Set(shoppingList)).toContain('beer')
})

test('array filter', () => {
	let original = ['John', 'Doe']
	let filtered = original.filter(next => next !== 'John')
  expect(filtered).toStrictEqual(['Doe'])
})

const compileAndroidCode = () => {
  throw 'you are using the wrong JDK'
}

test('compiling android goes as expected', () => {
  expect(compileAndroidCode).toThrow()

  // You can also use the exact error message or a regexp
  expect(compileAndroidCode).toThrow('you are using the wrong JDK')
  expect(compileAndroidCode).toThrow(/JDK/)
})

const fetchData = () => {
	return Promise.resolve('peanut butter')
}
test('the data is peanut butter', () => {
  return fetchData().then(data => {
    expect(data).toBe('peanut butter')
  })
})
test('the data is peanut butter', () => {
  return expect(fetchData()).resolves.toBe('peanut butter')
})

const fetchDataFailure = () => {
	return Promise.reject('error')
}
test('the fetch fails with an error', () => {
  expect.assertions(1);
  return fetchDataFailure().catch(e => expect(e).toMatch('error'));
})
test('the fetch fails with an error', () => {
  return expect(fetchDataFailure()).rejects.toMatch('error')
})

// describe a set of test cases
describe('testing api', () => {
	// before each of them, reset the mocked reponse
  beforeEach(() => {
    fetch.resetMocks()
  })

  it('calls google and returns data to me', () => {
		// lets mock the response of the next call
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }))

    //assert on the response
    fetch('https://google.com').then(res => res.json()).then(res => {
      expect(res.data).toEqual('12345')
    })

    //assert on the times called and arguments given to fetch
    expect(fetch.mock.calls.length).toEqual(1)
    expect(fetch.mock.calls[0][0]).toEqual('https://google.com')
  })
})