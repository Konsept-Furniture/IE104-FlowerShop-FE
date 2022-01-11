/* eslint-disable */
import { shallow, mount, render } from 'enzyme'
import { SnackbarProvider } from 'notistack'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import LoginForm from './LoginForm'
import TextInputField from '@/components/form-controls/TextInputField'
import LoadingButton from '@mui/lab/LoadingButton'
import MockTheme from '@/components/MockTheme/MockTheme'
import React from 'react'

TextInputField.displayName = 'TextInputField'
LoadingButton.displayName = 'LoadingButton'

describe('Login Form', () => {
   it('UTC1 should not call submit function', async () => {
      const defaultValues = {
         username:
            'vohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduck',
         password: '1234567'
      }
      const handleSubmit = jest.fn()
      const wrapper = shallow(<LoginForm defaultValues={defaultValues} onSubmit={handleSubmit} />)

      const username = wrapper.find('TextInputField').at(0)
      const password = wrapper.find('TextInputField').at(1)
      const btn = wrapper.find('LoadingButton').first()
      await btn.props().onClick()
      expect(username.shallow().prop('value')).toBe(defaultValues.username)
      expect(password.shallow().prop('value')).toBe(defaultValues.password)
      expect(handleSubmit).not.toBeCalled()
   })

   it('UTC2 should not call submit function', async () => {
      const defaultValues = {
         username: '',
         password: '123456'
      }
      const handleSubmit = jest.fn()
      const wrapper = shallow(<LoginForm defaultValues={defaultValues} onSubmit={handleSubmit} />)

      const username = wrapper.find('TextInputField').at(0)
      const password = wrapper.find('TextInputField').at(1)
      const btn = wrapper.find('LoadingButton').first()
      await btn.props().onClick()
      expect(username.shallow().prop('value')).toBe(defaultValues.username)
      expect(password.shallow().prop('value')).toBe(defaultValues.password)
      expect(handleSubmit).not.toBeCalled()
   })

   it('UTC3 should not call submit function', async () => {
      const defaultValues = {
         username: 'khoa.admin',
         password: ''
      }
      const handleSubmit = jest.fn()
      const wrapper = shallow(<LoginForm defaultValues={defaultValues} onSubmit={handleSubmit} />)

      const username = wrapper.find('TextInputField').at(0)
      const password = wrapper.find('TextInputField').at(1)
      const btn = wrapper.find('LoadingButton').first()
      await btn.props().onClick()
      expect(username.shallow().prop('value')).toBe(defaultValues.username)
      expect(password.shallow().prop('value')).toBe(defaultValues.password)
      expect(handleSubmit).not.toBeCalled()
   })

   it('UTC4 should not call submit function', async () => {
      const defaultValues = {
         username:
            ' vohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduck',
         password: ''
      }
      const handleSubmit = jest.fn()

      const wrapper = shallow(<LoginForm defaultValues={defaultValues} onSubmit={handleSubmit} />)

      const username = wrapper.find('TextInputField').at(0)
      const password = wrapper.find('TextInputField').at(1)
      const btn = wrapper.find('LoadingButton').first()
      await btn.props().onClick()
      expect(username.shallow().prop('value')).toBe(defaultValues.username)
      expect(password.shallow().prop('value')).toBe(defaultValues.password)
      expect(handleSubmit).not.toBeCalled()
   })

   it('UTC5 should not call submit function', async () => {
      const defaultValues = {
         username: '',
         password: ''
      }
      const handleSubmit = jest.fn()

      const wrapper = shallow(<LoginForm defaultValues={defaultValues} onSubmit={handleSubmit} />)

      const username = wrapper.find('TextInputField').at(0)
      const password = wrapper.find('TextInputField').at(1)
      const btn = wrapper.find('LoadingButton').first()
      await btn.props().onClick()
      expect(username.shallow().prop('value')).toBe(defaultValues.username)
      expect(password.shallow().prop('value')).toBe(defaultValues.password)
      expect(handleSubmit).not.toBeCalled()
   })

   it('UTC6 should not call submit function', async () => {
      const defaultValues = {
         username: 'adqda',
         password: ''
      }
      const handleSubmit = jest.fn()

      const wrapper = shallow(<LoginForm defaultValues={defaultValues} onSubmit={handleSubmit} />)

      const username = wrapper.find('TextInputField').at(0)
      const password = wrapper.find('TextInputField').at(1)
      const btn = wrapper.find('LoadingButton').first()
      await btn.props().onClick()
      expect(username.shallow().prop('value')).toBe(defaultValues.username)
      expect(password.shallow().prop('value')).toBe(defaultValues.password)
      expect(handleSubmit).not.toBeCalled()
   })

   it('UTC7 should call submit function', async () => {
      const defaultValues = {
         username: 'khoa.admin',
         password: 'admin'
      }
      const handleSubmit = jest.fn()

      const wrapper = shallow(<LoginForm defaultValues={defaultValues} onSubmit={handleSubmit} />)

      const username = wrapper.find('TextInputField').at(0)
      const password = wrapper.find('TextInputField').at(1)
      const btn = wrapper.find('LoadingButton').first()
      await btn.props().onClick()
      expect(username.shallow().prop('value')).toBe(defaultValues.username)
      expect(password.shallow().prop('value')).toBe(defaultValues.password)
      expect(handleSubmit).toBeCalled()
   })

   it('UTC8 should not call submit function', async () => {
      const defaultValues = {
         username:
            'vohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduck',
         password: 'admin'
      }
      const handleSubmit = jest.fn()

      const wrapper = shallow(<LoginForm defaultValues={defaultValues} onSubmit={handleSubmit} />)

      const username = wrapper.find('TextInputField').at(0)
      const password = wrapper.find('TextInputField').at(1)
      const btn = wrapper.find('LoadingButton').first()
      await btn.props().onClick()
      expect(username.shallow().prop('value')).toBe(defaultValues.username)
      expect(password.shallow().prop('value')).toBe(defaultValues.password)
      expect(handleSubmit).not.toBeCalled()
   })

   it('UTC9 should not call submit function', async () => {
      const defaultValues = {
         username: '',
         password: 'admin'
      }
      const handleSubmit = jest.fn()

      const wrapper = shallow(<LoginForm defaultValues={defaultValues} onSubmit={handleSubmit} />)

      const username = wrapper.find('TextInputField').at(0)
      const password = wrapper.find('TextInputField').at(1)
      const btn = wrapper.find('LoadingButton').first()
      await btn.props().onClick()
      expect(username.shallow().prop('value')).toBe(defaultValues.username)
      expect(password.shallow().prop('value')).toBe(defaultValues.password)
      expect(handleSubmit).not.toBeCalled()
   })

   it('UTC10 should not call submit function', async () => {
      const defaultValues = {
         username: 'khoa.admin',
         password:
            'vohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduck'
      }
      const handleSubmit = jest.fn()

      const wrapper = shallow(<LoginForm defaultValues={defaultValues} onSubmit={handleSubmit} />)

      const username = wrapper.find('TextInputField').at(0)
      const password = wrapper.find('TextInputField').at(1)
      const btn = wrapper.find('LoadingButton').first()
      await btn.props().onClick()
      expect(username.shallow().prop('value')).toBe(defaultValues.username)
      expect(password.shallow().prop('value')).toBe(defaultValues.password)
      expect(handleSubmit).not.toBeCalled()
   })

   it('UTC11 should not call submit function', async () => {
      const defaultValues = {
         username:
            'vohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduck',
         password:
            'vohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduck'
      }
      const handleSubmit = jest.fn()

      const wrapper = shallow(<LoginForm defaultValues={defaultValues} onSubmit={handleSubmit} />)

      const username = wrapper.find('TextInputField').at(0)
      const password = wrapper.find('TextInputField').at(1)
      const btn = wrapper.find('LoadingButton').first()
      await btn.props().onClick()
      expect(username.shallow().prop('value')).toBe(defaultValues.username)
      expect(password.shallow().prop('value')).toBe(defaultValues.password)
      expect(handleSubmit).not.toBeCalled()
   })

   it('UTC12 should not call submit function', async () => {
      const defaultValues = {
         username: '',
         password:
            'vohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduckhoavohoangduck'
      }
      const handleSubmit = jest.fn()

      const wrapper = shallow(<LoginForm defaultValues={defaultValues} onSubmit={handleSubmit} />)

      const username = wrapper.find('TextInputField').at(0)
      const password = wrapper.find('TextInputField').at(1)
      const btn = wrapper.find('LoadingButton').first()
      await btn.props().onClick()
      expect(username.shallow().prop('value')).toBe(defaultValues.username)
      expect(password.shallow().prop('value')).toBe(defaultValues.password)
      expect(handleSubmit).not.toBeCalled()
   })
})
