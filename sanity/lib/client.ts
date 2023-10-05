import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skNkWyQ4QE59l51lvBPfO1aHihwhmlvyN8vrBNiC4Gh6eS9kkF5Iff4U9pyrRr8QBepUKfRTHLXaLqZeSY4RFLXygNKEoKfjzOKwo8Q0X1y9NXongjKA2cLDWIYuhWOndjCZcnIQ3vv8a6p1etlOlQgrx9RfZ47H9LUZj8bUHgTEXG7gIB4g"
})
