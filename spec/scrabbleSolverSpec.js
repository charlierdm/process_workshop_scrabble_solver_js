describe('scrabbleSolver', function(){

  it('returns 0 when passed an empty string', function(){
    expect(scrabbleSolver('')).toEqual(0)
  })

  it('returns 0 when passed tab or newline', function(){
    expect(scrabbleSolver(" \t\n")).toEqual(0)
  })

  it('returns 0 when passed null', function(){
    expect(scrabbleSolver(null)).toEqual(0)
  })

  it('returns 1 when passed a', function(){
    expect(scrabbleSolver('a')).toEqual(1)
  })

  it('returns 4 when passed f', function(){
    expect(scrabbleSolver('f')).toEqual(4)
  })

  it('returns 6 when passed street', function(){
    expect(scrabbleSolver('street')).toEqual(6)
  })

  it('returns 22 when passed quirky', function(){
    expect(scrabbleSolver('quirky')).toEqual(22)
  })

  it('returns 41 when passed OXYPHENBUTAZONE', function(){
    expect(scrabbleSolver('OXYPHENBUTAZONE')).toEqual(41)
  })
})
