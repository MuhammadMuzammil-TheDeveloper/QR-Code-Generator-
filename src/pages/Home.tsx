import QRGenerator from '@/components/QRGenerator';
import { Helmet } from 'react-helmet';

<Helmet>
  <title>QR Sparkle - Stylish QR Code Generator</title>
  <meta name="description" content="Generate stylish, fast and free QR Codes using QR Sparkle - A React based tool" />
  <meta name="keywords" content="QR code generator, React QR, QR Sparkle, Free QR Generator, Custom QR Code" />
  <meta name="author" content="Muhammad Muzammil" />

  {/* Open Graph (for Facebook & LinkedIn) */}
  <meta property="og:title" content="QR Sparkle - Free QR Code Generator" />
  <meta property="og:description" content="React-based free QR code generator with a beautiful interface and fast performance." />
  <meta property="og:url" content="https://qr-codegenerato.netlify.app" />
  <meta property="og:type" content="website" />

  {/* Twitter Card */}
  <meta name="twitter:title" content="QR Sparkle - QR Code Generator" />
  <meta name="twitter:description" content="Free React-based tool to create custom QR codes easily." />
</Helmet>


const Home = () => {
  return <QRGenerator />;
};

export default Home;
