import React from 'react'
import './daily-song.scss'
import { dayToWeekday } from '@/utils/time'

const DailySong = () => {
  const now = new Date()
  const day = now.getDay()
  const date = now.getDate()

  return (
    <div className="daily-song">
      <div className="daily-song__pic">
        <div className="daily-song__pic-content">
          <span className="daily-song__weekday">{`星期${dayToWeekday(day)}`}</span>
          <span className="daily-song__date">{date}</span>
        </div>
      </div>
      <span className="daily-song__name">每日歌曲推荐</span>
    </div>
  )
}

export default DailySong
