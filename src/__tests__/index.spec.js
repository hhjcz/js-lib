/** Created by hhj on 8/26/16. */
/* eslint-disable no-unused-expressions */
import { expect } from 'chai'
import { reduxUtils, debounce, longestSubstring } from '../index'

describe('index', () => {

  it('exports utils', () => {
    expect(typeof debounce).to.equal('function')
    expect(typeof longestSubstring).to.equal('object')
  })

  it('exports redux utils', () => {
    expect(typeof reduxUtils).to.equal('object')
    expect(typeof reduxUtils.createMapStateToProps).to.equal('function')
  })

})
