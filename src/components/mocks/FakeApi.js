import React from 'react';
import {productsData} from './components/helpers/data.js';

export const promesa = new Promise ((resolve, reject) => {
                    
    let condition = true
        
    if (condition) {

        setTimeout(() => {

            resolve (productsData)

        },2000)
        
    } else {
        
        reject ('hay un error');
        
    }
        
});