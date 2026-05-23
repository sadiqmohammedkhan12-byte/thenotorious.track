import { supabase } from '@/lib/supabase'

export const habitService = {
  async getHabits() {
    const { data, error } = await supabase
      .from('habits')
      .select('*')
    return { data, error }
  },

  async toggleHabit(habitId: string, date: string) {
    // Implementation for toggling habit completion
  }
}
