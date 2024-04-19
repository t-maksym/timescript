// ./src/date-formatter.ts

/* eslint-disable */
/* // List of all available parsing tokens
-----------------------------------------
Input   Example             Description
-----------------------------------------
YY	    01	                Two-digit year
YYYY	  2001	              Four-digit year
MM	    01-12	              Month, 2-digits
MMM	    Jan-Dec	            The abbreviated month name
D	      1-31	              Day of month
DD	    01-31	              Day of month, 2-digits
*/
/* eslint-enable */

export function formatDate (format: string, date: Date = new Date()): string {
  // Validate format string for '-' delimiter
  // if (!/^([A-Z]+-?)+$/i.test(format)) {
  //   throw new Error("Format string is invalid. Only '-' delimiters are allowed.");
  // }
  if (!/^(YY|YYYY|MMM|MM|DD|D)(-(YY|YYYY|MMM|MM|DD|D))*$/.test(format)) {
    throw new Error("Invalid format string. Use YY, YYYY, MMM, MM, DD, D seperated by '-'")
  }

  // Define a helper to pad single digit numbers with a leading zero
  const pad = (n: number): string => n < 10 ? `0${n}` : `${n}`

  // Abbreviated month names
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  // Replace format string with actual date parts
  return format.replace(/YYYY|YY|MMM|MM|DD|D/g, (match) => {
    switch (match) {
      case 'YY':
        return date.getFullYear().toString().slice(-2)
      case 'YYYY':
        return date.getFullYear().toString()
      case 'MMM':
        return monthNames[date.getMonth()]
      case 'MM':
        return pad(date.getMonth() + 1)
      case 'DD':
        return pad(date.getDate())
      case 'D':
        return date.getDate().toString()
      default:
        return match
    }
  })
}