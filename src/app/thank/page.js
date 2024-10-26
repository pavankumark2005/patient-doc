import Link from 'next/link';

export default function Home() {
  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '50px',
        textDecoration: 'underline',
        height: '100vh', // Full height for the viewport
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        backgroundImage: 'url("/backg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1>Thank you for calling</h1>

      <Link href="/pres">
        <button
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            borderRadius: '10px',
            border: '1px solid black',
            backgroundColor: 'rgba(0, 0, 0, 0.6)', // Slightly transparent background
            color: 'white',
            marginTop: '20px',
          }}
        >
          Get prescription
        </button>
      </Link>
    </div>
  );
}
