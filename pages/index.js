import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Starter Template</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <div role="heading" aria-level="2">
          Nextjs Starter Template!!!
        </div>
        <nav>
          <Link href="/testPage">Test Page</Link>
        </nav>
      </section>
    </>
  );
}
