"use client";
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "@/redux/reducers/postsReducer";
import authReducer from "@/redux/reducers/authReducer";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
  },
});
