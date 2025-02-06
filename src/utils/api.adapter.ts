
export async function getApiData(source: Apisource) {
  if (source) {
    const url = process.env.API_URL
    const apidata = await fetch(url)
    const result = await apidata.json()

    console.log(result)
  }
}
