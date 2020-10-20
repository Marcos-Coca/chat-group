function getDateDiff (timestamp) {
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0)
  const days = Math.ceil((timestamp - today.getTime()) / 86400000) - 1
  return days
}

function useTimeAgo (timestamp) {
  const timeago = getDateDiff(timestamp)

  if (timeago >= -6) {
    const rtf = new Intl.RelativeTimeFormat('en', { style: 'short', numeric: 'auto' })
    const time = new Intl.DateTimeFormat('en-US', { timeStyle: 'short' }).format(timestamp)

    return `${rtf.format(timeago, 'days')}, ${time}`
  }
  const options = { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' }
  return new Intl.DateTimeFormat('en-US', options).format(timestamp)
}

export default useTimeAgo
