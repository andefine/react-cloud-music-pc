import React from 'react'
import { Link } from 'react-router-dom'
import './daily-song.scss'
import { dayToWeekday } from '@/utils/time'

const DailySong = () => {
  const now = new Date()
  const day = now.getDay()
  const date = now.getDate()

  return (
    <div className="daily-song">
      <Link
        className="daily-song__pic"
        to="/taste"
      >
        <div className="daily-song__pic-content">
          <span className="daily-song__weekday">{`星期${dayToWeekday(day)}`}</span>
          <span className="daily-song__date">{date}</span>
        </div>
        <span className="daily-song__tip">根据您的音乐口味生成每日更新</span>
      </Link>
      <Link
        className="daily-song__name"
        to="/taste"
      >
        <span>每日歌曲推荐</span>
      </Link>
    </div>
  )
}

export default DailySong
