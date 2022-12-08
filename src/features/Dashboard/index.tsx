import { Link } from 'react-router-dom';
import DashboardPage from './components/DashboardPage/DashboardPage';

interface DashboardProps {
	isLoggedIn: boolean;
	logOut: () => void;
}

const Dashboard = ({ isLoggedIn, logOut }: DashboardProps): JSX.Element => {
	return (
		<>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About Us</Link>
				</li>
				<li>
					<Link to="/contact">Contact Us</Link>
				</li>
				{isLoggedIn && (
					<li>
						<Link to="/" onClick={logOut}>
							Sign Out
						</Link>
					</li>
				)}
			</ul>
			<DashboardPage />
		</>
	);
};

export default Dashboard;
