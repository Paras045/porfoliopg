// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://camibdqdvsfpwudsagml.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhbWliZHFkdnNmcHd1ZHNhZ21sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIxMzEyMjAsImV4cCI6MjA1NzcwNzIyMH0.wmQEHyB03OXyxz5fSpTk5ZPEDqm5ATpDEElcC_1YFi8";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);