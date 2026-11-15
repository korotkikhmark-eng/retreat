const C = { sand: "#ebdfd0" };

export function WaveDivider({ from, to }) {
  return (
    <svg className="divider" viewBox="0 0 1200 80" preserveAspectRatio="none" aria-hidden="true" style={{ background: to }}>
      <path d="M0 40C200 80 400 0 600 40s400 40 600 0V0H0Z" fill={from} />
    </svg>
  );
}
