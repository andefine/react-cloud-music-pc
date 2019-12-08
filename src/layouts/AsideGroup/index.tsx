import React from 'react'

import { IMenu } from '../Main'
import AsideTitle from './AsideTitle'
import AsideItem from './AsideItem'

import styles from './index.module.scss'

interface IProps {
  className?: string
  title: string
  menus: IMenu[]
}

const AsideGroup: React.FC<IProps> = ({ className, title, menus }) => (
  <div className={`${styles.root} ${className || ''}`}>
    <AsideTitle>{title}</AsideTitle>
    {menus.map((item, index) => {
      const { label, icon, path } = item
      return (
        <AsideItem key={index} icon={icon} label={label} to={path}></AsideItem>
      )
    })}
  </div>
)

export default AsideGroup
