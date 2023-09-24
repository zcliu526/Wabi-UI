import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AutoComplete, DataSourceType } from './autoComplete'
interface LakerPlayerProps {
  value: string;
  number: number;
}
interface GithubUserProps {
  login: string;
  url: string;
  avatar_url: string;
}
export default { 
  title: 'AutoComplete',
  component: AutoComplete,
  id: 'AutoComplete',
  parameters: {
    docs: {
      source: {
        type: "code",
      },
    }
  },
  tags: ['autodocs']
  // argTypes: { onClick: { action: 'clicked' }, onSelect: { action: 'selected' }, onChange: { action: 'changed' } },
} as ComponentMeta<typeof AutoComplete>

// const Template: ComponentStory<typeof AutoComplete> = (args) => <AutoComplete {...args} />
// export const Simple = Template.bind({})
// const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins',
// 'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando']
// const handleFetch = (query: string) => {
//   return lakers.filter(name => name.includes(query)).map(name => ({value: name}))
// }
// Simple.args = {
//   fetchSuggestions: handleFetch,
//   placeholder: "输入湖人队球员英文名试试"
// }
export const ASimpleComplete: ComponentStory<typeof AutoComplete> = (args) => {
  const lakers = ['Bradley', 'Pope', 'Caruso', 'Cook', 'Cousins',
  'James', 'AD', 'Green', 'Howard', 'Kuzma', 'McGee', 'Rando']
  const handleFetch = (query: string) => {
    return lakers.filter(name => name.includes(query)).map(name => ({value: name}))
  }
  return (
    <AutoComplete
      {...args}
      fetchSuggestions={handleFetch}
      placeholder="Lakers' Player Name"
    />
  )
}
ASimpleComplete.storyName = '1. Basic Search'

export const BCustomComplete = (args:any) => {
  const lakersWithNumber = [
    {value: 'Bradley', number: 11},
    {value: 'Pope', number: 1},
    {value: 'Caruso', number: 4},
    {value: 'Cook', number: 2},
    {value: 'Cousins', number: 15},
    {value: 'James', number: 23},
    {value: 'AD', number: 3},
    {value: 'Green', number: 14},
    {value: 'Howard', number: 39},
    {value: 'Kuzma', number: 0},
  ] 
  const handleFetch = (query: string) => {
    return lakersWithNumber.filter(player => player.value.includes(query))
  }
  const renderOption = (item: DataSourceType) => {
    const itemWithNumber = item as DataSourceType<LakerPlayerProps>
    return (
      <>
        <b>Name: {itemWithNumber.value}</b>
        <span style={{marginLeft: 10}}>Jersey Number: {itemWithNumber.number}</span>
      </>
    )
  }
  return (
    <AutoComplete
      {...args}
      fetchSuggestions={handleFetch}
      placeholder="Search Lakers Player - Custom search result"
      renderOption={renderOption}
    />
  )
}
BCustomComplete.storyName = '2. Custom Search Result'

export const CAjaxComplete = (args:any) => {
  const handleFetch = (query: string) => {
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then(res => res.json())
      .then(({ items }) => {
        return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item}))
      })
  }

  const renderOption = (item: DataSourceType) => {
    const itemWithGithub = item as DataSourceType<GithubUserProps>
    return (
      <>
        <b>Name: {itemWithGithub.value}</b> 
        <span style={{marginLeft: 10}}>url: {itemWithGithub.url}</span>
      </>
    )
  }
  return (
    <AutoComplete
      {...args}
      fetchSuggestions={handleFetch}
      placeholder="Search Github Username"
      renderOption={renderOption}
    />
  )
}
CAjaxComplete.storyName = '3. Async Search'

// storiesOf('第九章：AutoComplete', module)
//   .add('AutoComplete', simpleComplete, {info: {source: false, text: textComplete}})
//   .add('自定义下拉选项', customComplete,  {info: {source: false, text: textCustom}})
//   .add('异步请求Github用户名', ajaxComplete, {info: {source: false, text: textAjax}})