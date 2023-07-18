"use client";
import React from "react";
import Back from "@/components/Back";

import { useSearchParams } from "next/navigation";
export default function Page() {
  const searchParams = useSearchParams();

  const type = searchParams.get("type");
  const search = searchParams.get("search");
  const exampleQuery = `SELECT *
  FROM products
  WHERE type = '${type}' AND (name LIKE '%${search}%' OR description LIKE '%${search}%');
  `;
  return (
    <div>
      <Back />
      <h1>Liste des produits pour les filtres:</h1>
      <p>type = {type}</p>
      <p>search = {search}</p>
      <p>
        Faire la Query SQL suivante:{" "}
        <span className="text-xl font-bold">{exampleQuery}</span>
      </p>
    </div>
  );
}
