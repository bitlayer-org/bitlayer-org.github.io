import React from "react";
import SearchBar from "@theme-original/SearchBar";
import AskCookbook from "@cookbookdev/docsbot/react";

export default function SearchBarWrapper(props) {
  return (
    <>
      <SearchBar {...props} />
      <AskCookbook apiKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjU5YTZhYTAwZTliZDQ2MzcxMDM4ZTkiLCJpYXQiOjE3MTcxNTE0MDIsImV4cCI6MjAzMjcyNzQwMn0.HT6OU_LaNOc1FRddOD5Sn0iWqR41tMqK7CAtdzq69KY" />
    </>
  );
}
