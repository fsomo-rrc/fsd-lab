import './App.css'
import { Header } from './components/layout/header';
import { departments } from './data/departments';
import { Department } from './components/data/departments';
import { Footer } from './components/layout/footer';

function App() {
    return (
		<div>
      		<Header projectName="FSD-Labs" />

      		<main>
        		{departments.map((dept) => (
          			<Department
           				key={dept.name}
            			name={dept.name}
            			employees={dept.employees}
          			/>
        		))}
      		</main>

	        <Footer name="Faith Hilarde" studentNumber="0307222" />
    	</div>
  	);
}
export default App
