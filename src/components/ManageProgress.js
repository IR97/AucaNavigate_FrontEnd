import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import './styles/ProgressTracker.css';

const ProgressTrackerPage = () => {
    const [students, setStudents] = useState([
        { id: 1, name: 'John Bayisenge', nationality: 'Rwandese', registrationyear: '2025', intake: 'January', email: 'johnbay@gmail.com', progress: 75 },
        { id: 2, name: 'Yvan Mukiza', nationality: 'Rwandese', registrationyear: '2025', intake: 'January', email: 'mukizayvan1@gmail.com', progress: 25 },
        { id: 3, name: 'Mary Ogbonna', nationality: 'Nigeria', registrationyear: '2024', intake: 'September', email: 'mogbonna05@gmail.com', progress: 50 },
        { id: 4, name: 'Akandou Merveille', nationality: 'Mali', registrationyear: '2024', intake: 'Summer', email: 'calvin250@gmail.com', progress: 0 },
        { id: 5, name: 'Muyange Jane', nationality: 'Rwandese', registrationyear: '2024', intake: 'January', email: 'muyajane@gmail.com', progress: 75 },
        { id: 6, name: 'Bolingo Cadeaux', nationality: 'Congolese', registrationyear: '2023', intake: 'September', email: 'cadeaux34@gmail.com', progress: 50 },
        { id: 7, name: 'Uwera Gentille', nationality: 'Rwandese', registrationyear: '2023', intake: 'Summer', email: 'gentille909@gmail.com', progress: 50 },
        { id: 8, name: 'Kamugisha Hope', nationality: 'Rwandese', registrationyear: '2023', intake: 'January', email: 'kamugishaH@gmail.com', progress: 25 },
    ]);

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedIntake, setSelectedIntake] = useState('');
    const [filteredStudents, setFilteredStudents] = useState([]);
    const [sortAbove50, setSortAbove50] = useState(false);
    const [sortBelow50, setSortBelow50] = useState(false);

    useEffect(() => {
        let filtered = students.filter((student) =>
            student.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        if (selectedYear) {
            filtered = filtered.filter(student => student.registrationyear === selectedYear);
        }
        if (selectedIntake) {
            filtered = filtered.filter(student => student.intake === selectedIntake);
        }
        if (sortAbove50) {
            filtered = filtered.filter(student => student.progress >= 50);
        }
        if (sortBelow50) {
            filtered = filtered.filter(student => student.progress < 50);
        }
        
        setFilteredStudents(filtered);
    }, [searchQuery, selectedYear, selectedIntake, students, sortAbove50]);

    const handleSortToggle = () => {
        if (sortAbove50) {
            setSortAbove50(false);
            setSortBelow50(true);
        } else if (sortBelow50) {
            setSortBelow50(false);
        } else {
            setSortAbove50(true);
        }
    };

    const downloadReport = (type) => {
        if (type === 'excel') {
            const ws = XLSX.utils.json_to_sheet(filteredStudents);
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, 'Students Progress');
            XLSX.writeFile(wb, 'Students_Progress.xlsx');
        } else if (type === 'pdf') {
            const documentDefinition = {
                content: [
                    { text: 'Student Progress Report', style: 'header' },
                    {
                        table: {
                            headerRows: 1,
                            widths: ['auto', '*', '*', 'auto', 'auto', '*', 'auto'],
                            body: [
                                ['ID', 'Name', 'Nationality', 'Reg_Year', 'Intake', 'Email', 'Progress'],
                                ...filteredStudents.map(student => [
                                    student.id,
                                    student.name,
                                    student.nationality,
                                    student.registrationyear,
                                    student.intake,
                                    student.email,
                                    `${student.progress}%`
                                ])
                            ]
                        }
                    }
                ],
                styles: {
                    header: { fontSize: 18, bold: true, margin: [0, 0, 0, 10] }
                }
            };
            pdfMake.createPdf(documentDefinition).download('Student_Progress_Report.pdf');
        }
    };

    const getProgressColorClass = (progress) => {
        if (progress === 0) return 'progress-red';
        if (progress <= 25) return 'progress-orange';
        if (progress <= 50) return 'progress-yellow';
        if (progress <= 75) return 'progress-green';
        if (progress === 100) return 'progress-blue';
        return '';
    };

    const uniqueYears = [...new Set(students.map(student => student.registrationyear))].sort();
    const intakeOptions = ['January', 'Summer', 'September'];

    return (
        <div className="progress-tracker-container">
            <h2>Student Orientation Progress Tracker</h2>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search student by name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
                    <option value="">All Years</option>
                    {uniqueYears.map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
                <select value={selectedIntake} onChange={(e) => setSelectedIntake(e.target.value)}>
                    <option value="">All Intakes</option>
                    {intakeOptions.map(intake => (
                        <option key={intake} value={intake}>{intake}</option>
                    ))}
                </select>
            </div>
            <div className="sort-container">
                <button onClick={handleSortToggle}>
                    {sortAbove50 ? 'Show Below 50%' : 'Show Above 50%'}
                </button>
            </div>
            <div className="download-container">
                <button onClick={() => downloadReport('excel')}>Download Excel</button>
                <button onClick={() => downloadReport('pdf')}>Download PDF</button>
            </div>
            <table className="students-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Nationality</th>
                        <th>Reg_Year</th>
                        <th>Intake</th>
                        <th>Email</th>
                        <th>Progress</th>
                        <th>Indicator</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredStudents.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.nationality}</td>
                            <td>{student.registrationyear}</td>
                            <td>{student.intake}</td>
                            <td>{student.email}</td>
                            <td>{student.progress}%</td>
                            <td>
                                <div className={`progress-bar ${getProgressColorClass(student.progress)}`}>
                                    <div className="progress-fill" style={{ width: `${student.progress}%` }}></div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProgressTrackerPage;
