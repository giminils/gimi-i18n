// function to flatten deep objects to single level with delimited strings as keys
export function flatten(obj: Record<string, any>): Record<string, any> {
  if (typeof obj !== 'object') return obj

  const result = Object.entries(obj).reduce((acc, [key, val]: [string, any]) => {
    const add =
      typeof val !== 'object'
        ? {[key]: val}
        : Object.entries(flatten(obj[key])).reduce((acc, [subKey, subVal]) => {
          return {...acc, [`${key}.${subKey}`]: subVal}
        }, {} as Record<string, any>)
    return {
      ...acc,
      ...add
    }
  }, {})
  return result
}
