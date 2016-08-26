/** Created by hhj on 8/26/16. */
/* eslint-disable no-unused-expressions */
import { expect } from 'chai'
import defExport, { myMiddleware, createMapStateToProps, createMapDispatchToProps } from '../index'

describe('redux utils defExport', () => {

  it('exports utils as default', () => {
    expect(typeof defExport).to.equal('object')
    expect(typeof defExport.createMapDispatchToProps).to.equal('function')
    expect(typeof defExport.createMapStateToProps).to.equal('function')
    expect(typeof defExport.myMiddleware).to.equal('function')
  })

  it('exports individual utils', () => {
    expect(typeof createMapDispatchToProps).to.equal('function')
    expect(typeof createMapStateToProps).to.equal('function')
    expect(typeof myMiddleware).to.equal('function')
  })

})
