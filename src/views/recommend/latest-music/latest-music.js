import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './latest-music.scss'

const LatestMusic = ({ latestMusics }) => {
  return (
    <ul className="latest-music"></ul>
  )
}

LatestMusic.propTypes = {
  latestMusics: PropTypes.arrayOf(PropTypes.object).isRequired
}

const mapStateToProps = ({ recommend }) => ({
  latestMusics: recommend.latestMusics
})

export default connect(
  mapStateToProps
)(LatestMusic)
