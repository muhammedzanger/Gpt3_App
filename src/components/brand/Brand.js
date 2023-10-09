/** @format */

import React from "react"
import "./brand.css"
import { google, shop, slack, dropbox, atalation } from "./import"
function Brand() {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={google} alt='' />
      </div>
      <div>
        <img src={shop} alt='' />
      </div>
      <div>
        <img src={slack} alt='' />
      </div>
      <div>
        <img src={dropbox} alt='' />
      </div>
      <div>
        <img src={atalation} alt='' />
      </div>
    </div>
  )
}

export default Brand
