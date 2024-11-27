import FormSection from '@/components/contacts/form-section/FormSection'
import SupportSection from '@/components/contacts/supportsection/SupportSection'
import Default from '@/components/default/Default'
import React from 'react'

const page = () => {
  return (
   <>
   <Default current='Contact'>
    <FormSection />
    <SupportSection />
   </Default>
   </>
  )
}

export default page