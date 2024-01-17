
const movieColumns = [
    {
        name: "Title",
        selector: (row) => row.title,
        sortable: true,
    },
    {
        name: "Year",
        selector: (row) => row.year,
        sortable: true,
    },
    {
        name: "Director",
        selector: (row) => row.director,
        sortable: true,
    },
];

export default movieColumns;
