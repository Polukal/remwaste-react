import React, { useEffect, useState } from "react";
import SkipGrid from "./SkipGrid";
import styles from "./SkipSelectionPage.module.css";

const ENDPOINT =
  "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft";

export default function SkipSelectionPage({ onBack, onContinue }) {
  const [skips, setSkips] = useState([]);
  const [selectedId, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(ENDPOINT)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.statusText)))
      .then(setSkips)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className={styles.center}>Loading skips…</p>;
  if (error) return <p className={styles.center}>Error: {error}</p>;

  /* find the chosen skip (or null when none selected) */
  const selectedSkip = skips.find((s) => s.id === selectedId) || null;
  const priceIncVat = selectedSkip
    ? (selectedSkip.price_before_vat * 1.2).toFixed(0)
    : null;

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.h1}>Choose Your Skip Size</h1>
      <h3 className={styles.h5}>
        Select the skip size that best suits your needs
      </h3>

      <SkipGrid skips={skips} selectedId={selectedId} onSelect={setSelected} />

      <footer className={styles.footer}>
        <div>
          <h5 className={styles.info}>
            Imagery and information shown throughout this website may not
            reflect the exact shape or size specification, colours may vary,
            options and/or accessories may be featured at additional cost.
          </h5>
        </div>
        <div className={styles.price_actions}>
          {selectedSkip && (
            <div className={styles.summary}>
              <div className={styles.group}>
                <strong className={styles.summarySize}>
                  {selectedSkip.size}-yard Skip
                </strong>
                <span className={styles.summaryPrice}>
                  £{priceIncVat} inc VAT
                </span>
                <span className={styles.summaryPeriod}>
                  {selectedSkip.hire_period_days} day hire
                </span>
              </div>
            </div>
          )}

          <div className={styles.actions}>
            <button onClick={onBack} className={styles.secondary}>
              Back
            </button>
            <button
              disabled={!selectedSkip}
              onClick={() => onContinue(selectedSkip?.id)}
              className={styles.primary}
            >
              Continue
            </button>
          </div>
        </div>
      </footer>
    </section>
  );
}
