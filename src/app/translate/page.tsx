import React from 'react'
import { Metadata } from 'next'
import Container from '@component/common/container'
import { languages } from '@component/common/constants'

export const metadata: Metadata = {
  title: 'Webpage: Translate from any language to any language.',
  description: 'Translate from any language to any language.',
}

export default function Page() {
  return (
    <Container page={'translate'} pageTemplate={'two-col'}>
      <section className="section">
        <h1>Translate text</h1>

        <div className="form-group">
          <textarea className="form-control"></textarea>
          <label className="form-label">Add source text</label>
        </div>

        <div className="row">
          <div className="col">
            <div className="form-group select">
              <select className="form-control">
                <option value=""></option>
                {languages.map((value) => <option key={value+'-source'} value={value}>{value}</option>)}
              </select>
              <label className="form-label">Select source language...</label>
            </div>
          </div>

          <div className="col">
            <div className="form-group select">
              <select className="form-control">
              <option value=""></option>
                {languages.map((value) => <option key={value+'-translation'} value={value}>{value}</option>)}
              </select>
              <label className="form-label">Select translation language...</label>
            </div>
          </div>
        </div>

        <div className="form-group">
          <button type="button" className="btn">Translate</button>
          <button type="button" className="btn-reset"><span>Reset</span></button>
        </div>
      </section>
    </Container>
  )
}