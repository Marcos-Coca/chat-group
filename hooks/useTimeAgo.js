function getDateDiff (timestamp) {
  const now = Date()
  const days = Math.floor((timestamp - now) / 86400000)

  return { value: days, unit: 'day' }
}

function useTimeAgo (timestamp) {
  const timeago = getDateDiff(timestamp)

  if (timeago > 6) {
    const rtf = new Intl.RelativeTimeFormat('en', { style: 'short', numeric: 'auto' })
    return rtf.format(timeago, 'day')
  }
  const options = { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' }
  return new Intl.DateTimeFormat('en-US', options).format(timestamp)
}

export default useTimeAgo
