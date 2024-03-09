export const toType = (obj: any): string => {
  //@ts-ignore
  return {}.toString
    .call(obj)
    .match(/\s([a-zA-Z]+)/)[1]
    .toLowerCase()
}

export const isOuterLink = (link: string = ''): boolean => {
  return /^https?:\/\//.test(link) || link.startsWith('data:')
}

export const copyText = (text: string) => {
  if (window.isSecureContext && navigator.clipboard) {
    return navigator.clipboard.writeText(text)
  }
  return new Promise((resolve, reject) => {
    try {
      const input = document.createElement('textarea')
      input.value = text
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      input?.parentElement?.removeChild(input)
      resolve(text)
    } catch (e) {
      reject(e)
    }
  })
}
