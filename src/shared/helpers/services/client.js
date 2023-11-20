import 'react-native-url-polyfill/auto'
import { createClient } from "@supabase/supabase-js";

const projectUrl = 'https://nmswwbindwiwxgeravfq.supabase.co'
const anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tc3d3YmluZHdpd3hnZXJhdmZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE5NTc0MzgsImV4cCI6MjAwNzUzMzQzOH0.3_tO1hcql6emc3yV6K3CD6MB-tl8rL5xwabVgYWd3ug'
export const supabase = createClient(projectUrl, anonKey);