'use client';

export default function GlobalError({ error }: { error: Error }) {
  return (
    <main>
      <h1>Global Error</h1>
      <pre>{error.message}</pre>
    </main>
  );
}
