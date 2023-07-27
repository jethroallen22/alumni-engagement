import Head from 'next/head';
import Banner from '@/components/Banner';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />
      
      <main>
        <Features />

        <Pricing />
      </main>

      <footer>
        {/* Footer content goes here */}
      </footer>
    </div>
  );
}
