const countDuplicatesArr = arr => {
  let result = [
    ...arr
      .reduce((mp, o) => {
        console.log({ mp })
        console.log({ o })
        if (!mp.has(o.id)) mp.set(o.id, { ...o, count: 0 })
        mp.get(o.id).count++
        return mp
      }, new Map())
      .values(),
  ]

  return result
}

export default countDuplicatesArr
