export const charactersResponseAdapter = ({ data: { data } }) => {
  return ({
    data: data.results,
    pagination: {
      count: data.count,
      limit: data.limit,
      offset: data.offset,
      total: data.total
    }
  })
}