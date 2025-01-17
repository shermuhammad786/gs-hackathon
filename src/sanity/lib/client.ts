import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: 'sktFmkvkWPU0qKVcZr5lJTIbSV8DdBu01vfrgz204HlEXPsp7BDET6ilvkHJkD8CYoTNGWbA1Ddw2v5AN0eaGz5aLzX6I43igvHDhAzPDgKK4pWnMcGpT63cKRnjH1V8i3HTPSPqEYgkVIi1jl8zYRd3GBUtLnIhYGw74fo4kR6vJEK72JEx'
})
