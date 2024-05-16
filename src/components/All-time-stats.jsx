import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Papa from 'papaparse';
import { useTable, useSortBy } from 'react-table';
import logo from '../assets/misc/SeisTourLogo-removebg-preview.png';
import '../styling/styles.css';  // Assuming your CSS file is named styles.css

const TableComponent = ({ columns, data }) => {
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
        <table {...getTableProps()} style={{ borderCollapse: 'collapse', width: '100%', textAlign: 'center' }}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th
                                {...column.getHeaderProps(column.getSortByToggleProps())}
                                style={{ backgroundColor: '#f2f2f2', borderBottom: '2px solid #ddd', padding: '8px', cursor: 'pointer' }}
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
                {rows.map((row, rowIndex) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell, cellIndex) => (
                                <td key={cellIndex} {...cell.getCellProps()} style={{ padding: '8px' }}>{cell.render('Cell')}</td>
                            ))}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

const AllTimeStats = () => {
    const [allTimeStats, setAllTimeStats] = useState([]);
    const [low9Stats, setLow9Stats] = useState([]);
    const [low18Stats, setLow18Stats] = useState([]);

    useEffect(() => {
        const fetchData = (fileName, setData) => {
            Papa.parse(fileName, {
                download: true,
                header: true,
                complete: (results) => {
                    setData(results.data);
                },
                error: (error) => {
                    console.error('Error parsing CSV file:', error);
                }
            });
        };

        fetchData('../assets/csv/SeisTourStats - AllTimeStats.csv', setAllTimeStats);
        fetchData('../assets/csv/SeisTourStats - AllTimeLow9.csv', setLow9Stats);
        fetchData('../assets/csv/SeisTourStats - AllTimeLow18.csv', setLow18Stats);
    }, []);

    const allTimeStatsColumns = useMemo(
        () => {
            if (allTimeStats.length === 0) return []; // Return empty columns if data is not yet available

            return Object.keys(allTimeStats[0]).map(key => ({
                Header: key,
                accessor: key,
            }));
        },
        [allTimeStats]
    );

    const low9StatsColumns = useMemo(
        () => {
            if (low9Stats.length === 0) return []; // Return empty columns if data is not yet available

            return Object.keys(low9Stats[0]).map(key => ({
                Header: key,
                accessor: key,
            }));
        },
        [low9Stats]
    );

    const low18StatsColumns = useMemo(
        () => {
            if (low18Stats.length === 0) return []; // Return empty columns if data is not yet available

            return Object.keys(low18Stats[0]).map(key => ({
                Header: key,
                accessor: key,
            }));
        },
        [low18Stats]
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
                    <h2>All Time Stats</h2>
                    <h5>
                        <nav>
                            <ul>
                                <li><Link to="/stats">Current Season</Link></li>
                                <li><Link to="/previous-seasons-stats">Previous Seasons</Link></li>
                            </ul>
                        </nav>
                    </h5>
                    <div className="csv-container"><TableComponent columns={allTimeStatsColumns} data={allTimeStats} /></div>
                    <h3>All Time Lowest 9 Hole Gross Score</h3>
                    <div className="csv-container"><TableComponent columns={low9StatsColumns} data={low9Stats} /></div>
                    <h3>All Time Lowest 18 Hole Gross Score</h3>
                    <div className="csv-container"><TableComponent columns={low18StatsColumns} data={low18Stats} /></div>
                </section>
            </main>
            <footer>
                <p>Updated May 2, 2024</p>
                <p>Stats only reflect league play</p>
                <p>Click on headers to sort</p>
                <p>&copy; 2024 Seis Tour Golf</p>
            </footer>
        </div>
    );
};

export default AllTimeStats;
