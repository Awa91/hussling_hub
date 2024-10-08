import React from 'react'


type Props = {
 title: string
}

const Tab: React.FC<Props> = ({ title }) => {
  return <div>{title}</div>
}

export default Tab