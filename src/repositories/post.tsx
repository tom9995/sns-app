import React from "react";
import { SupabaseClient } from "@supabase/supabase-js";
import { getClient } from "../lib/supabase";

const supabase = getClient();
export const postRepository = {
  async create(content: String, userId: any) {
    const { data, error } = await supabase
      .from("posts")
      .insert([{ content, user_id: userId }])
      .select();

    if (error != null) {
      throw new Error(error.message);
    }
    return data[0];
  },

  async find(page: number, limit: number) {
    page = isNaN(page) || page < 1 ? 1 : page;
    const start: number = limit * (page - 1);
    const end: number = start + limit - 1;

    const { data, error } = await supabase
      .from("posts_view")
      .select("*")
      .range(start, end)
      .order("created_at", { ascending: false });

    if (error != null) {
      throw new Error(error.message);
    }
    return data.map((post) => {
      return {
        ...post,
        userId: post.user_id,
        userName: post.user_metadata.name,
      };
    });
  },

  async delete(id: number) {
    const { error } = await supabase.from("posts").delete().eq("id", id);
    if (error != null) {
      throw new Error(error.message);
    }
    return true;
  },
};
