import AboutBank from './components/AboutBank';
import ServicesSection from './components/ServicesSection';
import CreditCardSection from './components/CreditCardSection';
import LoanCalculator from './components/LoanCalculator';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='bg-background-50 text-primary-500'>
      {/* Navigation */}
      {/* ... */}
      <Navbar />
      {/* Main content */}
      <div className='max-w-7xl mx-auto px-4 py-16'>
        <h1 className='text-4xl font-bold mb-8 text-primary'>
          Welcome to Our Bank
        </h1>

        {/* About the Bank Section */}
        <AboutBank />

        {/* Customer Cards Section */}
        {/* ... (existing sections) */}

        {/* Services Section */}
        <section className='mb-16 mt-16'>
          <h2 className='text-2xl font-bold mb-4 text-primary'>
            Explore More with Our Services
          </h2>
          <ServicesSection />
        </section>

        {/* Credit Cards Section */}
        <section className='mb-16'>
          <CreditCardSection />
        </section>

        {/* Loan Calculator Section */}
        <LoanCalculator />
      </div>
    </div>
  );
}

export default App;
