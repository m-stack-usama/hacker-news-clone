// this object contains metadata about different feed categories used in the application.
export const feedsInfo = {
  new: { title: "News", pages: 10 }, 
  newest: { title: "Newest", pages: 12 }, 
  ask: { title: "Ask", pages: 2 }, 
  show: { title: "Show", pages: 2 }, 
  jobs: { title: "Jobs", pages: 2 },
};

// extracts the keys from `feedsInfo` and stores them in an array. eg ["new", "newest", "ask", "show", "jobs"]
// this array contains the valid feed types that the application can recognize.
export const validFeeds = Object.keys(feedsInfo); //extracted using Object.keys(feedsInfo), resulting in the validFeeds arra
