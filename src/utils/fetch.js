// fetch.js
import { ref } from 'vue'

export async function useFetch(url) {
  const res = ref(null)
  const data = ref(null)
  const error = ref(null)

  await fetch(url)
    .then((res) => (res.value = res))
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err))

  return { res, data, error }
}