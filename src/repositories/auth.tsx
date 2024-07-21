import React from "react";
import { getClient } from "../lib/supabase";

const supabaseClient = getClient();

export const authRepository = {
  async signup(name: string, email: string, password: string) {
    const { data, error } = await supabaseClient.auth.signUp({
      email,
      password,
      options: { data: { name } },
    });

    if (error != null) throw new Error(error.message);
    return { ...data.user, userName: data.user?.user_metadata.name };
  },

  async signin(email: string, password: string) {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email,
      password,
    });
    if (error != null) throw new Error(error.message);
    return { ...data.user, userName: data.user?.user_metadata.name };
  },
};
