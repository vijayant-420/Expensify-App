import React from 'react';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';



const Func = () =>(
    <BrowserRouter>
    
    <Header/>
        <Routes>
        
        <Route path="/" element = {<ExpenseDashboardPage/>} />
        <Route path="/create" element = {<AddExpensePage/>} />
        <Route path = "*" element = {<NotFoundPage/>} />
        
        </Routes>
        
    
    </BrowserRouter>
);
export default Func;