'use client'

import React, { useState } from 'react'
import './page.css'
import Default from '@/components/default/Default'
import InputForm from './InputForm'

const Page = () => {
  return(<>
  <Default current='beta-input'>
    <InputForm></InputForm>
  </Default>
  </>)
}

export default Page

