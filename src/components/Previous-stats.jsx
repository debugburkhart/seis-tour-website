import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Papa from 'papaparse';
import { useTable, useSortBy } from 'react-table';
import logo from '../assets/misc/SeisTourLogo-removebg-preview.png';
import '../styling/prev-stats.css'

const PrevStats = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fileName = '/assets/csv/SeisTourStats - 2023 Season Totals.csv';

        Papa.parse(fileName, {
            download: true,
            header: true,
            complete: (results) => {
                console.log('Parsed CSV data:', results.data); // Log parsed data for debugging
                setData(results.data);
            },
            error: (error) => {
                console.error('Error parsing CSV file:', error);
            }
        });
    }, []);

    const columns = React.useMemo(
        () => {
            if (data.length === 0) return []; // Return empty columns if data is not yet available

            return Object.keys(data[0]).map(key => ({
                Header: key,
                accessor: key,
            }));
        },
        [data]
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable(
        {
            columns,
            data,
        },
        useSortBy
    );

    return (
        <div className="russo-one-regular">
            <header className="header">
                <div className="logo-container">
                    <img src={logo} alt="Seis Tour" width="100" className="logo" />
                    <div className="title-container">
                        <h1 className="title">Seis Tour Golf</h1>
                        <nav className="navbar">
                            <ul className="nav-links">
                                <li><Link to="/" className="nav-link">Home</Link></li>
                                <li><Link to="/how-it-works" className="nav-link">How It Works</Link></li>
                                <li><Link to="/rules" className="nav-link">Rules</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            <main>
                <section id="stats" className="statslinks">
                <h2>Previous Season Stats</h2>
                <h5> 
                  <nav> 
                      <ul>
                          <li><Link to="/stats" className="nav-link/stats">Current Season</Link></li>
                          <li><Link to="/all-time-stats" className="nav-link">All Time</Link></li>
                      </ul>
                  </nav>
                </h5>
                    <h3>2023</h3>
                    <table {...getTableProps()} style={{ borderCollapse: 'collapse', width: '100%' }}>
                        <thead>
                            {headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map(column => (
                                        <th
                                            {...column.getHeaderProps(column.getSortByToggleProps())}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            {column.render('Header')}
                                            <span>
                                                {column.isSorted ? (column.isSortedDesc ? ' ↓' : ' ↑') : ''}
                                            </span>
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {rows.map(row => {
                                prepareRow(row);
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map(cell => (
                                            <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        ))}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </section>
            </main>
            <footer>
                <p>Updated March 20, 2024</p>
                <p>Stats only reflect league play</p>
                <p>Click on headers to sort</p>
                <p>&copy; 2024 Seis Tour Golf</p>
            </footer>
        </div>
    );
};

export default PrevStats;
