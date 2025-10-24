import { client } from './sanity/client'

async function testConnection() {
  try {
    const data = await client.fetch('*[_type == "project"][0...1]{title}')
    console.log('✅ Sanity connection successful!')
    console.log('Sample project:', data)
    return true
  } catch (error) {
    console.error('❌ Sanity connection failed:', error)
    return false
  }
}

testConnection()