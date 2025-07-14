import { ImageResponse } from '@vercel/og';

// Configuración de Edge Function
export const config = {
  runtime: 'edge',
  // Especificar que es un Edge Function
  regions: ['iad1'], // Puedes especificar las regiones que prefieras
};

// Cambiar a función GET para seguir el estándar de Edge Functions
export default async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    // ?title=<title>
    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')
      : 'K8Labs - Desarrollo Web Profesional';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000000',
            backgroundImage: 'radial-gradient(circle at 25px 25px, #333 2%, transparent 0%), radial-gradient(circle at 75px 75px, #333 2%, transparent 0%)',
            backgroundSize: '100px 100px',
          }}
        >
          {/* Contenedor principal */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '40px',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              borderRadius: '20px',
              border: '2px solid #333',
            }}
          >
            {/* Logo */}
            <div
              style={{
                fontSize: '72px',
                fontWeight: 'bold',
                background: 'linear-gradient(90deg, #FF6B6B, #4ECDC4)',
                backgroundClip: 'text',
                color: 'transparent',
                marginBottom: '20px',
              }}
            >
              K8Labs
            </div>

            {/* Título */}
            <div
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: '#FFFFFF',
                marginBottom: '20px',
                maxWidth: '800px',
              }}
            >
              {title}
            </div>

            {/* Subtítulo */}
            <div
              style={{
                fontSize: '32px',
                color: '#CCCCCC',
                maxWidth: '600px',
              }}
            >
              Desarrollo Web · Consultoría Tecnológica · Soluciones Cloud
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              position: 'absolute',
              bottom: '30px',
              color: '#666666',
              fontSize: '24px',
            }}
          >
            k8labs.dev
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        // Añadir configuraciones adicionales para mejorar el rendimiento
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable',
          'Content-Type': 'image/png',
        },
      },
    );
  } catch (e) {
    console.error(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
} 