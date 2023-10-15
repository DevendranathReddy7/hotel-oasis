
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://svglwletwhtyufmfqnsg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN2Z2x3bGV0d2h0eXVmbWZxbnNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTczMzk3NjAsImV4cCI6MjAxMjkxNTc2MH0.GTe0R1zBncDE_2aZ4ElsReb5d2xdsdaPtJswQ0owHrE'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase