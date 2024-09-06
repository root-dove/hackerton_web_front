import React from 'react';

export default function SearchBar(){
    return (
        <div class="pt-2 w-full relative mx-auto text-gray-600 flex-end">
            <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" type="search" name="search" placeholder="Search"></input>
            
        </div>
    );
}