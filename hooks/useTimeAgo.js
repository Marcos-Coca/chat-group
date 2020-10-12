function getDateDiff (timestamp) {
  const now = Date.now()
  const days = Math.ceil((timestamp - now) / 86400000)
  return days
}

function useTimeAgo (timestamp) {
  const timeago = getDateDiff(timestamp)

  if (timeago <= 6) {
    const rtf = new Intl.RelativeTimeFormat('en', { style: 'short', numeric: 'auto' })
    const time = new Intl.DateTimeFormat('en-US', { timeStyle: 'short' }).format(timestamp)

    return `${rtf.format(timeago, 'day')}, ${time}`
  }
  const options = { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' }
  return new Intl.DateTimeFormat('en-US', options).format(timestamp)
}

export default useTimeAgo
