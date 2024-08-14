import { createContext } from 'react';
import {ApplicationContextProps} from './types/applicationTypes';

const ApplicationContext = createContext<ApplicationContextProps | undefined>(undefined);

export default ApplicationContext;