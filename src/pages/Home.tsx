// Simple test version to debug white screen
const Home = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold text-black">Welcome to Y_N_A</h1>
      <p className="text-lg text-gray-700 mt-4">
        This is a test page to check if the site is working.
      </p>
      <div className="mt-8 p-4 bg-gray-100 rounded">
        <p>If you can see this, the basic routing is working!</p>
      </div>
    </div>
  );
};

export default Home;
