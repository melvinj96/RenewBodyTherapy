import { Link } from 'react-router-dom';

function ServiceCard({ service, onBook, servicePath }) {
    return (
      <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-secondary/50 transform hover:-translate-y-2 flex flex-col h-full">
        <div className="relative overflow-hidden">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-tertiary font-bold text-primary mb-4 group-hover:text-secondary transition-colors duration-300">
            {service.title}
          </h3>
          <div className="space-y-2 mb-6 flex-grow">
            {service.prices.map((price, index) => (
              <p key={index} className="text-base text-gray-700 font-medium">
                {price}
              </p>
            ))}
          </div>

          <div className="flex gap-3 mt-auto">
            {servicePath ? (
              <Link 
                to={servicePath}
                className="flex-1 bg-secondary hover:bg-secondary-dark text-white font-semibold px-4 py-3 rounded-lg text-center transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Learn More
              </Link>
            ) : (
              <button 
                onClick={onBook}
                className="flex-1 bg-secondary hover:bg-secondary-dark text-white font-semibold px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Learn More
              </button>
            )}
            <button 
              onClick={onBook}
              className="flex-1 bg-primary hover:bg-primary-dark text-white font-semibold px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default ServiceCard;