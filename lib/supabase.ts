import { createClient } from "@supabase/supabase-js";
import type { IVocabulary } from "../src/types";
const supabaseUrl = "https://kashoxgoiwhfkvhkgxnz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imthc2hveGdvaXdoZmt2aGtneG56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0MTAwMDEsImV4cCI6MjA1Mzk4NjAwMX0.LvW2tZplpudwltuknJpp4eMUVyABzBe6dukgD4U3xQU";
const supabase = createClient(supabaseUrl, supabaseKey!);

export async function fetchModule(module: string): Promise<IVocabulary[]> {
  const { data: requestedModule, error } = await supabase
    .from("japanese-vocabulary")
    .select("*")
    .eq("module", module);

  if (error) {
    console.error(error);
  }
  return requestedModule as IVocabulary[];
}

export async function fetchModules(): Promise<IVocabulary[]> {
  const { data: allModules, error } = await supabase
    .from("japanese-vocabulary")
    .select("*");

  if (error) {
    console.error(error);
  }
  return allModules as IVocabulary[];
}
