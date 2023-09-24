import React, { useRef } from 'react'
import { ComponentMeta } from '@storybook/react'
import Form, { IFormRef } from './form'
import Item from './formItem'
import Input from '../Input'
import Button from '../Button'
import Select from '../Select'
import { CustomRule } from './useStore'

const meta: ComponentMeta<typeof Form> ={ 
  title: 'Form',
  id: 'Form',
  component: Form,
//   subcomponents: { 'Item': Item },
  decorators: [
    (Story) => (
      <div style={{ width: '550px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs']
//   parameters: {
//     docs: {
//       source: {
//         type: "code",
//       },
//     }
//   }
}
export default meta
const confirmRules: CustomRule[] = [
  { type: 'string',required: true, min: 3, max: 8 },
  ({ getFieldValue }) => ({
    asyncValidator(rule, value) {
      console.log('the value', getFieldValue('password'))
      console.log(value)
      return new Promise((resolve, reject) => {
        if (value !== getFieldValue('password')) {
          reject('The two passwords that you entered did not match!')
        }
        setTimeout(() => {
          resolve()
        }, 1000)
      })

    }
  })
]
export const ABasicForm = (args: any) => {
  return (
    <Form {...args} >
      <Item label='Username' name='name' rules={[{type: 'string',required: true, min: 3}]}>
        <Input/>
      </Item>
      <Item label='Password' name='password' rules={[{type: 'string',required: true, min: 3, max: 8 }]}>
        <Input type="password"/>
      </Item>
      <div className='viking-form-submit-area'>
        <Button type="submit" btnType='primary'>Login</Button>
      </div>
    </Form>
  )
}
ABasicForm.storyName = 'Basic Login Form'

export const BRegForm = (args:any) => { 
  const initialValues = {
    agreement: false
  }
  return (
    <Form {...args} initialValues={initialValues}>
      <Item label='Email' name='email' rules={[{ type: 'email',required: true }]}>
        <Input/>
      </Item>
      <Item label='Password' name='password' rules={[{type: 'string',required: true, min: 3, max: 8 }]}>
        <Input type="password"/>
      </Item>
      <Item 
        label='Gender' 
        name='gender'
        rules={[{type: 'string',required: true }]}
        getValueFromEvent={(e) => e }
        valuePropName='defaultValue'
      >
        <Select
          placeholder="Please select a gender"
        >
          <Select.Option value="Male" />
          <Select.Option value="Female" />
        </Select>
      </Item>
      <div className='agreement-section' style={{ 'display': 'flex', 'justifyContent': 'center'}}>
        <Item
          name='agreement' 
          rules={[{ type: 'enum', enum: [true], message: ''}]}
          getValueFromEvent={(e) => e.target.checked }
          valuePropName='checked'
        >
          <input type="checkbox"/>
        </Item>
        <span style={{marginLeft: 5}} className="agree-text">Agree with<a href='#' style={{marginLeft: 4}}>Terms of Service</a></span>
      </div>
      <div className='viking-form-submit-area'>
        <Button type="submit" btnType='primary'>Login</Button>
      </div>
    </Form>
  )
}
BRegForm.storyName = 'Signup Form - with FormItem Component'
export const CFullForm = (args:any) => {
  const ref = useRef<IFormRef>()
  const resetAll = () => {
    console.log('form ref', ref.current)
    console.log('get value', ref.current?.getFieldValue('username'))
    ref.current?.resetFields()
    
  }
  return (
    <Form initialValues={{ username: 'wabi', agreement: false }} {...args} ref={ref}>
      { ({ isValid, isSubmitting }) => (
      <>
      <Item label='Username' name='username' rules={[{ type: 'email', required: true }]}>
        <Input/>
      </Item>
      <Item label='Password' name='password' rules={[{type: 'string', required: true, min: 3, max: 8 }]}>
        <Input type='password'/>
      </Item>
      <Item label='Confirm Password' name='confirmPwd' rules={confirmRules}>
        <Input type='password'/>
      </Item>
      <div className='agreement-section' style={{ 'display': 'flex', 'justifyContent': 'center'}}>
        <Item 
          name='agreement' 
          valuePropName='checked' 
          getValueFromEvent={(e) => e.target.checked}
          rules={[{ type: 'enum', enum: [true], message: ''}]}
        >
          <input type="checkbox"/>
        </Item>
        <span className="agree-text" style={{marginLeft: 5}}>Read<a href='#' style={{marginLeft: 4}}>Terms of Service</a></span>
      </div>
      <div className='viking-form-submit-area'>
        <Button type="submit" btnType='primary'>Login {isSubmitting ? 'Checking' : 'Done'} {isValid ? 'Passed' : 'Failed'} </Button>
        <Button type="button" onClick={resetAll} style={{marginLeft: 10}}>Reset</Button>
      </div>
      </>
    )}
    </Form>
  )
}

CFullForm.storyName = 'Form - Custom Rules'