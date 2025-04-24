'use client';

export default function Error({ error }: { error: Error }) {
  return <main><h1>Something went wrong</h1><pre>{error.message}</pre></main>;
}
