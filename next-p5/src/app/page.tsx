import dynamic from 'next/dynamic'

const Background = dynamic(
  () => import ('@/component/background/sketch'), 
  { ssr: false }
);

function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Background/>
    </main>
  )
}

export default Home;