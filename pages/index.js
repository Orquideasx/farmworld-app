import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useCallback } from 'react';

const IDKitWidget = dynamic(
  () => import('@worldcoin/idkit').then(mod => mod.IDKitWidget),
  { ssr: false }
);

export default function Home() {
  const handleSuccess = useCallback((proof) => {
    console.log("Proof received:", proof);
    alert("✅ Humano verificado correctamente");
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <Head>
        <title>Farm World</title>
      </Head>
      <h1>🌱 Bienvenido a Farm World</h1>
      <p>Verifica tu identidad única con World ID:</p>

      <IDKitWidget
        app_id="tu-app-id" // reemplaza con tu App ID real
        action="farm-verification"
        onSuccess={handleSuccess}
        verification_level="orb" // o "device" si aún no tienes Orb
      >
        {({ open }) => (
          <button onClick={open} style={{ padding: '10px 20px', fontSize: '16px' }}>
            Verificar con World ID
          </button>
        )}
      </IDKitWidget>
    </div>
  );
}
