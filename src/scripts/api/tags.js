import fetch from "cross-fetch";

export const tagListRequest = () => fetch('public/data/tags.json');