import React from "react";
import { useParams } from "react-router-dom";

export default function ContentPage() {
  let { page, subpage } = useParams();
  return (
    <div>
      <h1>{subpage ? subpage : page}</h1>
    </div>
  );
}
