import React from "react";
import clsx           from "clsx";
import cardStyles     from "./SkipCard.module.css";
import placeholderImg from "./placeholder-skip.jpg";

export default function SkipCard({ skip, checked, onChange }) {
  const priceIncVat = (skip.price_before_vat * (1 + skip.vat / 100)).toFixed(0);

  return (
    <label
      htmlFor={`skip-${skip.id}`}
      className={clsx(cardStyles.card, checked && cardStyles.checked)}
    >
      <input
        type="radio"
        id={`skip-${skip.id}`}
        name="skip"
        checked={checked}
        onChange={onChange}
        className={cardStyles.input}
      />

      {/* Image */}
      <img
        src={placeholderImg}
        alt={`${skip.size}-yard skip`}
        className={cardStyles.image}
      />

      {/* Textual info */}
      <div className={cardStyles.content}>
        <div className={cardStyles.meta}>
          <div>
            <h2 className={cardStyles.title}>{skip.size}-yard Skip</h2>
            <p className={cardStyles.period}>
              {skip.hire_period_days} day hire period
            </p>
          </div>

          <span className={cardStyles.price}>£{priceIncVat}</span>
        </div>

        {/* ─── Badges ─── */}
        <div className={cardStyles.badges}>
          {/* Show ONLY when allowed_on_road === true */}
          {skip.allowed_on_road && (
            <span className={clsx(cardStyles.badge, cardStyles.badgePositive)}>
              Allowed on-road ✔
            </span>
          )}

          {/* Heavy waste (only show if true) */}
          {skip.allows_heavy_waste && (
            <span className={clsx(cardStyles.badge, cardStyles.badgePositive)}>
              Heavy waste ✔
            </span>
          )}
        </div>
      </div>

      {/* Hover / selected overlay */}
      <div className={cardStyles.overlay}>
        {checked ? "Selected!" : "Select this"}
      </div>
    </label>
  );
}
