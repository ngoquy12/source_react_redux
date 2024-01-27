import { combineReducers } from "redux";
import { count } from "./count";
import { random } from "./random";

// Gộp tất cả các reducer trong toàn bộ dự án
export const reducers = combineReducers({ count, random });
