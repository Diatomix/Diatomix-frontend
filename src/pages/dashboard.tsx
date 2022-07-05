import Header from '../components/Header';
import BoundedLayout from '../components/GridLayout';

export default function Dashboard() {
  return (
    <>
      <Header />
      <BoundedLayout layout="home" />
    </>
  );
}