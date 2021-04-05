import React from "react";
import { useParams, useRouteMatch } from "react-router-dom";

export default function ContentPage() {
  console.log(useRouteMatch());
  console.log(useParams());
  let { page } = useParams();
  return (
    <div>
      <h1>{page}</h1>
    </div>
  );
}
