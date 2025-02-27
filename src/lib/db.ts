import { createClient } from '@/utils/supabase/server'

const supabase = async () => {
  return await createClient()
}

export const exchangeCodeForSession = async (code: string) => {
  const client = await supabase()
  const { error } = await client.auth.exchangeCodeForSession(code)
  return { error }
}

export const getUser = async () => {
  const client = await supabase()
  const { data, error } = await client.auth.getUser()
  return { data, error }
}

export const checkUserExists = async (email: string) => {
  const client = await supabase()
  const { data } = await client
    .from('user_profiles')
    .select('*')
    .eq('email', email)
    .limit(1)
    .single()
  return data
}

export const insertUser = async (email: string, username: string) => {
  const client = await supabase()
  const { error } = await client.from('user_profiles').insert({
    email,
    username,
  })
  return { error }
}
