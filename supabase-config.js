/* ==========================================================================
   Supabase configuration
   ==========================================================================
   Fill in the two values below from your Supabase project:
   Project Settings → API → Project URL / Project API keys → anon public

   This is the PUBLIC anon key — it is safe to expose in frontend code as
   long as Row Level Security (RLS) is enabled on your tables (see the
   schema.sql file for the policies this app relies on). Never put your
   service_role key here.
   ========================================================================== */

const SUPABASE_URL = "https://zdiaxiqpjhgmtyltdqwa.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkaWF4aXFwamhnbXR5bHRkcXdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk0NDczMjcsImV4cCI6MjEwNTAyMzMyN30.wwWR5SUsMDagYfM5MjriFQb8jaAG-w4xFIaIOBurnls";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
