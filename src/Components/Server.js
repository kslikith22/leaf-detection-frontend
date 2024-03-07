import Navbar from './Navbar'
import Footor from './Footor'

export default function Server(){
    const styles = {
        container: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          fontFamily: 'Arial, sans-serif',
          fontSize: '1.5rem',
          textAlign: 'center'
        },
        title: {
          fontSize: '3rem',
          marginBottom: '1rem'
        },
        message: {
          marginBottom: '2rem'
        },
        link: {
          color: '#fff',
          backgroundColor: '#333',
          padding: '0.5rem 1rem',
          textDecoration: 'none',
          borderRadius: '5px'
        }
      };
    
      return (
        <>
        <Navbar/>
        <div style={styles.container}>
          <h1 style={styles.title}>Server Under Maintenance</h1>
          <p style={styles.message}>We apologize for the inconvenience. We are currently working on fixing some issues with our server. Please check back soon.</p>
         
        </div>
        <Footor/>
        </>
      );
}