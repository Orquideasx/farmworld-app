import Head from 'next/head';
import dynamic from 'next/dynamic';

const IDKitWidget = dynamic(
  () => import('@worldcoin/idkit').then(mod => mod.IDKitWidget),
  { ssr: false }
);

export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <Head>
        <title>Farm World</title>
      </Head>
      <h1>🌱 Bienvenido a Farm World</h1>
      <p>Verifica tu identidad única con World ID:</p>
      <IDKitWidget
        app_id="tu-app-id" // Reemplaza esto con tu App ID real
        action="farm-verification"
        onSuccess={() => alert('¡Humano verificado!')}
      >
        {({ open }) => <button onClick={open}>Verificar con World ID</button>}
      </IDKitWidget>
    </div>
  );
}
