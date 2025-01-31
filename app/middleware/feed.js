import { validFeeds } from "~~/utils/api";

// Middleware function that runs before navigating to a route
export const defineNuxtRouteMiddleware = (from) => {
  // If the 'feed' parameter is missing or is not in the list of valid feeds, redirect to the first valid feed
  if (!from.params.feed || !validFeeds.includes(from.params.feed)) {
    return navigateTo(`/${validFeeds[0]}/1`);
  }
  // If the 'page' parameter is missing, redirect to page 1 of the selected feed
  if (!from.params.page) {
    return navigateTo(`/${from.params.feed}/1`);
  }
};
