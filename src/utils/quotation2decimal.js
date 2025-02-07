function quotation2decimal(obj) {
  if (!obj) {
    return null
  }
  return Number(obj.units) + obj.nano/1000000000
}

export default quotation2decimal
