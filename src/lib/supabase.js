import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cldwqhqzlnebktetomgm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsZHdxaHF6bG5lYmt0ZXRvbWdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUyOTIyOTcsImV4cCI6MjAwMDg2ODI5N30.FWcgTNe_hFZSaZamQY0FVocKma_Z8hD_13hdl8qU8as';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;