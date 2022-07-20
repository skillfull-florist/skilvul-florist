import { Link, Outlet } from 'react-router-dom';

export default function About() {
  return (
    <div
      className='vw-100'
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: 5,
        marginbottom: 10,
      }}
    >
      <Link to='description' style={{ margin: 8, textDecoration: 'none' }}>
        <h3>Description</h3>
      </Link>
      <Link to='services' style={{ margin: 8, textDecoration: 'none' }}>
        <h3>Services</h3>
      </Link>
      <Outlet />
    </div>
  );
}
