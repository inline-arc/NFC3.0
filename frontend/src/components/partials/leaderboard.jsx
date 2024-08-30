import React, { useState } from 'react';
import { response } from '../response';

export default function LeaderBoard() {
    const [data, setData] = useState(response.list);

    const sorting = (col) => {
        let sortedData;
        if (col === "rank" || col === "ETH" || col === "age") {
            sortedData = [...data].sort((a, b) => a[col] - b[col]);
        } else if (col === "name") {
            sortedData = [...data].sort((a, b) => 
                a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
            );
        }
        setData(sortedData);
    };

    return (
        <div className="text-center mt-10">
            <div className="mb-4">
                <button 
                    data-testid="route-rank" 
                    className="px-4 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                    type="button" 
                    onClick={() => sorting("rank")}
                >
                    Rank
                </button>
                <button 
                    data-testid="route-name" 
                    className="px-4 py-2 mx-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                    type="button" 
                    onClick={() => sorting("name")}
                >
                    Name
                </button>
                <button 
                    data-testid="route-ETH" 
                    className="px-4 py-2 mx-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                    type="button" 
                    onClick={() => sorting("ETH")}
                >
                    ETH
                </button>
                <button 
                    data-testid="route-age" 
                    className="px-4 py-2 mx-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    type="button" 
                    onClick={() => sorting("age")}
                >
                    Age
                </button>
            </div>

            <div className="card mx-auto pb-10 mb-10 shadow-lg rounded-lg overflow-hidden" style={{ width: '60%' }}>
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="py-3 px-6">Rank</th>
                            <th className="py-3 px-6">Name</th>
                            <th className="py-3 px-6">ETH</th>
                            <th className="py-3 px-6">Age</th>
                        </tr>
                    </thead>
                    <tbody data-testid="app-tbody">
                        {data.map((elem, index) => (
                            <tr key={elem.id} className="bg-gray-100 border-b border-gray-200">
                                <td data-testid={`rank-${index}`} className="py-3 px-6 text-center">{elem.rank}</td>
                                <td data-testid={`name-${index}`} className="py-3 px-6">{elem.name}</td>
                                <td data-testid={`ETH-${index}`} className="py-3 px-6 text-center">{elem.ETH}</td>
                                <td data-testid={`age-${index}`} className="py-3 px-6 text-center">{elem.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
