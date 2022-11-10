import { Routes, Route } from 'react-router-dom';
import { Phonebook } from './Phonebook/Phonebook';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Phonebook />} />
    </Routes>
  );
};
