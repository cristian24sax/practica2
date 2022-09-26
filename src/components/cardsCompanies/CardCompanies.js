import React from 'react'
import { Card } from './Card'
import './card.css'
export const CardCompanies = () => {
    const data=[
    {'name':'Layers','description':'“Untitled has saved us thousands of hours of work. We’re able to spin up projects faster.”','btn':'Read case study','color':'#7F56D9'},
    {'name':'SisyPhus','description':'“We’ve been using Untitled to kick start every new project and can’t work without it.”','btn':'Read case study','color':'#039855'},
    {'name':'circooles','description':'“Love the simplicity of the service and the prompt customer support.”','btn':'Read case study','color':'#1570EF'}]
  return (
    <div>
        <div className='container'>
            <div className='content'>
                <h2>We’ve helped hundreds of global companies</h2>
                <div>Case studies from some of our amazing customers who are building faster.</div>
            </div>
            <div className='btns'>
                <button className='btn-customers'>Our customers</button>
                <button className='btn-account'>Create account</button>
            </div>
        </div>
        <div className='cards-companies'>
            {data.map(dat=><Card {...dat}/>)}

        </div>
    </div>
  )
}
