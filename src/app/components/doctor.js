import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'right', 
      alignItems: 'center', 
      height: '50vh', 
      color: 'white', 
      backgroundSize: 'cover', 
      backgroundPosition: 'right'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ textDecoration: 'underline' }}>Dr Imran</h1>
        
          <button style={{ 
            padding: '0.5rem 1rem', 
            fontSize: '1.25rem', 
            borderRadius: '0.5rem', 
            border: '1px solid black', 
            backgroundColor: 'rgba(0, 0, 0, 0.6)', 
            marginTop: '1rem' 
          }}>
            Start Chart
          </button>

        
        <Link href="/dashboard"> {/* Update the href to your current page if the file name is home.js */}
          <button style={{ 
            fontSize: '1.25rem', 
            borderRadius: '0.5rem', 
            border: '1px solid black', 
            backgroundColor: 'white', 
            marginTop: '1rem',
           text:'blue',
            textDecoration: 'underline'
          }}>
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}
