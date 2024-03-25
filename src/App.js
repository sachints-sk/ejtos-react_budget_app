import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';
// Add code to import the other components here under


import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                           <div className='col-sm'>
                           <Budget />
                       </div> /* Add Budget component here */
                        }        

                        {
                                            //Remaining component
                    <div className='col-sm'>
                    <Remaining />
                </div>
                        }        

                        {
                                            //ExpenseTotal component
                    <div className='col-sm'>
                    <ExpenseTotal />
                </div>
                        }        
                       
                        {
                          <div className='col-sm'>
                          <ExpenseList />
                      </div>  /* Add ExpenseList component here */
                        }         

                        {
                          <div className='col-sm'>
                          <ExpenseItem />
                      </div>  /* Add ExpenseItem component here */
                        }        

                        {
                          <div className='col-sm'>
                          <AllocationForm />
                      </div>  /* Add AllocationForm component here under */
                        }        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
