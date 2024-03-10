import { formatUnits as viemFormatUnits } from 'viem'

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

export const formatUnits = (value: bigint, decimal = 18, precision?: number): string => {
  const result = viemFormatUnits(value, decimal)
  if (precision != null) {
    const tempArr = result.split('.')
    if (tempArr[1]) {
      return `${tempArr[0]}.${tempArr[1].substring(0, precision)}`
    }
  }
  return result
}
