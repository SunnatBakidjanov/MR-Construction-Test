import { navConfig } from './config/nav.config';
import { Link } from 'react-router-dom';

// Компонент навигациии
export const Nav = () => {
    return (
        <nav>
            <ul>
                {navConfig.map(item => (
                    <li key={item.path}>
                        <Link to={item.path}>
                            {item.icon && <item.icon />}
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
