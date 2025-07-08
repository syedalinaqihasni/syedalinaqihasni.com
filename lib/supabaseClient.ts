// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wiowlzodsldogjmjcqmh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indpb3dsem9kc2xkb2dqbWpjcW1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5Njc4ODksImV4cCI6MjA2NzU0Mzg4OX0.MzbmIirjLqS6DalB_pTbdpM30TNaSZCq9xXbqk6-jFg'
export const supabase = createClient(supabaseUrl, supabaseKey)
