import Header from '../components/Header';
import BoundedLayout from '../components/GridLayout';

export default function Home() {
  return (
    <>
      <Header />
      <BoundedLayout layout="home" />
    </>
  );
}
