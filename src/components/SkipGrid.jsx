import React from "react";
import SkipCard from "./SkipCard";
import styles   from "./SkipGrid.module.css";

export default function SkipGrid({ skips, selectedId, onSelect }) {
  return (
    <div role="radiogroup" className={styles.grid}>
      {skips.map(skip => (
        <SkipCard
          key={skip.id}
          skip={skip}
          checked={skip.id === selectedId}
          onChange={() => onSelect(skip.id)}
        />
      ))}
    </div>
  );
}
