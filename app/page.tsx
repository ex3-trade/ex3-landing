// import React from 'react';
// import ChartCard from './components/front_index_chart';

// const Home: React.FC = () => {
//     return (
//         <div
//             style={{
//                 display: 'flex',
//                 justifyContent: 'center', // Center horizontally
//                 alignItems: 'center', // Center vertically
//                 minHeight: '100vh', // Ensure the full height is used
//                 padding: '20px',
//                 backgroundColor: '#0e1a1e', // Light background color for the page
//             }}
//         >
//             <div > 
//                 <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>H100 INDEX</h1>
//                 <ChartCard />
//             </div>
//         </div>
//     );
// };

// export default Home;

import React from 'react';
import ChartCard from './components/front_index_chart';
import './styles.css'; // Add a new CSS file

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <div>
                <h1 className="home-title">H100 INDEX</h1>
                <ChartCard />
            </div>
        </div>
    );
};

export default Home;
